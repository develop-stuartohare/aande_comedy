<?php
    include_once('Mobile_Detect.php');
    global $platform_detect;
    $platform_detect = new Mobile_Detect;
    global $isMobile;
    $isMobile = $platform_detect->isMobile();
    
    global $tweets;
    require_once("libs/so_tweet/so_tweet_auth.php");
    
    $twitteruser = "@ae_comedy";//"superemmelina";//stuart_blank"; 
    $notweets = 1;
    $consumerkey = "LGelKDGytabKXfx7LtyPgw"; 
    $consumersecret = "ZFPChb48KD7l7Zf8C0670f49JmRy3PYCHj912t9ag"; 
    $accesstoken = "240685028-bflvF9m8he9L0FaH5mALPnMVL8CMzRUiYr37N1Yf"; 
    $accesstokensecret = "L8gUK8lXaeVHl3FSILDINEhsYeFs636HmYxWrb7ikgx5M";    

    $tweets = so_get_tweets($twitteruser, $notweets, $consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
?>

<html>
    <head>
        <title>A & E Comedy</title>
        <link rel="stylesheet" href="css/index.css">
        <link rel="stylesheet" href="libs/so_media_gallery/so_blanker.css">
        <link rel="stylesheet" href="libs/so_media_gallery/so_modal.css">
        <link rel="stylesheet" href="libs/so_media_gallery/so_video.css">
        
        <script src="libs/jquery-1.10.2.min.js"></script>
        <?php
            global $isMobile;

            if(!$isMobile)
            {
                echo '<link rel="stylesheet" href="css/animation.css">';
                echo '<script src="js/animator.js"></script>';          
                echo '<script>var booIsMobile=false;</script>';  
            }   
            else
            {
                echo '<script>var booIsMobile=true;</script>';  
            }
            
        ?>                       

        <meta charset="UTF-8">
        <meta name="viewport" content="width=1124, initial-scale=1", user-scalable=yes">
    </head>
    <body class="cUseAnimation">
        <!--<div id="iScrollCounter">0</div>-->
        <?php
            global $isMobile;

            if(!$isMobile)
            {
                ?>
                <section id="iLoadingScreen" class="cActive">
                    <div class="cCenter">
                        <div id="iLoadingLogo"><img id="iLoadingLogoImage" src="images/logo_final.png" /></div>
                        <div id="iLoadingGif"><img id="iLoadingGifImage" src="images/loader.gif" /></div>
                    </div>
                </section>
                <?php
            }
        ?>
        <!--<div id="iScreenDetails" style="position:fixed; z-index:5000; bottom:10px;right:10px; background:#FFF; border:2px solid black;"></div>-->
        
        
            <section id="iNavigation" class="">
                <div class="cCenter">
                    <div class="cNavLinkWrapper">    
                        <div href="#home" id="iHomeLink" class="cNavLink cActive">Home</div>
                        <div href="#videos" id="iVideosLink" class="cNavLink">Videos</div>
                        <div href="#about" id="iAboutLink" class="cNavLink">About</div>
                        <div href="#images" id="iImagesLink" class="cNavLink">Images</div>
                        <div href="#awards" id="iAwardsLink" class="cNavLink">Press</div>
                        <a href="mailto:info@aandecomedy.com" id="iEmail" class="cNavLink">info@aandecomedy</a>
                    </div>
                </div>
            </section>
        
        <div id="iContainer" class="cParallaxViewPort">

            
            
            <section class="cPage cBackground1 cParallaxStage cActive" id="home">      
<!--                <div id="iTwitterBirdsBack" class="cTwitterBirdWrapper cParallaxLayer">
                    <div class="cCenter">
                        <img id="iTwitterBirdsBack1" src="images/twitter_bird_flip.png" />
                        <img id="iTwitterBirdsBack3" src="images/twitter_bird_flip.png" />
                        <img id="iTwitterBirdsBack2" src="images/twitter_bird_flip.png" />
                    </div>
                </div>-->
                <div id="iCloudBack" class="cParallaxLayer"><!--<img src="images/clouds_backRow.png" />--><div class="cCloudBG"></div></div>
                <div id="iCloudSecond" class="cParallaxLayer">
                    <!--<img src="images/clouds_secondRow2.png" />-->
                </div>
<!--                <div id="iTwitterBirdsMiddle" class="cTwitterBirdWrapper cParallaxLayer">
                    <div class="cCenter">
                        <img id="iTwitterBirdsMiddle1" src="images/twitter_bird_flip.png" />
                        <img id="iTwitterBirdsMiddle3" src="images/twitter_bird_flip.png" />                        
                    </div>
                </div>                -->


                
                <div class="cCenter">   
                    <div id="iTweetWrapper">
                        <div id="iTweet" class="">
                            <img id="iTwitterBubble" src="images/cloud_twitterLogo.png" />
                            <a href="https://twitter.com/ae_comedy" target="_blank"><img id="iTwitterBird" src="images/twitter_bird.png" /></a>
                            <!-- <div id="iTweetRoot"></div>    -->  
                            <div id="iTweetRoot" style="font-size:1.5em"><b>coming soon spring 2017 <br/><br/> <a href="https://vimeo.com/183633554" target="_blank">Enter The Dragons</a> </b></div>                       
                        </div>        
                    </div>                        
                    <div class="cAnimationHolder" id="iAnimationHolder1">
                        <div id="iFaceLeftHeader"></div>                          
                        <div id="iWigLeft" class="cWiggleOnHover"></div>
                        <div id="iDisguiseLeft">
                            <div id="iWigLeft2" class="cWiggleOnHover"></div>
                            <div id="iSpectacles" class="cWiggleOnHover"></div> 
                        </div>
                    </div>                           
                    <div id="iLogo"><img id="iLogoImage" src="images/logo_final.png" /></div>
    
                    <div class="cAnimationHolder" id="iAnimationHolder2">
                        <div id="iFaceRightHeader"></div>                               
                        <div id="iWigRight" class="cWiggleOnHover"></div> 
                        <div id="iDisguiseRight">
                            <div id="iWigRight2" class="cWiggleOnHover"></div>
                            <div id="iMoustache" class="cWiggleOnHover"></div>                             
                        </div> 
                    
                    </div>                        
                </div>
            
                <div id="iCloudFront">
                    <!--<img src="images/clouds_frontRow.png" />-->
                    <div class="cCloudBG"></div>                        
                </div>
<!--                <div id="iTwitterBirdsFront" class="cTwitterBirdWrapper">
                    <div class="cCenter">
                        <img id="iTwitterBirdsFront1" src="images/twitter_bird_flip.png" />
                        <img id="iTwitterBirdsFront2" src="images/twitter_bird.png" />
                    </div>
                </div>-->
            </section>
            
            <section class="cPage cBackground2 cParallaxStage" id="videos">
                <!--<div id="iHillsBack"><div class="cExtraBG"></div></div>-->
                <!--<div id="iVan1Wrapper"><div id="iVan1"></div></div>-->
                <!--<div id="iHillsMiddle"><div class="cExtraBG"></div></div>-->
                <div id="iHillsBackNew">
                    <div class="cHillBackItem"></div>
                    <div class="cHillBackItem"></div>
                    <div class="cHillBackItem"><div id="iHillsSign2" class="cHillsSign"></div></div>
                    <div class="cHillBackItem"></div>
                    <div class="cHillBackItem"></div>
                    <div class="cHillBackItem"></div>
                    <div class="cHillBackItem"></div>
                    <div class="cHillBackItem"></div>
                    <div class="cHillBackItem"><div id="iHillsSign3" class="cHillsSign"></div></div>
                </div>         
                <div id="iHillsSign1" class="cHillsSign"></div>
                
                <div id="iHillsMiddleNew">
                    <div class="cHillMiddleItem"></div>
                    <div class="cHillMiddleItem"></div>
                    <div class="cHillMiddleItem"></div>
                    <div class="cHillMiddleItem"></div>
                    <div class="cHillMiddleItem"></div>
                    <div class="cHillMiddleItem"></div>
                    <div class="cHillMiddleItem"></div>
                    <div class="cHillMiddleItem"></div>
                    <div class="cHillMiddleItem"></div>
                </div>                   
                <div id="iVideoScroller" class="cParallaxLayer">
                    <div id="iVideoManagerRoot"></div>  
                    <div class="cCenter">
                        
                        <div id="iVideoAnimLeft">
                            <div id="iManPointLeft"></div>
                            <div id="iFingerPointLeft"></div>                    
                            <div id="iSmallHeadLeft" class="cConstantWiggle"></div>                        
                        </div>

                        <div id="iVideoAnimRight">
                            <div id="iManPointRight"></div>
                            <div id="iFingerPointRight"></div>
                            <div id="iSmallHeadRight" class="cConstantWiggle"></div>
                        </div>
                    </div>
                    
                </div>
                
            </section>
            
            <section class="cPage cBackground1 cParallaxStage" id="about">
                <!--<div id="iHillsFront"><div class="cExtraBG"></div></div>-->
                <div id="iHillsFrontNew">
                    <div class="cHillFrontItem"></div>
                    <div class="cHillFrontItem"></div>
                    <div class="cHillFrontItem"></div>
                    <div class="cHillFrontItem"></div>
                    <div class="cHillFrontItem"></div>
                    <div class="cHillFrontItem"></div>
                    <div class="cHillFrontItem"></div>
                    <div class="cHillFrontItem"></div>
                    <div class="cHillFrontItem"></div>
                </div>
                <div id="iAboutScroller" class="cParallaxLayer">
                    <div class="cCenter">
                        <div id="iRoad"></div>
                        <div id="iFirstAboutWrapper">
                            <div id="iContentAboutIntro">                            
                                    Abigail and Emma were born to two different sets of parents and raised apart. Unaware of each others’ existence for several decades, they led completely separate lives.                                                           
                            </div>                        
                            <div id="iFaceAboutFirst"></div>
                            <div id="iWigAboutFirst"></div>
                            <div id="iAbigailArrow"></div>
                            <div id="iContentAboutFirst" class="cSpeechBubble">
                                <div class="cSpeechBubbleInner">Abigail trained at East 15 Acting School and then five years trying to be the next Dame Judy. After embarrassing family and friends she retrained with physical theatre guru, Philippe Gaulier (alumni include Sacha Baron Cohen, Roberto Begnini and Simon McBurney). She then spent a happy, hilarious time travelling the land in a transit van, devising and performing with companies including Companie Philippe Gaulier, Trestle, and Told by an Idiot. At some point she decided to grow up and get a proper job, so became a theatre director then got really serious and added teacher to her CV.</div>                            
                            </div>
                        </div>
                        <div id="iSecondAboutWrapper">
                            <div id="iFaceAboutSecond"></div>
                            <div id="iWigAboutSecond"></div>
                            <div id="iEmmaArrow"></div>
                            <div id="iContentAboutSecond" class="cSpeechBubble cBottomRight">
                                <div class="cSpeechBubbleInner">Meanwhile, Emma studied creative arts in Manchester, and like Abigail went on to train with legendary clown maestro Philippe Gaulier. She then spent a similar amount of time in transit vans acting the goat for a living, unaware that Abigail was on a parallel motorway doing exactly the same thing. For twenty years she has been artistic director of award winning Facepack Theatre, renowned for their work with young people. Having hung up her performing trousers she now teaches a range of skills including mask–making and performance, mime, physical theatre and clowning. </div>
                            </div>
                        </div>   
                        <div id="iThirdAboutWrapper">
                            <div id="iContentAboutThird">
                                5 years ago their paths finally crossed and since then they have attended some writing courses (Robert Mckee, Noel Grieg and Steve Kaplan) and made up lots of jokes. In 2011 they won the Sitcom Mission competition with their sitcom 'What Next', which was judged by Lucy Lumsden (Sky) and Andy Hamilton (Hat Trick). Since then 'What Next' has been optioned by Hat Trick Productions and is currently in development. They have recently collaborated with Spymonkey Comedy on "Fleapit", a cinema-set sitcom (see link above). Which is which? Abigail has hair like Beethoven, and Emma has hair like Jane from Rod, Jane and Freddie. Abigail is a tri-athlete. Emma can’t catch. Between them they have one dog, two dwarf hamsters, five children, and no shame.
                            </div>
                        </div>                      
                    </div>
                </div>
               <div id="iBoxWrapper">
                    <div id="iBoxLayer1" class="cBoxLayer">
                        <div class="cBoxLayerSegment">
                            <div class="cBox cBox1"></div>
                            <div class="cBox cBox2"></div>
                            <div class="cBox cBox3"></div>
                            <div class="cBox cBox4"></div>
                            <div class="cBox cBox5"></div>
                            <div class="cBox cBox6"></div> 
                        </div>
                        <div class="cBoxLayerSegment cBoxLayerSegment1">
                            <div class="cBox cBox1"></div>
                            <div class="cBox cBox2"></div>
                            <div class="cBox cBox3"></div>
                            <div class="cBox cBox4"></div>
                            <div class="cBox cBox5"></div>
                            <div class="cBox cBox6"></div> 
                        </div>          
                        <div class="cBoxLayerSegment cBoxLayerSegment2">
                            <div class="cBox cBox1"></div>
                            <div class="cBox cBox2"></div>
                            <div class="cBox cBox3"></div>
                            <div class="cBox cBox4"></div>
                            <div class="cBox cBox5"></div>
                            <div class="cBox cBox6"></div> 
                        </div>
                        <div class="cBoxLayerSegment cBoxLayerSegment3">
                            <div class="cBox cBox1"></div>
                            <div class="cBox cBox2"></div>
                            <div class="cBox cBox3"></div>
                            <div class="cBox cBox4"></div>
                            <div class="cBox cBox5"></div>
                            <div class="cBox cBox6"></div> 
                        </div>   
                        <div class="cBoxLayerSegment cBoxLayerSegment4">
                            <div class="cBox cBox1"></div>
                            <div class="cBox cBox2"></div>
                            <div class="cBox cBox3"></div>
                            <div class="cBox cBox4"></div>
                            <div class="cBox cBox5"></div>
                            <div class="cBox cBox6"></div> 
                        </div>
                        <div class="cBoxLayerSegment cBoxLayerSegment5">
                            <div class="cBox cBox1"></div>
                            <div class="cBox cBox2"></div>
                            <div class="cBox cBox3"></div>
                            <div class="cBox cBox4"></div>
                            <div class="cBox cBox5"></div>
                            <div class="cBox cBox6"></div> 
                        </div>                   
                        <div class="cBoxLayerSegment cBoxLayerSegment6"></div>
                    </div>
                    <div id="iBoxLayer2" class="cBoxLayer">
                        <div class="cBoxLayerSegment">
                            <div class="cBox cBox1"></div>
                            <div class="cBox cBox2"></div>
                            <div class="cBox cBox3"></div>
                            <div class="cBox cBox4"></div>
                            <div class="cBox cBox5"></div>
                            <div class="cBox cBox6"></div> 
                        </div>
                        <div class="cBoxLayerSegment cBoxLayerSegment1">
                            <div class="cBox cBox1"></div>
                            <div class="cBox cBox2"></div>
                            <div class="cBox cBox3"></div>
                            <div class="cBox cBox4"></div>
                            <div class="cBox cBox5"></div>
                            <div class="cBox cBox6"></div> 
                        </div>          
                        <div class="cBoxLayerSegment cBoxLayerSegment2">
                            <div class="cBox cBox1"></div>
                            <div class="cBox cBox2"></div>
                            <div class="cBox cBox3"></div>
                            <div class="cBox cBox4"></div>
                            <div class="cBox cBox5"></div>
                            <div class="cBox cBox6"></div> 
                        </div>
                        <div class="cBoxLayerSegment cBoxLayerSegment3">
                            <div class="cBox cBox1"></div>
                            <div class="cBox cBox2"></div>
                            <div class="cBox cBox3"></div>
                            <div class="cBox cBox4"></div>
                            <div class="cBox cBox5"></div>
                            <div class="cBox cBox6"></div> 
                        </div>     
                        <div class="cBoxLayerSegment cBoxLayerSegment4">
                            <div class="cBox cBox1"></div>
                            <div class="cBox cBox2"></div>
                            <div class="cBox cBox3"></div>
                            <div class="cBox cBox4"></div>
                            <div class="cBox cBox5"></div>
                            <div class="cBox cBox6"></div> 
                        </div>   
                        <div class="cBoxLayerSegment cBoxLayerSegment5">
                            <div class="cBox cBox1"></div>
                            <div class="cBox cBox2"></div>
                            <div class="cBox cBox3"></div>
                            <div class="cBox cBox4"></div>
                            <div class="cBox cBox5"></div>
                            <div class="cBox cBox6"></div> 
                        </div>   
                        <div class="cBoxLayerSegment cBoxLayerSegment6"></div>
                    </div>            
<!--                    <div id="iBoxLayer3" class="cBoxLayer">
                        <div class="cBoxLayerSegment">
                            <div class="cBox cBox1"></div>
                            <div class="cBox cBox2"></div>
                            <div class="cBox cBox3"></div>
                            <div class="cBox cBox4"></div>
                            <div class="cBox cBox5"></div>
                            <div class="cBox cBox6"></div>                            
                        </div>
                    </div>                           -->
              
                </div>                
            </section>
            
            <section class="cPage cBackground2 cParallaxStage" id="images">
                    <div id="iBoxLayer3" class="cBoxLayer">
                        <div class="cBoxLayerSegment">
                            <div class="cBox cBox1"></div>
                            <div class="cBox cBox2"></div>
                            <div class="cBox cBox3"></div>
                            <div class="cBox cBox4"></div>
                            <div class="cBox cBox5"></div>
                            <div class="cBox cBox6"></div>                            
                        </div>
                    </div>                                          
 
                <div id="iImagesScroller" class="cParallaxLayer">
<!--                <div id="iFaceImagesFirst" ></div>
                <div id="iFaceImagesSecond"></div>              -->
                    <div class="cCenter">
                        <div id="iImageManagerRoot"></div>  
                        <!--<div id="iFaceImagesFirst1" ></div>-->
                        <!--<div id="iFaceImagesSecond1"></div>-->                     

                    </div>

                </div>               
            </section>
            <section class="cPage cBackground1 cParallaxStage" id="awards">
                <div id="iFooter">
                    <div class="cCenter">
                        <div id="iTheEnd"></div>             
                    </div>
                </div>                 
                <div class="cCenter">
                   
                    <div id="iPressWrapper">
                        <div id="iPressSofa"></div>
                        <div id="iPressHead1"></div>
                        <div id="iPressHead2"></div>
                        <a href="http://www.funnywomen.com/magazine/article/308/how-to-write-a-sitcom-the-winners-of-the-2012-sitcom-mission-tell-us-how" target="_blank"><div id="iPressLink" class=""></div></a>
                    </div>
<!--                    <div id="iAwardsWrapper">
                        <div id="iAwardsHiFive"></div>
                        <div id="iAwardsDressLeft"></div>
                        <div id="iAwardsHeadLeft"></div>
                        <div id="iAwardsWigLeft"></div>
                        <div id="iAwardsDressRight"></div>
                        <div id="iAwardsHeadRight"></div>
                        <div id="iAwardsWigRight"></div>                        
                    </div>-->
                    
                </div>

            </section>   
           
       </div>
        <div id="iStripBlock1">
            <div id="iStrips0" class="cStrips"></div>
            <div id="iStrips1" class="cStrips"></div>
            <div id="iStrips2" class="cStrips"></div>
            <div id="iStrips3" class="cStrips"></div>
            <div id="iStrips4" class="cStrips"></div>
            <div id="iStrips5" class="cStrips"></div>    
            <div id="iStrips6" class="cStrips"></div>
            <div id="iStrips7" class="cStrips"></div>
            <div id="iStrips8" class="cStrips"></div>  
        </div>
        <div id="iStripBlock2">
            <div id="iStrips10" class="cStrips"></div>
            <div id="iStrips11" class="cStrips"></div>
            <div id="iStrips12" class="cStrips"></div>
            <div id="iStrips13" class="cStrips"></div>
            <div id="iStrips14" class="cStrips"></div>
            <div id="iStrips15" class="cStrips"></div>    
            <div id="iStrips16" class="cStrips"></div>
            <div id="iStrips17" class="cStrips"></div>
            <div id="iStrips18" class="cStrips"></div>             

        </div>          
        <script src="libs/so_media_gallery/so_blanker.js"></script>
        <script src="libs/so_media_gallery/so_image_manager.js"></script>
        <script src="libs/so_media_gallery/so_video_manager.js"></script>  
        <script src="libs/so_media_gallery/so_video_html5.js"></script>  
        <script src="libs/so_media_gallery/so_video_vimeo.js"></script>  
        <script src="libs/so_tweet/so_tweet_manager.js"></script>
        <script>TWEET_MANAGER.tweets(<?php echo $tweets; ?>); </script>
        
        <script src="js/index.js"></script>
    </body>
</html>
