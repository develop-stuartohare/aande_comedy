
import $ from 'jquery';

export const STEP_ANIMATOR = 
{
    $scrollCounter : false,
    arrObjAnim : [],
    booWiggle : false,
    booHeadPop : false,
    globalRatio :5,    
    
    init : function()
    {
        this.$scrollCounter = $('#iScrollCounter');  
        
        SCROLL_MANAGER.addCallback(STEP_ANIMATOR.update);
        var h = $('#iContainer').height();
        var newHeight = (h * STEP_ANIMATOR.globalRatio) + (500*STEP_ANIMATOR.globalRatio);
        newHeight = 37859;  
        $('body').append('<div id="iAnimScrollStretcher" style="height:'+ newHeight+'px"></div>');
        //$('body').height(newHeight);  
        //STEP_ANIMATOR.update(top);
    },

    addAnimationGroup : function(objAnimation)
    {        
        this.arrObjAnim.push(objAnimation);
    },
        
    update : function(intScrollTop)
    {                
        var intScrollTopNew =  Math.round(intScrollTop / STEP_ANIMATOR.globalRatio);        
//        STEP_ANIMATOR.$scrollCounter.text(intScrollTop); 

        
        STEP_ANIMATOR.updateAnimations(intScrollTopNew);  

    },
    
    updateAnimations : function(intStep)
    {                            
        for(var i=0, objAnim = 0; objAnim = STEP_ANIMATOR.arrObjAnim[i];i++)
        {
            objAnim.update(intStep);
        }                
        
        // if(!STEP_ANIMATOR.booWiggle && intStep > 398)
        // {
        //     STEP_ANIMATOR.booWiggle = true;
        //     $('#iSpectacles, #iMoustache').addClass('cConstantWiggle');
        // }
        
        // if(STEP_ANIMATOR.booWiggle && intStep < 398)
        // {
        //     STEP_ANIMATOR.booWiggle = false;
        //     $('#iSpectacles, #iMoustache').removeClass('cConstantWiggle');
        // }  
          
        
        // if(!STEP_ANIMATOR.booTrophy && intStep > 3486)
        // {
        //     STEP_ANIMATOR.booTrophy = true;
        //     $('#iAwardsTrophy').addClass('cConstantWiggle');
        // }           
    }
};

export const SCROLL_MANAGER = 
{
    $window : false,
    arrCallbacks : [],
    
    init(){
        this.$window = $(window);
    },
    
    addCallback(cb){
        
        this.arrCallbacks.push(cb);
    },
    
    update(event){                
        var intScrollTop =  SCROLL_MANAGER.$window.scrollTop();        
        for(var i=0, cb = 0;cb = SCROLL_MANAGER.arrCallbacks[i];i++)
        {
            cb(intScrollTop);
        }
    }
};


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
export const draw = ()=> {
    requestAnimationFrame(draw);
    var now = new Date().getTime(),
        dt = now - (time || now);
 
    time = now;
 
    SCROLL_MANAGER.update();       
}




export class AnimationGroup {

    constructor(args){
        this.arrAnimations = [];    
        this.start_step = args.start_step || 0;
        if(args.end_step){
            this.end_step = args.end_step +1;
        }
        this.selector = args.selector
        this.$dom = $(this.selector);
        this.id = AnimationGroup.count++;
        
        $('body').prepend('<div class="cDebugCounter" id="iDebugCounter_'+this.id+'" style="position:fixed;top:'+(85 + (15* this.id))+'px;left:5px; z-index:500"><div>');
        
        this.$debug = $('#iDebugCounter_'+this.id);
        
        STEP_ANIMATOR.addAnimationGroup(this);
    }

    addAnimations(arrAnim){
        for(var i=0, args=0;args=arrAnim[i];i++)
        {
            this.addAnimation(args);
        }
    }
    
    addAnimation(args){        
        var objAnim = new Animatable(args);
        this.arrAnimations.push(objAnim);
        return objAnim;
    }
    
    addEvent(args){
        this.events = this.events || [];
            
        args.booBefore = false;
        args.booAfter = false;
        this.events.push(args);
    }
    
    update(intStep){
        //if(intStep >= this.start_step && (!this.end_step || intStep < this.end_step))
        {            
            intStep = intStep - this.start_step;
           var debug_info = intStep >= 0 ? "layer: " + this.selector + ' = ' +intStep : "";
           this.$debug.html(debug_info);
            
            for(var i=0, objAnim=0;objAnim=this.arrAnimations[i];i++)
            {
                objAnim.update(intStep);
            }
            if(this.events)
            {
                let objEvent;

                for(i=0, objEvent=0;objEvent=this.events[i];i++)
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
}

AnimationGroup.count = 0;


export class Animatable {

    constructor(args){

        this.selector ="";
        this.css = false;
        this.css_targets = false;
        this.last_css_data = false;

        this.css_targets = args.css_targets;        
        this.$dom = $(args.selector);
        this.selector = args.selector;
        this.css = this.$dom.css([ "top", "bottom", "left", "right", "opacity", "margin-top", "margin-left"]);    
                
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


    
    update(intStep){
        var css_data = {};   
        
        
        for(var css_style in this.css_targets)
        {
            var target = this.css_targets[css_style]; 
            
        
            if(typeof(target.start_value) === 'undefined')
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
    }
        
    setupTarget(target, style){   

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
        
    }
    
    calcStepValue(start_value, step, ratio){
        var delta = step * ratio;
        var total = start_value + delta;
        return Math.round(total);
    }

}

Animatable.LOOP_TYPES = {continous : 0, alternate: 1}



export default {
    init: ()=>{        
        SCROLL_MANAGER.init();
        STEP_ANIMATOR.init();
        draw();
    }
}   