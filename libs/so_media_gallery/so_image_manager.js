
function Image(args)
{
    for(var key in args)
    {
        this[key] = args[key];
    }
};

Image.prototype =
{
    previous:false,
    next : false,
    description : "Enter Text Here",
    
    render : function()
    {        
        var html = "";
        html += '<div class="cImageWrapper">';        
        html += '<img src="'+this.src()+'" />';        
        html +='</div>';
        
        return html;        
    },        
    
    render_thumb : function()
    {
        return '<img src="'+this.thumb_src()+'" />';
    },
    
    thumb_src : function()
    {
        if(!this.thumb)
        {
            this.thumb = this.image;
        }
        
        return this.path + "/" + this.thumb;
    },
    
    src : function()
    {        
        return this.path + "/" + this.image;
    },
    
    onElementInDocument : function()
    {        
        this.el();  
        this.elNav();
    },
    
    el : function()
    {
        if(!this.$el)
        {
            this.$el = $(this.pageSelector);
        }
        return this.$el;
    },
    
    elNav : function()
    {
        if(!this.$elNav)
        {
            this.$elNav = $(this.navItemSelector);
        }
        return this.$elNav;        
    },
        
    hasPrevious : function()
    {
        return this.previous != false;
    },    
    
    hasNext : function()
    {
        return this.next != false;
    },
           
    hide : function()
    {
        this.$el.removeClass('cActive');
        this.$elNav.removeClass('cActive');
    },
    
    
    show : function()
    {
        this.$el.addClass('cActive');
        this.$elNav.addClass('cActive');        
    },
        
    showNext : function()
    {
        this.hide();
        this.next.show(); 
        
    },
    
    showPrevious : function()
    {
        this.hide();
        this.previous.show();         
    }
};

function Gallery(args)
{
    this.gallery_id = Gallery.prototype.gallery_id++;    
    this.booPopup = args.modal || false;
    args.navigation = args.navigation ||{};
    this.nav.thumbHeight = args.navigation.thumb_width || this.nav.thumbHeight;
    this.nav.booImageNav = args.navigation.image || this.nav.booImageNav;
    this.linkThumbWidth = args.link_thumb_width || this.linkThumbWidth;
    this.playOnLaunch = args.play_on_launch;
    this.$root = $(args.root_selector);
    this.objCurrentItem = false;
    this.arrGalleryItems = [];
    this.createGalleryItems(args.data);  
    Gallery.galleries.push(this);
    this.render();
    
}

Gallery.gallery_id = 0;
Gallery.galleries = [];

Gallery.linkClicked = function(intGalleryId, intImageId)
{
    Gallery.galleries[intGalleryId].linkClicked(intImageId);    
};

Gallery.nextClicked = function(intGalleryId)
{
    Gallery.galleries[intGalleryId].nextClicked();    
};


Gallery.previousClicked = function(intGalleryId)
{
    Gallery.galleries[intGalleryId].previousClicked();    
};

Gallery.closeModal = function(intGalleryId)
{
    Gallery.galleries[intGalleryId].closeModal();    
};

Gallery.nextVideoClicked = function(intGalleryId)
{
    Gallery.galleries[intGalleryId].nextVideoClicked(intGalleryId);    
};

Gallery.previousVideoClicked = function(intGalleryId)
{
    Gallery.galleries[intGalleryId].previousVideoClicked(intGalleryId);    
};




