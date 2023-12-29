
var gameInstance;
var scaleToFit;

function init(){
    gameInstance = UnityLoader.instantiate("gameContainer", "Build/Builds.json");
try {
    console.log("try scale to fit res");
    scaleToFit = !!JSON.parse("");
} catch (e) {
    console.log("catch scale to fit res");
    scaleToFit = true;
}
}

function onResize() {
    console.log("resize");
    var canvas = gameInstance.Module.canvas;
    var container = gameInstance.container;
    var w;
    var h;

    if(!canvas || !container){
        console.log("no canvas");
        return;
    }

    if(!container){
        console.log("no container");
        return;
    }

    if (scaleToFit) {
        w = window.innerWidth;
        h = window.innerHeight;

        var r = 720 / 1280;

        if (w * r > window.innerHeight) {
            w = Math.min(w, Math.ceil(h / r));
        }
        h = Math.floor(w * r);
    } else {
        w = 1280;
        h = 720;
    }

    container.style.width = canvas.style.width = w + "px";
    container.style.height = canvas.style.height = h + "px";
    container.style.top = Math.floor((window.innerHeight - h) / 2) + "px";
    container.style.left = Math.floor((window.innerWidth - w) / 2) + "px";
}

window.addEventListener('resize', onResize);

// Call onResize when the body is loaded
document.addEventListener('DOMContentLoaded', function() {
    onResize();
});
