function zebra() {
    var x = document.querySelectorAll("tbody tr");
    var t = x.length;
    for (var i = 0; i < t; (i = i + 2)) {
        x[i].className += "zebraon";
    }
}