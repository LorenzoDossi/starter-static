window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.getOptimumX = function(/*element*/){
    var dpr = window.devicePixelRatio || 1;
    if(dpr > 2.5){
        dpr *= 0.5;
    } else if(dpr > 1.9){
        dpr *= 0.75;
    } else {
        dpr -= 0.01;
    }
    return Math.min(Math.round(dpr * 100) / 100, 2);
};
window.lazySizesConfig.constrainPixelDensity = true;
// window.lazySizesConfig.loadHidden = false;

import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg.js';
import 'lazysizes/plugins/bgset/ls.bgset.js';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/optimumx/ls.optimumx.js';
