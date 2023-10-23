(function() {
    var Overlay, Sidebar, openLink, w3_close, w3_open;
    Sidebar = document.querySelector("#mySidebar");
    Overlay = document.querySelector("#myOverlay");
    w3_open = function() {
        Sidebar.style.display = "block";
        Overlay.style.display = "block";
    };
    w3_close = function() {
        Sidebar.style.display = "none";
        Overlay.style.display = "none";
    };
    openLink = function(evt, animName) {
        var i, tablinks, x;
        x = document.getElementsByClassName("article");
        i = 0;
        while(i < x.length){
            x[i].style.display = "none";
            i++;
        }
        tablinks = document.getElementsByClassName("tablink");
        i = 0;
        while(i < x.length){
            tablinks[i].className = tablinks[i].className.replace(" w3-blue", "");
            i++;
        }
        document.getElementById(animName).style.display = "block";
        evt.currentTarget.className += " w3-blue";
    };
}).call(this);

