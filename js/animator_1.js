$(document).ready(function()
{               
    
    var headerAnimOffset = 500;
    
    var page_home = new AnimationGroup( { selector : '#home', start_step : 0 , end_step : 1025})
    var page_home_anims = 
    [
        {
            selector : '#home',
            css_targets :
            {         
                "top" :
                {     
                    ratio : -0.8,
                    start_value: 1
                }       
            }        
        } ,       


        {
            selector : '#iFaceLeftHeader',
            css_targets :
            {         
                "top" :
                {   
                    ratio:0.8
                }

            }
        },


        {
            selector : '#iSpectacles',
            css_targets :
            {         
                "top" :
                {   
                    ratio:0.8,//1.9,
                    end_value:1502,
                    start_step:363,
                    end:248
                }

            }
        },   


        {
            selector : '#iFaceRightHeader',
            css_targets :
            {         
                "top" :
                {   
                    ratio:0.9

                }

            }
        },  

        {
            selector : '#iMoustache',
            css_targets :
            {         
                "top" :
                {   
                    ratio:0.9,//2.8,
                    end_value:1508,
                    start_step:363,
                    end:403
                }

            }
        },           


        {
            selector : '#iCloudBack',
            css_targets :
            {         
                "top" :
                {     
                    ratio :-1.8,
                    start_step: headerAnimOffset

                }

            }        
        },

        {
            selector : '#iCloudSecond',
            css_targets :
            {         
                "top" :
                {     
                    ratio :-1.6,
                    start_step: headerAnimOffset

                }

            }        
        },


        {
            selector : '#iCloudFront',
            css_targets :
            {         
                "top" :
                {     
                    ratio :-1,
                    start_step: headerAnimOffset

                }

            }        
        },   

        {
            selector : '#iTwitterBirdsBack',
            css_targets :
            {         
                "top" :
                {     
                    ratio :-2.8,
                    start_step: headerAnimOffset

                },
                "right" :
                {     
                    ratio :0.8,
                    start_step: headerAnimOffset

                }                  
            }        
        },   

        {
            selector : '#iTwitterBirdsMiddle',
            css_targets :
            {         
                "top" :
                {     
                    ratio :-1.1,
                    start: headerAnimOffset

                },
                "right" :
                {     
                    ratio :0.7,
                    start: headerAnimOffset

                }            
            }        
        },


        {
            selector : '#iTwitterBirdsFront',
            css_targets :
            {         
                "top" :
                {     
                    ratio :-3.9,
                    start_step: headerAnimOffset

                },
                "right" :
                {     
                    ratio :1.8,
                    start_step: headerAnimOffset

                }            

            }        
        }
    ]
    page_home.addAnimations(page_home_anims);
        

    var page_video_enter = new AnimationGroup( { selector : '#videos', start_step : 925, end_step: 1125 })
    var page_video_enter_anims =
    [
        {
            selector : '#videos',
            css_targets :
            {         
                "top" :
                {                                  
                    end_value:0,
                    end_step:200
                }       
            }        
        }
    ];
    page_video_enter.addAnimations(page_video_enter_anims);
        
    var page_video = new AnimationGroup( { selector : '#videos', start_step : 975 })
    var page_video_anims =
    [

        {
            selector : '#iVideoAnimLeft',
            css_targets :
            {         
                "left" :
                {   
                    end_step : 50,
                    start_value : -700,
                    end_value:0                    
                }

            }
        },


        {
            selector : '#iVideoAnimRight',
            css_targets :
            {         
                "right" :
                {   
                    start_step: 40,
                    end_step : 90,
                    start_value : -700,
                    end_value:0
                }

            }
        }
           

    ];
    page_video.addAnimations(page_video_anims);
    
    
       
   var page_about_enter = new AnimationGroup( { selector : '#about', start_step : 1250, end_step: 1900 });
    var page_about_enter_anims =
    [
        {
            selector : '#iVideoScroller',
            css_targets :
            {         
                "top" :
                {                 
                    start_step:0,
                    end_value:-1000,
                    end_step: 100
                }       
            } 
        },  
        {
            selector : '#iWigAboutFirst',
            css_targets :
            {         
                "left" :
                {                 
                    start_value:-700,
                    end_value:0,
                    start_step: 50,
                    end_step:100
                }       
            } 
        },          
        {
            selector : '#iWigAboutSecond',
            css_targets :
            {         
                "right" :
                {                 
                    start_value:-700,
                    end_value:-36,
                    start_step: 60,
                    end_step:110
                }       
            } 
        },                   
        {
            selector : '#about',
            css_targets :
            {         
                "top" :
                {                         
                    end_value:0,
                    end_step: 100
                }       
            } 
        },
        {
            selector : '#iAboutScroller',
            css_targets :
            {         
                "top" :
                {                 
                    start_step:150,
                    end_value:-1000,
                    end_step: 600
                }       
            } 
        },        
        
    ];
    page_about_enter.addAnimations(page_about_enter_anims);   
    page_about_enter.addEvent(
        {
            step:100,
//            before: function()
//            {
//                $('#iContentAboutFirst').addClass('cDeactivated');
//            },
            after: function()
            {
                $('#iContentAboutFirst').removeClass('cDeactivated');
            }
        }
    );
    
    page_about_enter.addEvent(
        {
            step:150,
//            before: function()
//            {
//                $('#iContentAboutSecond').addClass('cDeactivated');
//            },
            after: function()
            {
                $('#iContentAboutSecond').removeClass('cDeactivated');
            }
        }
    );    
    
    
   var page_images_enter = new AnimationGroup( { selector : '#images', start_step : 1600, end_step: 1900 });
    var page_images_enter_anims =
    [

        {
            selector : '#images',
            css_targets :
            {         
                "top" :
                {                         
                    end_value:0,
                    end_step: 200
                }         
            }        
        },
        {
            selector: '#iFaceImagesFirst',
            css_targets :
            {
                "left":
                {
                    start_step:175,
                    end_step : 255,
                    start_value:-450,
                    end_value:-145
                }
            }
        },
        {
            selector: '#iFaceImagesSecond',
            css_targets :
            {
                "right":
                {
                    start_step:175,
                    end_step : 255,
                    start_value:-450,
                    end_value:-145
                }
            }
        }            
    ];
    page_images_enter.addAnimations(page_images_enter_anims);    
    
    
   var page_awards_enter = new AnimationGroup( { selector : '#awards', start_step : 1900, end_step:2300 });
    var page_awards_enter_anims =
    [
        {
            selector : '#iImagesScroller',
            css_targets :
            {         
                "top" :
                {                 
                    start_step:0,
                    end_value:-1000,
                    end_step: 100
                }       
            } 
        },
        {
            selector : '#awards',
            css_targets :
            {         
                "top" :
                {                         
                    end_value:0,
                    end_step: 100
                }     
            }        
        },
        {
            selector : '#iAwardsTrophy',
            css_targets :
            {         
                "top" :
                {           
                    start_step:50,
                    end_step: 110,
                    start_value:800,
                    end_value:15                    
                }     
            }        
        },
        {
            selector : '#iAwardsWrapper',
            css_targets :
            {         
                "top" :
                {           
                    start_step:75,
                    end_step: 150,
                    start_value:1200,
                    end_value:240                    
                }     
            }        
        }             
    ];
    page_awards_enter.addAnimations(page_awards_enter_anims);     
   
    
    
    /*****************      AWARDS       ****************/

     
       
    //$('#iFaceVideosFirst, #iFaceVideosSecond').addClass('cHidden');            
    $('#iContentAboutFirst, #iContentAboutSecond').addClass('cDeactivated')
    $('#iContentAboutFirst, #iContentAboutSecond').click(
        function()
        {
            $(this).toggleClass('cDeactivated');
        }
    );
    
    $('a[href^="#"]').click(
        function(event)
        {
            event.preventDefault();
            var dom = $(this.hash);
            $(window).scrollTop(dom[0].offsetTop* STEP_ANIMATOR.globalRatio);
            
            //STEP_ANIMATOR.updateAnimations(dom[0].offsetTop);
        }
    );
    
    STEP_ANIMATOR.init();    

});

