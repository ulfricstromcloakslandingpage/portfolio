var containerwidth;
var containerheight;
var thumbnailwidth;
var thumbnailheight;
var itemwidth;
var itemheight;
var titlewidth;
var titleheight;
var descriptionwidth;
var descriptionheight;

function morefunction(cur) {
    if (cur.classList == undefined) {
        var id = cur;
    } else {
        var id = cur.classList[3];
    }
    var container = "container" + id;
    var item = "item" + id;
    var thumbnail = "thumbnail" + id;
    var title = "title" + id;
    var description = "description" + id;
    var collapse = "collapse" + id;
    var more = "more" + id;
    var buy = "buy" + id;

    containerwidth = document.getElementById(container).style.getPropertyValue("width");
    containerheight = document.getElementById(container).style.getPropertyValue("height");
    itemwidth = document.getElementById(item).style.getPropertyValue("width");
    itemheight = document.getElementById(item).style.getPropertyValue("height");
    thumbnailwidth = document.getElementById(thumbnail).style.getPropertyValue("width");
    thumbnailheight = document.getElementById(thumbnail).style.getPropertyValue("height");
    descriptionwidth = document.getElementById(description).style.getPropertyValue("width");
    descriptionheight = document.getElementById(description).style.getPropertyValue("height");
    document.getElementById(item).style.setProperty("height", "60vh");
    // document.getElementById(item).style.setProperty("text-align", "center");
    document.getElementById(container).style.setProperty("width", "100%");
    document.getElementById(container).style.setProperty("height", "70vh");
    document.getElementById(thumbnail).style.setProperty("width", "auto");
    document.getElementById(thumbnail).style.setProperty("height", "50%");

    document.getElementById(thumbnail).style.setProperty("position", "relative");
    console.log(screen.orientation.angle);
    if (screen.width > 1000 && screen.orientation.angle == "90")
        document.getElementById(thumbnail).style.setProperty("left", "30%");


    document.getElementById(title).style.setProperty("width", "100%");
    document.getElementById(title).style.setProperty("margin", "2vh 4vw");
    document.getElementById(description).style.setProperty("overflow", "scroll");
    document.getElementById(description).style.setProperty("height", "16vh");
    document.getElementById(description).style.setProperty("margin", "2vh 5vw");
    document.getElementById(description).style.setProperty("width", "90%");
    document.getElementById(more).style.setProperty("visibility", "hidden");
    document.getElementById(collapse).style.setProperty("visibility", "visible");
    document.getElementById(buy).style.setProperty("visibility", "visible");
    document.getElementById(buy).style.setProperty("transition-property", "all");
    document.getElementById(buy).style.setProperty("transition-delay", "800ms");
    titlewidth = document.getElementById(title).style.getPropertyValue("width");
    titleheight = document.getElementById(title).style.getPropertyValue("height");



}

function collapsefunction(cur) {
    var id = cur.classList[3];
    var container = "container" + id;
    var item = "item" + id;
    var thumbnail = "thumbnail" + id;
    var title = "title" + id;
    var description = "description" + id;
    var collapse = "collapse" + id;
    var more = "more" + id;
    var buy = "buy" + id;
    document.getElementById(container).style.setProperty("width", containerwidth);
    document.getElementById(container).style.setProperty("height", containerheight);
    //document.getElementById(item).style.setProperty("text-align", "center");
    document.getElementById(item).style.setProperty("height", itemheight);
    document.getElementById(thumbnail).style.setProperty("width", thumbnailwidth);
    document.getElementById(thumbnail).style.setProperty("height", thumbnailheight);
    document.getElementById(thumbnail).style.setProperty("left", "0%");



    document.getElementById(title).style.setProperty("width", "40%");
    document.getElementById(title).style.setProperty("margin", "0vh 0vw");
    document.getElementById(description).style.setProperty("overflow", "hidden");
    document.getElementById(description).style.setProperty("height", descriptionheight);
    document.getElementById(description).style.setProperty("width", descriptionwidth);
    document.getElementById(description).style.setProperty("margin", "1vh auto");
    document.getElementById(more).style.setProperty("visibility", "visible");
    document.getElementById(collapse).style.setProperty("visibility", "hidden");
    document.getElementById(buy).style.setProperty("transition-property", "none");
    document.getElementById(buy).style.setProperty("visibility", "hidden");

}

function search(cur) {
    var link = document.getElementById("link");
    var more = "";
    var text = cur.value;
    document.getElementById("noresult").innerHTML = "";
    text = text.toLowerCase();
    if (text.match("[wW][oO][oO][dD].*") || text.match("[sS][wW][oO][rR][dD].*")) {
        text = "#title1";
        more = "1";
    } else if (text.match("[Nn][Ii][Gg][hH][Tt].*[Bb][Ll][aA][dD][eE].*") || text.match("[Bb][Ll][aA][dD][eE].*")) {
        text = "#title2";
        more = "2";
    } else if (text.match(".*[cC][hH][iI][lL].*")) {
        text = "#title3";
        more = "3";
    } else if (text.match(".*[tT][Hh][iI][eE][fF].*[Dd]*") || text.match(".*[Dd][aA][gG][gG][eE][rR].*")) {
        text = "#title4";
        more = "4";
    } else if (text.match("[Nn]*[Ii]*[Gg]*[hH]*[Tt]*.*[Bb][oO][wW].*")) {
        text = "#title5";
        more = "5";
    } else {
        text = "#link";
        document.getElementById("noresult").innerHTML = "Not Found";
    }

    if (more != "") {
        morefunction(more);
    }
    link.setAttribute("href", text);
    link.click();
}

function buy() {
    alert("Sorry :( \n We are not taking orders anymore");
}