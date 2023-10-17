"use strict";
const Sidebar = document.querySelector("#mySidebar");
const Overlay = document.querySelector("#myOverlay");
function w3_open() {
    Sidebar.style.display = "block";
    Overlay.style.display = "block";
}
function w3_close() {
    Sidebar.style.display = "none";
    Overlay.style.display = "none";
}
function openLink(evt, animName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("article");
    for(i = 0; i < x.length; i++)x[i].style.display = "none";
    tablinks = document.getElementsByClassName("tablink");
    for(i = 0; i < x.length; i++)tablinks[i].className = tablinks[i].className.replace(" w3-blue", "");
    document.getElementById(animName).style.display = "block";
    evt.currentTarget.className += " w3-blue";
}