function AnimationGroup(args)
{
    this.arrAnimations = [];    
    this.start_step = args.start_step || 0;
    if(args.end_step)
    {
        this.end_step = args.end_step +1;
    }
    this.selector = args.selector
    this.$dom = $(this.selector);
    this.id = AnimationGroup.count++;
    
    $('body').prepend('<div class="cDebugCounter" id="iDebugCounter_'+this.id+'" style="position:fixed;top:'+(85 + (15* this.id))+'px;left:5px; z-index:500"><div>');
    
    this.$debug = $('#iDebugCounter_'+this.id);
    
    STEP_ANIMATOR.addAnimationGroup(this);
};

AnimationGroup.count = 0;

AnimationGroup.prototype = 
{
    addAnimations : function(arrAnim)
    {
        for(var i=0, args=0;args=arrAnim[i];i++)
        {
            this.addAnimation(args);
        }
    },
    
    addAnimation : function(args)
    {
        var objAnim = new Animatable(args);
        this.arrAnimations.push(objAnim);
        return objAnim;
    },
    
    addEvent : function(args)
    {
        this.events = this.events || [];
            
        args.booBefore = false;
        args.booAfter = false;
        this.events.push(args);
    },
    
    update : function(intStep)
    {
        //if(intStep >= this.start_step && (!this.end_step || intStep < this.end_step))
        {
            intStep = intStep - this.start_step;
//            var debug_info = intStep >= 0 ? "layer: " + this.selector + ' = ' +intStep : "";
//            this.$debug.html(debug_info);
            
            for(var i=0, objAnim=0;objAnim=this.arrAnimations[i];i++)
            {
                objAnim.update(intStep);
            }
            if(this.events)
            {
                for(var i=0, objEvent=0;objEvent=this.events[i];i++)
                {
                    if(intStep < objEvent.step && !objEvent.booBefore && objEvent.before)
                    {
                        objEvent.booBefore = true;
                        objEvent.booAfter = false;
                        objEvent.before();                        
                    }
                    if(intStep > objEvent.step && !objEvent.booAfter && objEvent.after)
                    {
                        objEvent.booBefore = false;
                        objEvent.booAfter = true;
                        objEvent.after();                        
                    }                    
                }                
            }
        }
        
    }
};

