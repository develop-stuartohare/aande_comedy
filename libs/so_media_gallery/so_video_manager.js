function VideoPage(args)
{
    for(var key in args)
    {
        this[key] = args[key];
    }
    
    if(this.source==="html5")
    {        
        this.video = new VideoHTML5(args); 
    }
    else if(this.source==="vimeo")
    {
        this.video = new VideoVimeo(args); 
    }    
};

VideoPage.prototype =
{
    previous:false,
    next : false,
    video : false,
    
    render : function()
    {        
        var html = "";
        html += '<div class="cVideoWrapper">';
        html += this.video.render();        
        html +='</div>';        
        return html;
    },  
    
    
    render_thumb : function()
    {
        return '<img src="'+this.thumb_src()+'" />';
    },    
            
    onElementInDocument : function()
    {
        this.el();
        this.elNav();
        this.video.onElementInDocument();
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
    
    thumb_src : function()
    {
        return this.video.thumb_src();
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
        this.video.stop();
        this.$el.removeClass('cActive');
        this.$elNav.removeClass('cActive');
    },
    
    show : function(objGalleryManager)
    {
        this.$el.addClass('cActive');
        this.$elNav.addClass('cActive');
        if(objGalleryManager)
        {
            if(objGalleryManager.playOnLaunch)
            {
                this.video.play();
            }
        }     
    },
    
    showNext : function()
    {
        this.video.stop();
        this.hide();
        this.next.show(); 
        
    },
    
    showPrevious : function()
    {
        this.video.stop();
        this.hide();
        this.previous.show(); 
        
    }
};


var VIDEO_MANAGER = 
{
    arrVideoPages : [],
    objCurrentVideoPage : false,

           
    addVideo : function(args)
    {               
        var intLen = this.arrVideoPages.length;
        args.guid = intLen;
        args.elId = 'iVideoPage_' + intLen;
        var newVidPage = new VideoPage(args); 

        this.arrVideoPages.push(newVidPage);
        
        if(intLen)
        {
            newVidPage.previous = this.arrVideoPages[intLen-1];
            this.arrVideoPages[intLen-1].next = newVidPage;
        }
                
    },
    
    getVideoPageByGUID : function(intGUID)
    {
        return this.arrVideoPages[intGUID];
    },
    
    render : function(strSelector)
    {
        var html = this.renderVideoLinks(); 
        var htmlModal = this.renderVideoModal();
        
        if(SO_BLANKER)
        {
            SO_BLANKER.el().append(htmlModal);
        }
        else
        {
            html += htmlModal;            
        }
        
        $(strSelector).html(html);
        
        for(var i=0, objVideoPage; objVideoPage=this.arrVideoPages[i];i++)
        {
            objVideoPage.onElementInDocument();
        }
        
    },
    
    renderVideoLinks : function()
    {        
        var html = '<div class="cVideoLinkWrapper">';
        
        for(var i=0, objVideoPage; objVideoPage=this.arrVideoPages[i];i++)
        {
            html += '<div class="cVideoLink cClickable" onclick="VIDEO_MANAGER.videoLinkClicked(\''+i+'\')">';
            html += '<img src="'+objVideoPage.video.thumb_src()+'" alt="'+objVideoPage.title+'" />';
            html += '<div class="cVideoThumbTitle">'+objVideoPage.title+'</div>';
            html += '</div>';
        }
        html +='<div style="clear:both;"></div>';
        html +='</div>';
        return html;        
    },
    
    renderVideoModal : function()
    {
        var html = "";
                      
        html += '<div id="iVideoModal" class="cModalWrapper">';
        html += '<div class="cModalClose cClickable" onclick="VIDEO_MANAGER.closeModal()">x</div>';
        html += this.renderVideoPages();
        html += '</div>';
        
        return html;
    },
    
    renderVideoPages : function()
    {
        var html = "";
        for(var i=0, objVideoPage; objVideoPage=this.arrVideoPages[i];i++)
        {
            html +='<div id="iVideoPage_'+i+'" class="cVideoPage cModalPage">';
            
            html += '<h2>'+ objVideoPage.title+ '</h2>';            
            html += this.getVideoHTML(objVideoPage);   
            html += '<div class="cDescription">' + objVideoPage.description + '</div>'; 
            html +='</div>';
        }        
        html +='<div style="clear:both;"></div>';
        return html;
        
    },
    
    renderModalNav : function(objWhichVideoPage)
    {
        var html = '<div class="cModalNavWrapper">';
        html += objWhichVideoPage.hasPrevious() ? '<span class="cModalNav cModalNavPrevious cClickable" onclick="VIDEO_MANAGER.previousClicked(event,\'' + objWhichVideoPage.guid+'\')"><</span>' : "";        
        
        html += '<div class="cModalNavLinkWrapper">';
        for(var i=0, objVideoPage=0; objVideoPage=this.arrVideoPages[i];i++)
        {
            var strActiveClass = "";
            if(i==objWhichVideoPage.guid)
            {
                strActiveClass = "cActive";
            }
            html += '<div class="cModalNavLink cModalNavLinkDot cClickable '+strActiveClass+'" onclick="VIDEO_MANAGER.videoLinkClicked(\''+objVideoPage.guid+'\')">';
            //html += '<div class="cModalPageDotTooltip">' + objVideoPage.title + '</div>';
            html +='</div>'
        }        
        html += '<div style="clear:both;"></div>';
        html +='</div>';
        html += '<span class="cModalPageIndex">' + (objWhichVideoPage.guid+1) + '/'+ this.arrVideoPages.length + '</span>';
        html += objWhichVideoPage.hasNext() ? '<span class="cModalNav cModalNavNext cClickable" onclick="VIDEO_MANAGER.nextClicked(event,\'' + objWhichVideoPage.guid+'\')">></span>' : "";
        
        html +='</div>';
        
        return html;
    },
    
    getVideoHTML : function(objVideoPage)
    {        
        var html = "";
        html += '<div class="cVideoWrapper">';
        html += objVideoPage.video.render();
        html += this.renderModalNav(objVideoPage);
        html +='</div>';        
        return html;
    },    
        
    videoLinkClicked : function(intGUID)
    {
        VIDEO_MANAGER.showModal();
        var objVideoPage = VIDEO_MANAGER.getVideoPageByGUID(intGUID);
        if(VIDEO_MANAGER.objCurrentVideoPage)
        {
            VIDEO_MANAGER.objCurrentVideoPage.video.stop();
            VIDEO_MANAGER.objCurrentVideoPage.hide();
        }
        objVideoPage.show();
        objVideoPage.video.play();
 
        VIDEO_MANAGER.objCurrentVideoPage = objVideoPage;
    },
    
    
    showModal : function()
    {
        if(SO_BLANKER)
        {
            SO_BLANKER.show();
        }

        $('#iVideoModal').show();
    },
    
    closeModal : function()
    {
        VIDEO_MANAGER.objCurrentVideoPage.video.stop();
        $('#iVideoModal').hide();
        $('.cVideoPage.cActive').removeClass('cActive');
        if(SO_BLANKER)
        {
            SO_BLANKER.hide();
        }
    },
    
    nextClicked : function(event, intVideoGUID)
    {
        var objVideoPage = VIDEO_MANAGER.getVideoPageByGUID(intVideoGUID);
        objVideoPage.showNext();
        VIDEO_MANAGER.objCurrentVideoPage = objVideoPage.next;

    },
    
    previousClicked : function(event, intVideoGUID)
    {
        var objVideoPage = VIDEO_MANAGER.getVideoPageByGUID(intVideoGUID);
        objVideoPage.showPrevious();       
        VIDEO_MANAGER.objCurrentVideoPage = objVideoPage.previous;
    }
        
};
