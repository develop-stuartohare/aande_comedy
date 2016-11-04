import React from 'react';

import './clouds.less';


export const CloudBack = props => (		
    <div className="cloud cloud-back" id="cloud-back">   
        <div className="cloud-bg-container"/>   
        <div className="cloud-bg-extended"/>      
    </div>		             
)


export const CloudMiddle = props =>(
  
    <div className="cloud cloud-middle" id="cloud-middle">
        <div className="cloud-bg-container"/>
    </div>                  
)


export const CloudFront = props =>(

    <div className="cloud cloud-front" id="cloud-front">            
        <div className="cloud-bg-container"/>
        <div className="cloud-bg-extended"/>    
    </div>         
)



const Clouds = props => (
    <div className="cloud-container">
        <CloudBack/>
        <CloudMiddle/>   
        {props.children}             
        <CloudFront/>
    </div>
)


import {scrollConnect} from '../../../containers/scroll';

export default scrollConnect(
    {
        '#cloud-back':{
            y:{
                start: 0,
                end: -600,
                ratio: 1.2,
                offset:2500  
            }          
        },
        '#cloud-middle':{
            y:{
                start: 0,
                end: -300,
                offset:2700  
            }          
        },        
    
    }
)(Clouds);