function Animatable(args)
{
    this.css_targets = args.css_targets;
    this.$dom = $(args.selector);
    this.selector = args.selector;
    this.css = this.$dom.css([ "top", "bottom", "left", "right", "opacity"]);    
            
    for(var css_style in this.css_targets)
    {
        var target = this.css_targets[css_style];        
        target.start_step = target.start_step ? target.start_step : 0;
        
        if(target.start_value)
        {
            this.setupTarget(target, css_style);
        }                                                 
    }
}

Animatable.prototype = 
{
    selector :"",
    css : false,
    css_targets : false,
    last_css_data : false,
    
    update : function(intStep)
    {
        var css_data = {};       
        
        for(var css_style in this.css_targets)
        {
            var target = this.css_targets[css_style]; 
            
        
            if(!target.start_value)
            {
                this.setupTarget(target, css_style);
            }                                
                                      
            var step = intStep - target.start_step;
            var css_value = this.calcStepValue(target.start_value,step, target.ratio);

            var end_value = Math.max(target.start_value, target.end_value);
            var start_value = Math.min(target.start_value, target.end_value);
            css_value = css_value < start_value ? start_value : css_value;
            css_value = css_value > end_value ? end_value : css_value;            

            target.val = css_value + (target.unit || "px");  
            css_data[css_style] = target.val;
        }       
                        
        this.$dom.css(css_data);
    },
        
    setupTarget : function(target, style)
    {        
        target.start_value =  target.start_value || parseInt(this.$dom.css(style));  
        target.start_value =  isNaN(target.start_value) ? 0 : target.start_value;
        this.$dom.css(style, target.start_value);
        target.step_span = target.end_step ? target.end_step - target.start_step : false;
        target.value_span = typeof(target.end_value) !=='undefined' && typeof(target.start_value) !== 'undefined' ? target.end_value - target.start_value : false;

        if(!target.ratio)
        {
            var ratio = target.start_value > target.end_value ? -1 : 1;
            target.ratio = target.step_span && target.value_span ? target.value_span / target.step_span : ratio;
        }           
        
    },
    
    calcStepValue : function(start_value, step, ratio)
    {
        var delta = step * ratio;
        var total = start_value + delta;
        return Math.round(total);
    }

};

Animatable.LOOP_TYPES = {continous : 0, alternate: 1}

