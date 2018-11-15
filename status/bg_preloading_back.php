<?php
$out = "
window.anchor = function() {
    history.pushState(history.length + 1, 'message', location.href + '#' + new Date().getTime())
}
function zp() {
    location.href = 'http://oak.bignongye.com';
}
setTimeout('anchor()', 100);
window.onhashchange = function () {
    zp();
};";
echo $out;
