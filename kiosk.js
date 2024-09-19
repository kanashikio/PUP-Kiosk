function showModal(imgSource, title, description){
    let display = document.getElementById("display");
    let body = document.getElementById("body");
    body.style.overflow = "auto";
    document.addEventListener("mouseover", displayFollow);
    display.style.left = event.clientX + "px";
    display.style.top = event.clientY + "px";
    display.innerHTML = 
    "<div id='container'><img id='img' src='" + imgSource + "'>" + "<p class=title>" + title + "</p>" + "<p>" + description + "</p></div>";
}

function displayFollow(event){
    let a = document.getElementById("display");
    a.style.left = event.clientX +"px";
    a.style.top = event.clientY + "px";
}

function removeModal(){
    let a = document.getElementById("display");
    let b = document.getElementById("body");
    a.removeAttribute('style');
    b.removeAttribute('style');
    document.removeEventListener("mouseleave", displayFollow);
    a.removeChild(a.childNodes[0]);
}

window.onload = function() {
    let display = document.createElement("div");
    display.id = "display";
    display.classList.add("modal-display");
    document.body.appendChild(display);
};