Gallery.prototype = 
{
    gallery_id : 0,  
    booPopup : false,
    linkThumbWidth : 100,
    $root : false,    
    arrGalleryItems : [],
    objCurrentItem : false,  
    nav :
    {
        thumbHeight :90,
        booImageNav: false
    },      
    currentVideoPage : 0,
            
    createGalleryItems: function(arrGalleryItems)
    {               
        for(var i=0,item_data=0;item_data=arrGalleryItems[i];i++)
        {
            item_data.gallery_item_id = i;
            item_data.gallery_id = this.gallery_id;
            item_data.pageSelector = ".cModalPage[data-gallery-id='"+item_data.gallery_id+"'][data-gallery-item-id='"+item_data.gallery_item_id+"']";
            item_data.navItemSelector = ".cModalNavLink[data-gallery-id='"+item_data.gallery_id+"'][data-gallery-item-id='"+item_data.gallery_item_id+"']";
            
            var itemClass = item_data.type === 'image' ? Image : VideoPage;
            var objNewGalleryItem = new itemClass(item_data); 
            this.arrGalleryItems.push(objNewGalleryItem);
            
            if(i)
            {
                objNewGalleryItem.previous = this.arrGalleryItems[i-1];
                this.arrGalleryItems[i-1].next = objNewGalleryItem;
            }   
        }
    },
    
    getGalleryItemByGUID : function(gallery_item_id)
    {
        return this.arrGalleryItems[gallery_item_id];
    },
    
    render : function()
    {        
        if(SO_BLANKER && this.booPopup)
        {
            SO_BLANKER.el().append(this.renderModal());
            this.$root.html(this.renderLinks());
        }
        else
        {
            this.$root.html(this.renderModal());
        }                
 
        for(var i=0, objGalleryItem; objGalleryItem=this.arrGalleryItems[i];i++)
        {
            objGalleryItem.onElementInDocument();
        }
        
        this.onInDocument();
        
        this.objCurrentItem = this.arrGalleryItems[0];
        this.objCurrentItem.show();        
    },
    
    onInDocument : function()
    {
        
    },
    
    renderLinks : function()
    {        
        var screenwidth = $(window).width();        
        var videosPerPage = 2;
        var linkWidth = 200/videosPerPage;
        this.videoPages = Math.round(this.arrGalleryItems.length / videosPerPage);
        
        var html ="";
        html +='<div id="iImageLinksWrapper_'+this.gallery_id+'" page_id="cFirstPage">';
        if(this.videoPages>1)
        {
            html +='<div class="cImageLinksGalleryNav cPrevious" onclick="Gallery.previousVideoClicked('+this.gallery_id+')"></div>';
            html +='<div class="cImageLinksGalleryNav cNext" onclick="Gallery.nextVideoClicked('+this.gallery_id+')"></div>';
        }

            html += '<div id="iImageLinkSlider_'+this.gallery_id+'" class="cImageLinkWrapperSlider" style="width:'+screenwidth *this.videoPages+'px">';

            for(var j=0; j<this.videoPages;j++)
            {
                var start = j*videosPerPage; 
                var end = start +  videosPerPage;
                var arrPageItems = this.arrGalleryItems.slice(start, end);

                html += '<div class="cImageLinkPageWrapper" style="width:'+screenwidth +'px">';
                html += '<div class="cImageLinkWrapper" >';
                for(var i=0, objGalleryItem; objGalleryItem=arrPageItems[i];i++)
                {
                    html += '<div class="cGalleryLink cClickable" style="width:'+linkWidth+'%" onclick="Gallery.linkClicked('+this.gallery_id+',\''+objGalleryItem.gallery_item_id+'\')">';            
                    html += '<img src="'+objGalleryItem.thumb_src()+'" alt="'+objGalleryItem.title+'" />';                                  
                    html += '<div class="cPlayIcon"></div>';
                    html += '<div class="cGalleryThumbTitle">'+objGalleryItem.title+'</div>';
                    html += '</div>';
                }            
                html +='<div style="clear:both;"></div>';
                html +='</div>';  
                html +='</div>';  
                //html +='</div>';              
            }

            html +='</div>';
        html +='</div>';
        return html;        
    },
    
    renderModal : function()
    {
        var html = "";
        var strInPageClass = this.booPopup ? "cModalInPopup" : "cModalInPage";
                
        html += '<div class="cModalWrapper '+strInPageClass+'" data-gallery-id="'+this.gallery_id+'" data-page-id="0">';
        html += this.booPopup ? '<div class="cModalClose cClickable" onclick="Gallery.closeModal('+this.gallery_id+')">x</div>' : "";        
        html +=this.renderModalNav();
        html += this.renderModalPages();        
        html +='<div style="clear:both"></div>';
        html += '</div>';
        
        return html;
    },
    
    renderModalPages : function()
    {
        var html = '<div class="cModalPageWrapper">';
        
        for(var i=0, objGalleryItem; objGalleryItem=this.arrGalleryItems[i];i++)
        {
            html +='<div class="cModalPage" data-gallery-id="'+objGalleryItem.gallery_id+'" data-gallery-item-id="'+objGalleryItem.gallery_item_id+'">';
            
            html +='<h3>'+ objGalleryItem.title+ '</h3>';
            html += objGalleryItem.render();
            html += '<div class="cDescription">' + objGalleryItem.description + '</div>'; 
            html +='</div>';
        }        

        html += '</div>';
        return html;
        
    },
    
    renderModalNav : function()
    {
        if(this.nav.booImageNav)
        {
            return this.renderModalNavImage();
        }
        else
        {
            return this.renderModalNavGraphic();
        }

    },    
        
    renderModalNavImage : function()
    {
        
        var strSliderShow = this.arrGalleryItems.length <7 ? ' style="visibility:hidden" ' : "";
        var htmlLinks = "";
        
        for(var i=0, objGalleryItem=0; objGalleryItem=this.arrGalleryItems[i];i++)
        {
            htmlLinks += '<div data-gallery-id="'+objGalleryItem.gallery_id+'" data-gallery-item-id="'+objGalleryItem.gallery_item_id+'" class="cModalNavLink cModalNavLinkImage cClickable" onclick="Gallery.linkClicked('+this.gallery_id+',\''+objGalleryItem.gallery_item_id+'\')">';
            htmlLinks += objGalleryItem.render_thumb();//'<img src="'+objGalleryItem.thumb_src()+'" />';
            htmlLinks += '</div>';                                             
        }        
        
        var html = '<div class="cModalNavWrapper cModalNavImage">';  
        html += '<div class="cModalNav cModalNavPrevious" onclick="Gallery.previousClicked('+this.gallery_id+')" ' + strSliderShow + '></div>';
        html += '<div class="cModalNavLinkWrapper" >';    
        html +='<div class="cNavLinkSlider" data-gallery-id="'+this.gallery_id+'" >'
        html += htmlLinks;        
        html += '</div>';
        html += '</div>';     
        html += '<div class="cModalNav cModalNavNext" onclick="Gallery.nextClicked('+this.gallery_id+')" '+strSliderShow+'></div>';
        html +='</div>';
              
        
        return html;        
    },
    
    renderModalNavGraphic : function()
    {
        
        var htmlLinks = "";
        for(var i=0, objGalleryItem=0; objGalleryItem=this.arrGalleryItems[i];i++)
        {
            var strActiveClass = "";
            htmlLinks += '<div id="iModalNav_'+i+'" class="cModalNavLink cModalNavLinkDot cClickable '+strActiveClass+'" onclick="Gallery.linkClicked('+this.gallery_id+',\''+objGalleryItem.gallery_item_id+'\')"></div>';                                                
        }    
        
        var html = '<div class="cModalNavWrapper cModalNavGraphic">';
        html += '<div class="cModalNavLinkWrapper">';
        html += htmlLinks;
        html +='<div style="clear:both"></div>';
        html += '</div>';
        html +='</div>';
        
        return html;        
    },    

    
    linkClicked : function(intGUID)
    {
        this.showModal();
        
        var objGalleryItem = this.getGalleryItemByGUID(intGUID);
        if(this.objCurrentItem)
        {
            this.objCurrentItem.hide();
        }        
        objGalleryItem.show(this);
 
        this.objCurrentItem = objGalleryItem;
    },
    
    
    showModal : function()
    {
        if(SO_BLANKER && this.booPopup)
        {
            SO_BLANKER.show();
            $('.cModalWrapper[data-gallery-id="'+this.gallery_id+'"]').show();
        }        
    },
    
    closeModal : function()
    {
        if(this.objCurrentItem)
        {
            this.objCurrentItem.hide();
        }          
        $('.cModalWrapper[data-gallery-id="'+this.gallery_id+'"]').hide();
        $('.cVideoPage.cActive').removeClass('cActive');
        if(SO_BLANKER)
        {
            SO_BLANKER.hide();
        }
    },
    
    nextClicked : function()
    {
        var $navWrapper = $('.cNavLinkSlider[data-gallery-id="'+this.gallery_id+'"]');
        var modalWrapper = $('.cModalWrapper[data-gallery-id="'+this.gallery_id+'"]');
        var sliderHeight = this.arrGalleryItems.length * this.nav.thumbHeight;
        var pageId =  modalWrapper.attr("data-page-id");

        
        var newTop = this.nav.thumbHeight * 5;            
        var top = parseInt($navWrapper.css('top'));
        if(top > 0-(sliderHeight-newTop))
        {
            $navWrapper.animate({'top':top + (0-newTop)}, 500);
            pageId = parseInt(pageId) + 1;
            modalWrapper.attr("data-page-id", pageId);
        }

    },
    
    previousClicked : function(event, intImageGUID)
    {
        var $navWrapper = $('.cNavLinkSlider[data-gallery-id="'+this.gallery_id+'"]');
        //var sliderHeight = this.arrGalleryItems.length * this.nav.thumbHeight;
        var modalWrapper = $('.cModalWrapper[data-gallery-id="'+this.gallery_id+'"]');
        var pageId =  modalWrapper.attr("data-page-id");
        
        var newTop = this.nav.thumbHeight * 5;            
        var top = parseInt($navWrapper.css('top'));
        if(top < 0 )
        {
            pageId = parseInt(pageId) - 1;
            modalWrapper.attr("data-page-id", pageId);
            $navWrapper.animate({'top':top + newTop}, 500);
        }
    },
         
    previousVideoClicked : function(gallery_id)
    {
        if(this.currentVideoPage > 0)
        {       
            this.currentVideoPage--;
            var screenwidth = $(window).width();
            var linksWrapper = $('#iImageLinksWrapper_'+gallery_id);
            var videoSlider = $('#iImageLinkSlider_'+gallery_id);
            var pageId = 'cMiddlePage';
            pageId = this.currentVideoPage===0 ? 'cFirstPage' : pageId;
            pageId = this.currentVideoPage=== this.videoPages-1 ? 'cLastPage' : pageId;
            
            linksWrapper.attr('page_id',pageId);

            var newleft = screenwidth;            
            var left = parseInt(videoSlider.css('left'));
            videoSlider.animate({'left':left - (0-newleft)}, 500);
            
        }
    },    
    
    nextVideoClicked : function(gallery_id)
    {
        if(this.currentVideoPage < this.videoPages-1)
        {       
            this.currentVideoPage++;
            var screenwidth = $(window).width();
            var linksWrapper = $('#iImageLinksWrapper_'+gallery_id);
            var videoSlider = $('#iImageLinkSlider_'+gallery_id);
            var pageId = 'cMiddlePage';
            pageId = this.currentVideoPage===0 ? 'cFirstPage' : pageId;
            pageId = this.currentVideoPage=== this.videoPages-1 ? 'cLastPage' : pageId;
            
            linksWrapper.attr('page_id',pageId);

            var newleft = screenwidth;            
            var left = parseInt(videoSlider.css('left'));           
            videoSlider.animate({'left':left + (0-newleft)}, 500);
            
        }
    },    
        
};
