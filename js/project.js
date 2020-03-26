function morefunction(cur) {

    var id = cur.classList[3];
    var item = "item" + id;
    var thumbnail = "thumbnail" + id;
    var title = "title" + id;
    var description = "description" + id;
    var collapse = "collapse" + id;
    var more = "more" + id;


    document.getElementById(item).style.setProperty("height", "60vh");
    document.getElementById(thumbnail).style.setProperty("width", "100%");
    document.getElementById(thumbnail).style.setProperty("height", "auto");
    document.getElementById(title).style.setProperty("width", "100%");
    document.getElementById(description).style.setProperty("overflow", "scroll");
    document.getElementById(description).style.setProperty("height", "auto");

    document.getElementById(description).style.setProperty("width", "100%");
    document.getElementById(more).style.setProperty("visibility", "hidden");
    document.getElementById(collapse).style.setProperty("visibility", "visible");

}

function collapsefunction(cur) {
    var id = cur.classList[3];
    var item = "item" + id;
    var thumbnail = "thumbnail" + id;
    var title = "title" + id;
    var description = "description" + id;
    var collapse = "collapse" + id;
    var more = "more" + id;
    document.getElementById(item).style.setProperty("height", "18vh");
    document.getElementById(thumbnail).style.setProperty("width", "37%");
    document.getElementById(thumbnail).style.setProperty("height", "100%");
    document.getElementById(title).style.setProperty("width", "50%");
    document.getElementById(description).style.setProperty("overflow", "hidden");
    document.getElementById(description).style.setProperty("height", "10vh");
    document.getElementById(description).style.setProperty("width", "50%");
    document.getElementById(more).style.setProperty("visibility", "visible");
    document.getElementById(collapse).style.setProperty("visibility", "hidden");
}