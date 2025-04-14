let me = document.getElementById("imageMe");
function disappear () {
    me.style.display = 'none';
}
function reappear () {
    me.style.display = "block";
}
me.onmouseover = disappear;
me.onmouseout = reappear;