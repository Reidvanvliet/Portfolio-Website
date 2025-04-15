let me = document.getElementById("imageMe");
let contact = document.getElementById("contact");
let close = document.getElementById('close');
const words = new URLSearchParams(window.location.search);
const message = words.get("message");
const messageEl = document.getElementById('offers');

function contactMe () {
    document.getElementById('contactMe').style.display = 'block';
}

function contactMeClose () {
    document.getElementById('contactMe').style.display = 'none';
}

function disappear () {
    me.style.display = 'none';
}

function reappear () {
    me.style.display = "block";
}

if (me != null){
    me.onmouseover = disappear;
}

if (me != null) {
    me.onmouseout = reappear;
}

if (messageEl != null) {
    messageEl.innerHTML = message;
}
contact.onclick = contactMe;
close.onclick = contactMeClose;