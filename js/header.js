window.onload = function() {
    siteTitle();
    siteNavigation();
    siteFooter();
}

function siteTitle() {
    document.getElementById("header").innerHTML += "<h1 class='masterHeader'>Fruita Freeze Dried Goodies</h1>";
}

function siteNavigation() {
    var navigationList = ["Home",
                          "Products",
                          "About Us"];
    var navigationPath = ["home",
                          "products",
                          "aboutUs"];
    var header = "<div class='navigationList'>";
    for (var i = 0; i < navigationList.length; i++){
        header += "<a class='listItem' href='" + navigationPath[i] + ".html'>" + navigationList[i] + "</a>";
    }
    header += "</div>";
    document.getElementById("header").innerHTML += header;
}

function siteFooter() {
    document.getElementById("footer").innerHTML += "<div class='siteFooter'>For pre-orders send us an email: fruitafreezedriedgoodies@gmail.com</div>";
    document.getElementById("footer").innerHTML += "<div class='siteFooter'>Owned and Operated by Ron & Sue Stephan</div>";
}
