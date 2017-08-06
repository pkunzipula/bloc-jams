
var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(element) {
    element.style.opacity = 1;
    element.style.transform = "scale(1)";
    element.style.msTransform = "scale(1)";
    element.style.WebkitTransform = "scale(1)";
}

/*function revealPoint(element) {
    element.style.opacity = 1;
    element.style.transform = "scale(1)";
    element.style.msTransform = "scale(1)";
    element.style.WebkitTransform = "scale(1)";
}*/
var animatePoints = function(points){
    forEach(points, revealPoint);
}

window.onload = function() {
    if(window.innerHeight > 950) {
        animatePoints(pointsArray);
        //pointsArray.forEach(revealPoint);
    }
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    window.addEventListener('scroll', function(event) {
        if(document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
            //pointsArray.forEach(revealPoint);
        }
    });
}
