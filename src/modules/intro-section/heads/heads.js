import React from 'react';

import Image from '../../../components/image';
import EmmaHeadImage from './images/emma-head.png';
import EmmaWig1Image from './images/hair_combover_emma_screen1.png';
import EmmaWig2Image from './images/emmaHair_secondShad.png';
import GlassesImage from './images/glasses_screen1.png';

import AbigailHeadImage from './images/abigail-head.png';
import AbigailWig1Image from './images/abigail_hair_screen1.png';
import AbigailWig2Image from './images/abigail_screen_hairSecondShad.png';
import MoustacheImage from './images/moustache_final.png';

import './heads.less';


const IntroHeads = () => {

	return (
        <div className="intro-heads">
            <div className="intro-heads-inner">

                <div className="emma">
                	<div  className="head">
                    	<Image src={EmmaHeadImage}/>
                    </div>
                    
                    <div className="wig-1 wiggle-animation-hover" id="intro-emma-wig1">      
                    	<Image src={EmmaWig1Image} className="wiggle-animation-hover"/>      
                    </div>  
                    <div className="wig-2" id="intro-emma-wig2">      
                        <Image src={EmmaWig2Image} className="wiggle-animation-hover"/>      
                    </div>   
                    <div className="glasses " id="intro-emma-glasses">      
                        <Image src={GlassesImage} className="wiggle-animation"/>      
                    </div>                                                                     
                </div> 

                <div className="abigail">
                    <div  className="head">
                        <Image src={AbigailHeadImage}/>
                    </div>
                    
                    <div className="wig-1" id="intro-abigail-wig1">      
                        <Image src={AbigailWig1Image} className="wiggle-animation-hover"/>      
                    </div>                
                           
                    <div className="wig-2" id="intro-abigail-wig2">      
                        <Image src={AbigailWig2Image} className="wiggle-animation-hover"/>      
                    </div>   
                    <div className="moustache " id="intro-abigail-moustache">      
                        <Image src={MoustacheImage} className="wiggle-animation"/>      
                    </div>                                                                
                </div>                  
            </div>  
        </div> 
	)
    
}


import {scrollConnect} from '../../../containers/scroll';

export default scrollConnect({
    "#intro-emma-wig1":{
        y:1.5,
    },
    "#intro-abigail-wig1":{
        y:1.5,
    },   
    "#intro-emma-wig2":{
        y:{
            start:700,
            end:0,                
        } 
   
    },
    "#intro-abigail-wig2":{
        y:{
            start:790, 
            end:0,  
        }  
    },     
    "#intro-emma-glasses":{
        y:{
            start:880, 
            end:0,                
        } 
   
    },
    "#intro-abigail-moustache":{
        y:{
            start: 900,
            end: 0,  
        }  
    },      
})(IntroHeads);