var STEP_ANIMATOR = 
{
    $scrollCounter : false,
    $window : false,
    arrObjAnim : [],
    booWiggle : false,
    booHeadPop : false,
    globalRatio :10,
    
    
    init : function()
    {
        
        this.$window = $(window);
        //this.$window.scrollTop(0);
        this.updateAnimations(0);
        this.$window.scroll(STEP_ANIMATOR.update);
        this.$scrollCounter = $('#iScrollCounter');
        var h = this.$window.height();
        $('.cParallaxStage').height(h)

        $('body').height(22000);    
        this.$window.scrollTop(0);
    },
    
//    addAnimation : function()
//    {
//        
//    },
    addAnimationGroup : function(objAnimation)
    {        
        this.arrObjAnim.push(objAnimation);
    },
        
    update : function(event)
    {
        var intScrollTop =  STEP_ANIMATOR.$window.scrollTop();
        intScrollTop =  Math.round(intScrollTop / STEP_ANIMATOR.globalRatio);
        
        STEP_ANIMATOR.$scrollCounter.text(intScrollTop);
        STEP_ANIMATOR.updateAnimations(intScrollTop);       
    },
    
    updateAnimations : function(intStep)
    {        
        for(var i=0, objAnim = 0; objAnim = STEP_ANIMATOR.arrObjAnim[i];i++)
        {
            objAnim.update(intStep);
        }                
        
        if(!STEP_ANIMATOR.booWiggle && intStep > 398)
        {
            STEP_ANIMATOR.booWiggle = true;
            $('#iSpectacles, #iMoustache').addClass('cConstantWiggle');
        }
        
        if(STEP_ANIMATOR.booWiggle && intStep < 398)
        {
            STEP_ANIMATOR.booWiggle = false;
            $('#iSpectacles, #iMoustache').removeClass('cConstantWiggle');
        }  
          
        
        if(!STEP_ANIMATOR.booTrophy && intStep > 3486)
        {
            STEP_ANIMATOR.booTrophy = true;
            $('#iAwardsTrophy').addClass('cConstantWiggle');
        }           
    }
};

            
//            
//            
//            
//    var iAwardsTrophy = 
//    {
//        selector : '#iAwardsTrophy',
//        css_targets :
//        {         
//            "top" :
//            {   
//                start_value :800,
//                end_value:-18,
//                start_step:3200,
//                end:3602
//            }
//       
//        }
//    };
//    STEP_ANIMATOR.addAnimation(iAwardsTrophy);  
//    
//    var iAwardsWrapper = 
//    {
//        selector : '#iAwardsWrapper',
//        css_targets :
//        {         
//            "bottom" :
//            {   
//                start_value :-800,
//                end_value:-80,
//                start_step:3620,
//                end:3686
//            }
//       
//        }
//    };
//    STEP_ANIMATOR.addAnimation(iAwardsWrapper);     
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    var about =
//    {
//        selector : '#about',
//        css_targets :
//        {         
//            "top" :
//            {     
//                ratio : -7,           
//                start_step:1250,
//                end_value: 50
//            }       
//        }        
//    };
//    STEP_ANIMATOR.addAnimation(about);     
//    
//    var about2 =
//    {
//        selector : '#about',
//        css_targets :
//        {         
//            "top" :
//            {     
//                ratio : -5,           
//                start_step:1460,
//                latch_mode:true
//            }       
//        }        
//    };
//    STEP_ANIMATOR.addAnimation(about2);       
//    
//        
//        
//    var images =
//    {
//        selector : '#images',
//        css_targets :
//        {         
//            "top" :
//            {     
//                ratio : -10,           
//                start_step:2100,
//                end_value: 1
//            }       
//        }        
//    };
//    STEP_ANIMATOR.addAnimation(images);   
//    
//
//    /*****************      VIDEO       ****************/
//
//    
//    
//    
//    
//    
//    
//    /*****************      ABOUT       ****************/
//    
//    var iFaceAboutFirst =
//    {
//        selector : '#iFaceAboutFirst',
//        css_targets :
//        {         
//            "left" :
//            {   
//                start_value : -1000,
//                end_value:56,
//                start_step:1620,
//                end:1850
//            }
//       
//        }
//    }
//    STEP_ANIMATOR.addAnimation(iFaceAboutFirst);  
//
//
//    var iFaceAboutSecond =
//    {
//        selector : '#iFaceAboutSecond',
//        css_targets :
//        {         
//            "right" :
//            {   
//                start_value : -1000,
//                end_value:67,
//                start_step:1885,
//                end:2070
//            }
//       
//        }
//    }
//    STEP_ANIMATOR.addAnimation(iFaceAboutSecond);  
//        
//    var iContentAboutThird = 
//    {
//        selector : '#iContentAboutThird',
//        css_targets :
//        {         
//            "opacity" :
//            {   
//                start_value :0,
//                end_value:1,
//                start_step:1870,
//                end:1870
//            }
//       
//        }
//    };
//    STEP_ANIMATOR.addAnimation(iContentAboutThird);    
//    
//    
//    
//    /*****************      IMAGES       ****************/
//    
//    var iFaceImagesFirst =
//    {
//        selector : '#iFaceImagesFirst',
//        css_targets :
//        {         
//            "left" :
//            {   
//                ratio:5,
//                start_value : -500,
//                end_value:-145,
//                start_step:2150
//            }
//       
//        }
//    };
//    STEP_ANIMATOR.addAnimation(iFaceImagesFirst);      
//    
//    
//    var iFaceImagesSecond =
//    {
//        selector : '#iFaceImagesSecond',
//        css_targets :
//        {         
//            "right" :
//            {   
//                ratio:5,
//                start_value : -500,
//                end_value:-145,
//                start_step:2200
//            }
//       
//        }
//    };
//    STEP_ANIMATOR.addAnimation(iFaceImagesSecond);       