import {Animatable, AnimationGroup, SCROLL_MANAGER, STEP_ANIMATOR} from './animator';

var IntroSection = new AnimationGroup( { selector : '.intro-section', start_step : 0 , end_step : 1825})
var IntroSectionAnims = 
[
    {
        selector : '.intro-head-emma-wig1',
        css_targets :
        {         
            "top" :
            {                       
                ratio:-2.8
            }

        }
    }
]

IntroSection.addAnimations(IntroSectionAnims)