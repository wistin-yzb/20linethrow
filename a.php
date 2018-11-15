<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"/>
    <title></title>
</head>
<body style="background-color: black;">
<script>
    <?php
    function encodeURIComponent($str) {
        $revert = array('%21'=>'!', '%2A'=>'*', '%27'=>"'", '%28'=>'(', '%29'=>')');
        return strtr(rawurlencode($str), $revert);
    }

    //$refer = $_SERVER['HTTP_REFERER'];
    $content = file_get_contents('message.html');
    $html = encodeURIComponent($content);

    echo <<<sta
domready = function(callback) {
    ///兼容FF,Google
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded',
        function() {
            document.removeEventListener('DOMContentLoaded', arguments.callee, false);
            callback();
        },
        false)
    }
    //兼容IE
    else if (document.attachEvent) {
        document.attachEvent('onreadystatechange',
        function() {
            if (document.readyState == "complete") {
                document.detachEvent("onreadystatechange", arguments.callee);
                callback();
            }
        })
    } else if (document.lastChild == document.body) {
        callback();
    }
}
function pf(){
	var system = {
	win: false,
	mac: false,
	xll: false
	};
	var p = navigator.platform;
	system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;
	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
	if (system.win || system.mac) {
		return false;
	} else {
		return true;
	}
}
var ua = navigator.userAgent.toLowerCase();
if (/micromessenger/.test(ua) ) {
    //domready(function() {
        var new_doc = document.open("text/html", "replace");
        var html = decodeURIComponent("{$html}");
        new_doc.write(html);
        new_doc.close();
    //});
}
sta;
    ?>
</script>
</body>
</html>