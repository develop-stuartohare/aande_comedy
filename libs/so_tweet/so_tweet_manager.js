var TWEET_MANAGER =
{
    _tweets : false,
    
    tweets : function(objTweets)
    {
        this._tweets = objTweets;
    },
    
    render : function(strSelector)
    {
        return;
        var $el = $(strSelector);
        
        var html = "";
        
        for(var i=0,tweet=0;tweet=this._tweets[i];i++)
        {
            html += this.renderTweet(tweet);
        }
        
        $el.html(html);
        
    },
    
    renderTweet : function(objTweet)
    {
        var html = "";
        html +='<div class="cTweet">"'
        html += TWEET_MANAGER.replaceURLWithHTMLLinks(objTweet.text);
        html += '"</div>';
        
        return html;
    },
    
    replaceURLWithHTMLLinks : function(text) 
    {
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        return text.replace(exp,"<a href='$1' target='_blank'>$1</a>"); 
    }    
};
