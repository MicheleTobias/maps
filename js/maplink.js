var map1, map2, map3;

function maplink(target) {
            map1.setView(target.target.getCenter(), target.target.getZoom());          
            map2.setView(target.target.getCenter(), target.target.getZoom());
            map3.setView(target.target.getCenter(), target.target.getZoom()); 

/*
The following are a bunch of tries of things that didn't work for various reasons...
    if (map1.getCenter() != target.target.getCenter()) {
            map2.setView(map1.getCenter(), map1.getZoom()); 
            map3.setView(map1.getCenter(), map1.getZoom());
        }
    else if (map2.getCenter() != target.target.getCenter()) {
            map1.setView(map2.getCenter(), map2.getZoom());
            map3.setView(map2.getCenter(), map2.getZoom());           
        }
    else if (map3.getCenter() != target.target.getCenter()) {
            map2.setView(map3.getCenter(), map3.getZoom());
            map1.setView(map3.getCenter(), map3.getZoom());           
        }
            
*/

/*    
    if (target.target.options.zoom > 0) { 
    map1.panTo(target.target.getCenter());
    map2.panTo(target.target.getCenter());
    map3.panTo(target.target.getCenter());
    map1.setZoom(target.target.getZoom());
    map2.setZoom(target.target.getZoom());
    map3.setZoom(target.target.getZoom());
    }
*/
/*
    IDEAS
    For Loop to prevent endless looping?
    
, {reset: true} 

 
event --> event, target (which item had the event)

getCenter() --> LatLng
getZoom() --> number

panTo(<LatLng>, <pan options>)
setZoom(<number>, <zoom options.)
*/
}

