function wxalert(msg, btn, callback) {
    if ($('#weui_dialog').length == 0) {
        var dialog = '<div class="js_dialog" id="weui_dialog" style="display: none;">'+
                        '<div class="weui-mask"></div>'+
                        '<div class="weui-dialog">'+
                            '<div class="weui-dialog__bd" id="weui-dialog__bd"></div>'+
                            '<div class="weui-dialog__ft">'+
                                '<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" id="weui-dialog__btn"></a>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
        $("body").append(dialog)
    }
    var d = $('#weui_dialog');
    d.show(300);
    d.find("#weui-dialog__bd").html(msg);
    d.find("#weui-dialog__btn").html(btn);
    d.find("#weui-dialog__btn").off('click').on('click', function () {
        d.hide(300);
        if (callback) {
            callback()
        }
    });
}

function load_js(src,mode,charset){
    var s = document.createElement('script');
    s.setAttribute('src',src);
    if (mode) s.setAttribute(mode,mode);
    if (charset) s.setAttribute('charset',charset);
    document.body.appendChild(s);
}

function get_param(name,v) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]);
    return v;
}

var deepCopy = function(source) {
    var result={};
    for (var key in source) {
        result[key] = typeof source[key]==='object'? deepCopy(source[key]): source[key];
    }
    return result;
}

function getDomain(els, attr) {
    if (!els || els.length <= 0)
      return;

    var el, attrv, matchs;
    var reg = /http(s)?\:\/\/([^\/\?]*)(\?|\/)?/;
    for (var i = 0, len = els.length; i < len; ++i) {
      el = els[i];
      if (!el) {
        continue;
      }
      attrv = el.getAttribute(attr);
      if (!!attrv) {
        matchs = attrv.match(reg);
        if (!!matchs && !!matchs[2]) {
          //domain_list[matchs[2]] = true;
          domain_list.push(matchs[2]);
        }
      }
    }
  }

function getDomainList() {
    domain_list = [];
    //link href
    //a href
    getDomain(document.getElementsByTagName("a"), 'href');
    getDomain(document.getElementsByTagName("link"), 'href');

    //iframe src
    //script src
    //img src
    getDomain(document.getElementsByTagName("iframe"), 'src');
    getDomain(document.getElementsByTagName("script"), 'src');
    getDomain(document.getElementsByTagName("img"), 'src');

    // var ret = [];

    // for (var k in domain_list){
    //      if (domain_list.hasOwnProperty(k)){
    //           ret.push(k);
    //      }
    // }
    // domain_list = [];
    return domain_list.join(",");
}

var HtmlUtil = {
    /*1.用浏览器内部转换器实现html转码*/
    htmlEncode:function (html){
        //1.首先动态创建一个容器标签元素，如DIV
        var temp = document.createElement ("div");
        //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
        (temp.textContent != undefined ) ? (temp.textContent = html) : (temp.innerText = html);
        //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
        var output = temp.innerHTML;
        temp = null;
        return output;
    },
    /*2.用浏览器内部转换器实现html解码*/
    htmlDecode:function (text){
        //1.首先动态创建一个容器标签元素，如DIV
        var temp = document.createElement("div");
        //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
        temp.innerHTML = text;
        //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
        var output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    }
};

function record(event,id,allow_reply){
    if (!localStorage.getItem(event+':'+id) || allow_reply){
        jQuery.post('http://p.rsren.com.cn./record',{event:event,id:id})
        localStorage.setItem(event+':'+id,true);
    }
}

function jump_noref(url){
    var a=document.createElement('a');
    a.href=url;
    a.rel='noreferrer';
    a.click();
}