$(document).ready(function()
{       
    SO_BLANKER.init();
});

var SO_BLANKER =
{
    zindex:10000,
    $elCached: false,
    
    init : function()
    {
        $('body').prepend('<div id="iBlanker"></div>');
        this.$elCached = $('#iBlanker');
        //this.$elCached.click(SO_BLANKER.hide);
    },
    
    el : function()
    {
        return SO_BLANKER.$elCached;
    },
    
    show : function()
    {
        SO_BLANKER.$elCached.show();
    },
    
    hide : function(event)
    {
        if(event && event.target.id !== 'iBlanker')
        {
            return;
        }
        SO_BLANKER.$elCached.hide();        
    }
    
}
