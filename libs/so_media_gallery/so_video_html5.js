function VideoHTML5(args)
{
    for(var key in args)
    {
        this[key] = args[key];
    }
};

VideoHTML5.prototype =
{

    video_src_mp4 : function()
    {        
        if(!this.file_mp4)
        {
            this.file_mp4 = this.file +".mp4";
        }
        return this.path + "/" + this.file_mp4;
    },

    video_src_webm : function()
    {        
        if(!this.file_webm)
        {
            this.file_webm = this.file +".webm";
        }
        return this.path + "/" + this.file_webm;
    },

    video_src_ogv : function()
    {        
        if(!this.file_ogv)
        {
            this.file_ogv = this.file +".ogv";
        }
        return this.path + "/" + this.file_ogv;
    }, 

    thumb_src : function()
    {
        if(!this.thumb)
        {
            this.thumb = this.file + ".png";
        }
        return this.path +"/"+ this.thumb;
    },
    
    poster_src : function()
    {
        if(!this.poster)
        {
            this.poster = this.thumb_src();
        }
        return this.poster;        
    },
    
    render : function()
    {        
        var html = "";

        html +='<video id="iMediaElement_'+this.guid+'" poster="'+this.poster_src() +'"controls="controls" preload="none">';
        html +='<source type="video/mp4" src="'+this.video_src_mp4() +'" />';
        html +='<source type="video/webm" src="'+this.video_src_webm() +'" />';
        html +='<source type="video/ogg" src="'+this.video_src_ogv() +'" />';
        html +='</video>';        
        return html;        
    },    

    onElementInDocument : function()
    {
        this.el();
        this.getVideoElement();
    },

    el : function()
    {
        if(!this.$el)
        {
            this.$el = $('#'+this.elId);            
        }
        return this.$el;
    },

    getVideoElement : function()
    {
        if(!this.videoTag)
        {
            this.videoTag = document.getElementById('iMediaElement_'+this.guid);
        }
        return this.videoTag;
    },

    play : function()
    {
        this.videoTag.play();
    },

    stop: function()
    {
        this.videoTag.pause();
    },

    pause : function()
    {
        this.videoTag.pause();
    } 
};