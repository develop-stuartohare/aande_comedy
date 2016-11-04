(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


var time;
function draw() {
    requestAnimationFrame(draw);
    var now = new Date().getTime(),
        dt = now - (time || now);
 
    time = now;
 
    SCROLL_MANAGER.update();   
    
}

var currentScroll = 0;
$(document).ready(function()
{           
    var objVideoGallery = new Gallery(video_data);
    var objImageGallery = new Gallery(image_data);        
    
    TWEET_MANAGER.render('#iTweetRoot');
        
    $('#iNavigation div.cNavLink').click(
        function(event)
        {
            //event.preventDefault();
            $('#iNavigation div.cNavLink').removeClass('cActive');
            var hash = $(this).attr('href');
            
            var offset = typeof(SECTIONS)==='undefined'?  $(hash).offset().top : SECTIONS[hash.replace('#','')];
            $(this).addClass('cActive');
            var distance = Math.abs(offset - currentScroll);
            currentScroll = offset;
            var scrollTime = Math.abs(distance)*0.35;
            
            $('html,body').animate({scrollTop: offset+1}, scrollTime, "linear");
                      
        }
    );    
    
    SCROLL_MANAGER.init();     
    draw();
    // $(window).scroll(SCROLL_MANAGER.update);  
    
});

var SCROLL_MANAGER = 
{
    $window : false,
    arrCallbacks : [],
    
    init : function()
    {
        this.$window = $(window);
    },
    
    addCallback : function(cb)
    {
        this.arrCallbacks.push(cb);
    },
    
    update : function(event)
    {        
        var intScrollTop =  SCROLL_MANAGER.$window.scrollTop();
        for(var i=0, cb = 0;cb = SCROLL_MANAGER.arrCallbacks[i];i++)
        {
            cb(intScrollTop);
        }
    }
};

SCROLL_MANAGER.addCallback(function(intScrollTop)
{
    var current = SECTIONS.current;
    if(intScrollTop > 0 && intScrollTop < SECTIONS.videos)
    {
        current = '#iHomeLink';
    }
    else if(intScrollTop > SECTIONS.videos && intScrollTop < SECTIONS.about)
    {
        current = '#iVideosLink';
    }    
    else if(intScrollTop > SECTIONS.about && intScrollTop < SECTIONS.images)
    {
        current = '#iAboutLink';
    }        
    else if(intScrollTop > SECTIONS.images && intScrollTop < SECTIONS.awards)
    {
        current = '#iImagesLink';
    }     
    else if(intScrollTop > SECTIONS.awards)
    {
        current = '#iAwardsLink';
    }      
    
    
    if(current !== SECTIONS.current)
    {
        SECTIONS.current = current;
        $('#iNavigation div.cNavLink').removeClass('cActive');
        $(current).addClass('cActive');
    }
}
);

var ETD_description = '"Enter The Dragons” takes a frank,  funny and fearless look at the subject of female aging, examining the concerns and societal pressures that surround women as they pass fifty. The show reclaims the archetypal Hero’s Journey and reframes it from the perspective of the mature woman. Banished from the land of the young, and beset by challenges, riddles and obstacles, our Protagonist must navigate this weird landscape, guided by mystical creatures and Seers who have gone before. What wisdom can they impart? How can she best equip herself to defeat the demons? Expect stupid characters, ridiculous costumes, puppetry, buffoonery and many, many wigs.Written and performed by Abigail Dooley and Emma Edwards. Direction by Toby Park and Will Kerley. '
var flaw_description = "Preoccupied with their own little worlds, Caroline Brookes and Graham Hicks are forced to expose their innermost thoughts. However, their journey is not without some ups and downs.";
var fleapit_description = 'This is a taster of our cinema-set sitcom "Fleapit" featuring Spymonkey Comedy and directed by Chris Curtis.  The Scala is a failing art-house cinema and has recently been bought out by the cinema chain Cinegiant.  They have sent Deborah Reynolds to implement changes.  Film pastiches reflect the characters\' fears, fantasies and failings.';

var video_data=
{
    modal : true,
    link_thumb_width : 100,
    play_on_launch: false, //typeof(booIsMobile) ==='undefined' ? true : ! booIsMobile,
    navigation :
    {
        image: true,
    },    
    root_selector : '#iVideoManagerRoot',
    data :
    [
        {source:'vimeo', title:'Enter The Dragons', thumb: 'https://i.vimeocdn.com/video/592901380_640.jpg', file:'flaws.jpg', description:ETD_description, url:'https://player.vimeo.com/video/183633554'},
        {source:'vimeo', title:'Fleapit', thumb: 'http://b.vimeocdn.com/ts/456/791/456791749_960.jpg', file:'flaws.jpg', description:fleapit_description, url:'http://player.vimeo.com/video/80615551'},
        {source:'vimeo', title:'Fleapit part 1 "Tall Shirley', thumb: 'http://b.vimeocdn.com/ts/459/656/459656178_640.jpg', file:'flaws.jpg', description:"", url:'http://player.vimeo.com/video/83228530'},
        {source:'vimeo', title:'Fleapit part 2 "Spam', thumb: 'http://b.vimeocdn.com/ts/460/129/460129017_640.jpg', file:'flaws.jpg', description:"", url:'http://player.vimeo.com/video/83604672'},
        {source:'vimeo', title:'Fleapit part 3 "Fridge', thumb: 'http://b.vimeocdn.com/ts/459/661/459661129_640.jpg', file:'flaws.jpg', description:"", url:'http://player.vimeo.com/video/83233030'},
        {source:'vimeo', title:'Flaws', thumb: 'http://b.vimeocdn.com/ts/439/202/439202667_640.jpg', file:'flaws.jpg', description:flaw_description, url:'http://player.vimeo.com/video/67368381'}                     
    ]
};

var image_data  =
{
    navigation :
    {
        image: true,
    },
    root_selector : '#iImageManagerRoot',
    data : 
    []
};

var image_description = '<p>Life is not just passing Lauren Henderson by, it’s sniggering behind her back. Horrified at her closing window of opportunity she decides to take action. First step: Get a job.  Easy, all Lauren needs to do is combat a sociopathic shop assistant, ignore a pyromanic child, find Ronnie Barker and discover what the Mitfords did with a pencil....</p><p>Hell-bent on helping her are her two sisters: Anne, ex-cop control freak, and flakier-than-filo Saskia. Together they have endured numerous family crisis’s: caravan holidays, home perms, dodgy boyfriends and more than 40 Christmases.   So, what next?</p>';
var ETD_image_description = '70 mins, Small to mid scale. Accompanying workshop available.<br/><br/><i>"This is a perfect show – great performance, beautiful writing. I think it speaks to men, like me, too."<br/><br/>“I’m 25 and it spoke to me so much – I’m fed so much stuff everywhere about looking young, being young, looking after myself now for the future and it’s so much pressure. Was nice to be told getting old is okay!”<br/><br/>“As a woman of 55 this piece really spoke to me, in a beautifully playful and frivolous way but with a ‘serious’ and thought provoking message. Excellent!”<br/></br/>“The serious message hits home because of the strength of the comedy. Great classic clown duo.” </i>'
image_data.data.push({type: 'image', title:'Coming soon Spring 2017 - Enter The Dragons', description : ETD_image_description, path: 'media/images', image : 'crusaders.jpeg'});
image_data.data.push({type: 'image', title:'Coming soon Spring 2017 - Enter The Dragons', description : ETD_image_description, path: 'media/images', image : 'karenandjackieb&w2_small.jpg'});
image_data.data.push({type: 'image', title:'Coming soon Spring 2017 - Enter The Dragons', description : ETD_image_description, path: 'media/images', image : 'jackieandkaren3_small.jpg'});
image_data.data.push({type: 'image', title:'What Next?', description : 'Pictures from our sitcom "What Next?" (Winners of the Sitcom Mission 2011)', path: 'media/images/what_next', image : 'sitcom_what_next_001.jpg'});
image_data.data.push({type: 'image', title:'Shop assistant:  "Sorry. It doesn\'t come in your age"', description : image_description, path: 'media/images/what_next', image : 'sitcom_what_next_001.jpg'});
image_data.data.push({type: 'image', title:'Lauren: "My window of opportunity is shrinking. All I\'ve got is a a tiny crack" .  Anne "Not after 3 kids"', description : image_description, path: 'media/images/what_next', image : 'sitcom_what_next_004.jpg'});
image_data.data.push({type: 'image', title:'" To buy this I would have to sell my body.....and the car."', description : image_description, path: 'media/images/what_next', image : 'sitcom_what_next_006.jpg'});
image_data.data.push({type: 'image', title:'Saskia "Very Katy Perry!" Lauren "Very Grayson Perry"', description : image_description, path: 'media/images/what_next', image : 'sitcom_what_next_009.jpg'});
image_data.data.push({type: 'image', title:'Saskia "Jai likes to have access to my pits."', description : image_description, path: 'media/images/what_next', image : 'sitcom_what_next_010.jpg'});
image_data.data.push({type: 'image', title:'Anne " Serious VPL! Your arse looks like the Eden Project - put these on"', description : image_description, path: 'media/images/what_next', image : 'sitcom_what_next_014.jpg'});
image_data.data.push({type: 'image', title:'"I\'m going to perform the Epley manoeuver"', description : image_description, path: 'media/images/what_next', image : 'sitcom_what_next_019.jpg'});
image_data.data.push({type: 'image', title:'" You may feel a release"', description : image_description, path: 'media/images/what_next', image : 'sitcom_what_next_020.jpg'});
image_data.data.push({type: 'image', title:'"Thanks to both of you I exposed myself today"', description : image_description, path: 'media/images/what_next', image : 'sitcom_what_next_022.jpg'});


//for(var i=0;i<23;i++)
//{
//    var str = '00' + i;
//    str = str.slice(-3); 
//    image_data.data.push({type: 'image', title:'What Next '+str+'?', description : fleapit_description, path: 'media/images/what_next', image : 'sitcom_what_next_'+str+'.jpg'})
//}


//
//var $cachedWindow = false;
//var $movables = [];
//
//function scroller()
//{
//    var intScrollTop = $cachedWindow.scrollTop();
//
//    for(var i=0, $el=0; $el = $movables[i]; i++)
//    {
//        $el.css("margin-top",  intScrollTop+"px");
//    }
//    //$('#iTestAnimatable3').css("top", intScrollTop+"px");
//    //$('#iTestAnimatable4').css("top", intScrollTop+"px");
//}

function on_screen_debug(str)
{
    $('#iScreenDetails').html(str);
}