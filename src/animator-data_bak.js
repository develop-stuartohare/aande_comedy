import {Animatable, AnimationGroup, SCROLL_MANAGER, STEP_ANIMATOR} from './animator';


var SECTIONS =       
{
    home:0,
    videos:9842,
    about:17304,
    images:31007,
    awards: 36919
};      
    

    var page_scroll = new AnimationGroup( { selector : '#iContainer'});
    var page_scroll_anims = 
    [
        {
            selector : '#iContainer',
            css_targets :
            {         
                "top" :
                {     
                    ratio :-0.8,
                    start_value: 0
                }       
            }        
        } ,  
    ];
    
    page_scroll.addAnimations(page_scroll_anims);
        
    var page_home = new AnimationGroup( { selector : '#home', start_step : 0 , end_step : 1825})
    var page_home_anims = 
    [
        {
            selector : '#iWigLeft',
            css_targets :
            {         
                "top" :
                {                       
                    ratio:-2.8
                }

            }
        },
        
        {
            selector : '#iWigRight',
            css_targets :
            {         
                "top" :
                {   
                    ratio:-2.8
                }

            }
        },
        {
            selector : '#iDisguiseLeft',//'#iWigLeft2',
            css_targets :
            {         
                "margin-top":
                {
                    start_step:100,
                    ratio:-6,
                    end_value: 1,
                    end_value:-295
                },
                "top":
                {
                    start_step:352,
                    ratio:0.8      
                }                
            }
        },            
        
        {
            selector : '#iDisguiseRight',
            css_targets :
            {             
                "margin-top":
                {
                    start_step:175,
                    ratio:-6,
                    end_value: 1,
                    end_value:-332
                },
                "top":
                {
                    start_step:352,
                    ratio:0.9      
                }  
            }
        },      
        {
            selector : '#iMoustache',
            css_targets :
            {                  

                "top":
                {
                    start_value:1000,
                    start_step:550,
                    end_value:0,
                    ratio:-6      
                }  
            }
        },       
        {
            selector : '#iSpectacles',
            css_targets :
            {                  

                "top":
                {
                    start_value:1000,
                    start_step:480,
                    end_value:-107,
                    ratio:-6      
                }  
            }
        },              
       
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
            selector : '#iFaceRightHeader',
            css_targets :
            {         
                "top" :
                {   
                    ratio:0.9

                }

            }
        },  
    ];
    page_home.addAnimations(page_home_anims);
    
    var clouds_and_birds = new AnimationGroup( { selector : '#iCloudBack', start_step : 400 , end_step : 1825})
    var clouds_and_birds_anims = 
    [    

        {
            selector : '#iCloudBack',
            css_targets :
            {         
                "bottom" :
                {     
                    ratio :1.5,
                    start_step: 500

                }

            }        
        },

        {
            selector : '#iCloudSecond',
            css_targets :
            {         
                "bottom" :
                {     
                    ratio :1,
                    start_step: 600

                }

            }        
        },


        {
            selector : '#iCloudFront',
            css_targets :
            {         
                "bottom" :
                {     
                    ratio :0.3,
                    start_step: 400

                }

            }        
        }   

//        {
//            selector : '#iTwitterBirdsBack',
//            css_targets :
//            {         
//                "top" :
//                {     
//                    ratio :-2.8 ,
//                    start_step: 200
//
//                },
//                "right" :
//                {     
//                    ratio :0.8  * 0.8,
//                    start_step: 200
//
//                }                  
//            }        
//        },   
//
//        {
//            selector : '#iTwitterBirdsMiddle',
//            css_targets :
//            {         
//                "top" :
//                {     
//                    ratio :-1.1  * 0.8,
//                    start_step: 200
//
//                },
//                "right" :
//                {     
//                    ratio :0.7  * 0.8,
//                    start_step: 200
//
//                }            
//            }        
//        },
//
//
//        {
//            selector : '#iTwitterBirdsFront',
//            css_targets :
//            {         
//                "top" :
//                {     
//                    ratio :-3.9  * 0.8,
//                    start_step: 400
//
//                },
//                "right" :
//                {     
//                    ratio :1.8  * 0.8,
//                    start_step: 400
//
//                }            
//
//            }        
//        }
    ];
    clouds_and_birds.addAnimations(clouds_and_birds_anims);
                
    var page_video = new AnimationGroup( { selector : '#videos', start_step : 1610 })
    var page_video_anims =
    [

        {
            selector : '#iVideoAnimLeft',
            css_targets :
            {         
                "left" :
                {   
                    end_step : 150,
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
                    start_step: 75,
                    end_step : 225,
                    start_value : -700,
                    end_value:0
                }

            }
        }
           

    ];
    page_video.addAnimations(page_video_anims);
    
    
    var hills_and_van = new AnimationGroup( { selector : '#iHillsBackNew', start_step : 2111 , end_step : 3011})
    var hills_and_van_anims = 
    [    

        {
            selector : '.cHillBackItem',
            css_targets :
            {         
                "margin-left" :
                {     
                    ratio :-0.02,
                    start_step: 0
                }

            }        
        },
        {
            selector : '#iHillsBackNew',
            css_targets :
            {         
                "bottom" :
                {     
                    ratio :0.3,
                    start_step: 0
                }

            }        
        },         
         
        {
            selector : '.cHillMiddleItem',
            css_targets :
            {         
                "margin-left" :
                {     
                    ratio :-0.025,
                    start_step: 0
                }

            }        
        },        
        {
            selector : '#iHillsMiddleNew',
            css_targets :
            {         
                "bottom" :
                {     
                    ratio :0.15,
                    start_step: 0
                }

            }        
        }              
    ];
    hills_and_van.addAnimations(hills_and_van_anims);
       
   var page_about_enter = new AnimationGroup( { selector : '#about', start_step : 3100, end_step: 4000 });
    var page_about_enter_anims =
    [

        {
            selector : '#iWigAboutFirst',
            css_targets :
            {         
                "left" :
                {                 
                    start_value:-700,
                    end_value:0,
                    start_step: 0,
                    end_step:300
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
                    start_step: 350,
                    end_step:650
                }       
            } 
        }                    
        
    ];
    page_about_enter.addAnimations(page_about_enter_anims);   
    page_about_enter.addEvent(
        {
            step:300,
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
            step:650,
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
    
    
   var page_images_enter = new AnimationGroup( { selector : '#images', start_step : 3700, end_step: 4500 });
    var page_images_enter_anims =
    [

        {
            selector: '#iBoxLayer1',
            css_targets :
            {
                "top":
                {
                    start_step:1500,
                    ratio:-0.6
                }
            }
        },
        {
            selector: '#iBoxLayer2',
            css_targets :
            {
                "top":
                {
                    start_step:1500,
                    ratio:-0.3
                }            
            }
        },        
                            

        {
            selector: '#iFaceImagesFirst',
            css_targets :
            {
                "left":
                {
                    start_step:50,
                    end_step : 350,
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
                    start_step:50,
                    end_step : 350,
                    start_value:-450,
                    end_value:-145
                }
            }
        }            
    ];
    page_images_enter.addAnimations(page_images_enter_anims);    
    
    var page_images_exit = new AnimationGroup( { selector : '#iStripBlock1', start_step : 6050, end_step: 4500 });
    var page_images_exit_anims =
    [
        {
            selector: '#iStripBlock1',
            css_targets :
            {
                "top":
                {
                    start_step:120,
                    ratio:1.6//1.5//2
                }
            }
        },
        
        {
            selector: '#iStripBlock2',
            css_targets :
            {
                "bottom":
                {
                    ratio:1.3//1.5//2
                }
            }
        },                
    ];
    page_images_exit.addAnimations(page_images_exit_anims);    
    
    
    
   var page_awards_enter = new AnimationGroup( { selector : '#awards', start_step : 6400, end_step:7000 });
    page_awards_enter.addEvent(
        {
            step:800,
            before: function()
            {
               $('#iPressLink').removeClass('cOscScaleConstant');
            },
            after: function()
            {
                
                $('#iPressLink').addClass('cOscScaleConstant');
            }
        }
    );   
    var page_awards_enter_anims =
    [
//        {
//            selector : '#iAwardsTrophy',
//            css_targets :
//            {         
//                "top" :
//                {           
//                    start_step:50,
//                    end_step: 350,
//                    start_value:800,
//                    end_value:15                    
//                }     
//            }        
//        },
//        {
//            selector : '#iAwardsWrapper',
//            css_targets :
//            {         
//                "top" :
//                {           
//                    start_step:150,
//                    end_step: 500,
//                    start_value:1200,
//                    end_value:240                    
//                }     
//            }        
//        }             
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
        
    
    STEP_ANIMATOR.init();
    setTimeout(function()
    {        
        $('#iLoadingScreen').removeClass('cActive');    
          
       
    }
    ,5000);

});