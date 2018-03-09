function openOffcanvas() {
    document.getElementById("myOffcanvas").style.width = "250px";
    document.getElementById("mainContent").style.marginLeft = "250px";
}

function openNav3() {
    document.getElementById("myCanvasNav").style.width = "100%";
	document.getElementById("myCanvasNav").style.backgroundImage = "url('a.jpg')";
	document.getElementById("myCanvasNav").style.backgroundSize = "contain";
	document.getElementById("myCanvasNav").style.backgroundRepeat = "no-repeat";
    document.getElementById("myCanvasNav").style.opacity = "0.5";  
}

function closeOffcanvas() {
    document.getElementById("myOffcanvas").style.width = "0%";
    document.getElementById("mainContent").style.marginLeft= "0%";
    document.body.style.backgroundColor = "white";
    document.getElementById("myCanvasNav").style.width = "0%";
    document.getElementById("myCanvasNav").style.opacity = "0"; 
}
function closeOffcanvas2() {
    document.getElementById("myOffcanvas2").style.display = "none";
}

