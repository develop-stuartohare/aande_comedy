function VideoVimeo(args)
{
    for(var key in args)
    {
        this[key] = args[key];
    }
    this.instance_id = VideoVimeo.instance++;
};
VideoVimeo.instance = 0;

VideoVimeo.prototype =
{    
    defaultWidth : "805px",
    defaultHeight: "415px",
    
    video_url : function()
    {        
        return this.url
    },

    
    thumb_src : function()
    {
        return this.thumb;
    },
    
    render : function()
    {        
        var html = "";
        html += '<iframe class="" id="iMediaElement_'+this.instance_id+'" src="'+ this.url+'" width="'+this.defaultWidth+'" height="'+this.defaultHeight+'" frameborder="0"></iframe>';
        return html;
    },        
    
    onElementInDocument : function()
    {
        this.initialiseVideo();
    },
    
    videoEl : function()
    {
        if(!this.$video)
        {
            this.initialiseVideo();
        }
        return this.$video;
    },
        
    initialiseVideo : function()
    {
        this.$video = $('#iMediaElement_'+this.instance_id);        

        var self = this;            
        var eventCallback = function(e)
        {
            self.onMessageReceived(e);
        };

        if (window.addEventListener)
        {
            window.addEventListener('message', eventCallback, false);
        }
        else 
        {
            window.attachEvent('onmessage', eventCallback, false);
        }      
                
//        var onPlayClicked = function(e)
//        {
//            self.play();
//        };        
//        this.$playButton.on('click', onPlayClicked); 
                
    },
    
    play : function()
    {
        this.post('play');
    },
    
    stop: function()
    {
        this.post('pause');
    },
    
    pause : function()
    {
        this.post('pause');
    },
    
    onMessageReceived : function(e)
    {
        var data = JSON.parse(e.data);
        switch (data.event) 
        {
            case 'ready':
                this.onReady();
                break;
               
            case 'playProgress':
                this.onPlayProgress(data.data);
                break;
                
            case 'pause':
                this.onPause();
                break;
               
            case 'finish':
                this.onFinish();
                break;
        }    
    },

    // Helper function for sending a message to the player
    post : function (action, value) 
    {
        var data = { method: action };

        if (value) {
            data.value = value;
        }

        var test = this.$video[0].contentWindow;
        test.postMessage(JSON.stringify(data), this.url);
    },

    onReady : function()
    {
        //status.text('ready');

        this.post('addEventListener', 'pause');
        this.post('addEventListener', 'finish');
        this.post('addEventListener', 'playProgress');
    },

    onPause : function()
    {

    },

    onFinish : function()
    {

    },

    onPlayProgress : function(data)
    {

    }    
};

