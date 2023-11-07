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
        var article, articles, i, j, len, len1, tablink, tablinks;
        articles = document.getElementsByClassName("article");
        for(i = 0, len = articles.length; i < len; i++){
            article = articles[i];
            article.style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for(j = 0, len1 = tablinks.length; j < len1; j++){
            tablink = tablinks[j];
            tablink.className = tablink.className.replace(" w3-blue", "");
        }
        document.getElementById(animName).style.display = "block";
        evt.currentTarget.className += " w3-blue";
    };
}).call(this);

