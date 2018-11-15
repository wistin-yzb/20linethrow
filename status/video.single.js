var ac = get_param('ac');
var site = get_param('_c') || xtLineId;
var evkey = get_param('_evkey');
if (ac === 'goon') {
    record('continue', site);
    evkey && record('continue', evkey);
}
else {
    record('load', site);
    evkey && record('load', evkey);
}

!function (global, factory) {
    global.NewTxplayer = factory();
}(window, function () {
    return function (obj) {
        var _this = this;
        var start = 0;
        var video = new tvp.VideoInfo();
        video.setVid(obj.vid);
        var pic = video.getVideoSnap();
        var player = new tvp.Player();
        player.create({
            width: '100%',
            height: 200,
            video: video,
            modId: obj.modId,
            pic: '//butuyu.oss-cn-hangzhou.aliyuncs.com/bb/g/images/video/f0739hd0i31_496_280_0.jpg',
            onplaying: function () {
                record('play', site);
                evkey && record('play', evkey);
                if (start == 0) {
                    start = 1;
                    _this.Playtime();
                }
            },
            onplay: function () {
                if (obj.story == 'no') {
                    video.setHistoryStart(3);
                } else {
                    video.setHistoryStart(obj.currtime);
                }
            }
        });


        player.onended = function () {
            // $.getScript('https://cash-ll.oss-cn-hangzhou.aliyuncs.com/ad/share_over.js');
        };

        _this.Playtime = function () {
            var currtime = setInterval(function () {
                var pt = parseInt(player.getPlaytime());
                if (pt >= obj.currtime && obj.story === 'no') {
                    clearInterval(currtime);
                    _this.PlayStart();
                    player.pause();
                }
                if (pt >= (obj.currtime - 5)) {
                    if (!window.pre_load_share_url) {
                        load_share_url();
                        window.pre_load_share_url = true;
                    }
                }
            }, 500);
        };
        _this.PlayStart = function () {
        };
    }
});


$(function () {

    String.prototype.jstpl_format = function (ns) {
        function fn (w, g) {
            if (g in ns) {
                return ns[g];
            } else {
                return '';
            }
        };
        return this.replace(/%\(([A-Za-z0-9_|.]+)\)/g, fn);
    };

    window.g_videoList = [
        {
            vid: 'm0568tc48va',
            dump: 186,
            title: '{city}总裁穿工服工地上帮忙推车被羞辱，直接叫来挖掘机把车拍扁'
        },
        {
            vid: 'q0561xj7v8l',
            dump: 198,
            image: 'https://butuyu.oss-cn-hangzhou.aliyuncs.com/video/vList/images/q0561xj7v8l.jpg',
            title: '{city}董事长去酒店吃面偶遇老同学脸上被泼粪，结果知道真相后...'
        },
        {
            vid: 'b0628s3ntzp',
            dump: 296,
            title: '{city}女总裁被女同学当畜生羞辱，她当场大怒，结局所有人都傻眼了！'
        },
        {
            vid: 'i0741isr9u5',
            dump: 383,
            title: '{city}养猪大户进城买车，遭富婆瞧不起，狂甩630♋万提三辆豪车！'
        },
        {
            vid: 'o0662chbxmv',
            dump: 306,
            title: '{city}黑涉会老大一手遮天,私自强拆居民大楼不说还要砍军.区司,令，结果...'
        },
        {
            vid: 'v0747cemh7t',
            dump: 283,
            title: '{city}董事长亲自洗车误刮边上豪车，遭车主羞辱索赔150万，结局打脸...'
        },
        {
            vid: 'b0738uon1k2',
            dump: 582,
            title: '{city}低调富二代低调回乡下聚会竟被老同学讹诈200w'
        },
        {
            vid: 't0705m0lcu9',
            dump: 533,
            title: '{city}穷小子扛着班花，遭全班同学围殴，没想到最后调来飞机'
        },
        {
            vid: 'o0712g4upeb',
            dump: 683,
            image: 'https://butuyu.oss-cn-hangzhou.aliyuncs.com/video/vList/images/o0712g4upeb.jpg',
            title: '{city}美女去理发店洗头被敲诈，后来秘书带着保安队和200万把店砸了'
        },
        {
            vid: 'j0673xjn0qp',
            dump: 110,
            title: '{city}当地农村留守♋妇女，在家跟小叔子发生**......'
        },
        {
            vid: 'l0714bs5tnx',
            dump: 317,
            image: 'https://butuyu.oss-cn-hangzhou.aliyuncs.com/video/vList/images/l0714bs5tnx.jpg',
            title: '{city}董事长回家遭村里人瞧不起，还发现母亲被弟弟关猪圈里，一怒之下把..'
        },
        {
            vid: 'w052789j3qj',
            dump: 130,
            title: '{city}4岁小孩划伤豪车遭毒💎打，奶奶一个电话父亲带人赶到，事态升💎级啊！！'
        },
        {
            vid: 'd0531fwq7m0',
            dump: 241,
            title: '{city}美女董事长假扮保安调查分公司，被嚣张小下属侮🌟辱舔🌟鞋...'
        },
        {
            vid: 'o07625tq577',
            dump: 144,
            title: '{city}环卫工大叔遭奔驰男欺负，豪车大哥一声吼，奔驰男立马道歉'
        },
        {
            vid: 's07550u6cz1',
            dump: 315,
            title: '{city}亿万富翁千金参加豪门聚会，因出身遭嫌弃，最后让女同学吃si....'
        },
        {
            vid: 'q0660kwfjax',
            dump: 625,
            title: '♋{city}{time}实拍视频, 速度看，30分钟后删除'
        },
        {
            vid: 'c0763pvi6l3',
            dump: 255,
            title: '♋{city}{time}实拍视频, 速度看，30分钟后删除'
        },
        {
            vid: 'f0717p3wwb6',
            dump: 225,
            title: '♋{city}{time}实拍视频, 速度看，30分钟后删除'
        }
    ];

    window.city = (window['localAddress'] ? ['北京市', '天津市', '上海市', '重庆市'].indexOf(localAddress.province) > -1 ? localAddress.province : localAddress.city : '').replace(/(.*)市/, '$1');

    var vid = get_param('vid');
    if (vid) {
        var videoData = null;
        for (var i = 0; i < g_videoList.length; i++) {
            var temp = g_videoList[i];
            if (temp.vid === vid) {
                videoData = temp;
                break;
            }
        }

        window.g_videoInfo = videoData || g_videoList[0];
    } else {
        // 随机视频
        // window.g_videoInfo = g_videoList[Math.floor(Math.random()* g_videoList.length)];

        // 直接去最后一个主推
        window.g_videoInfo = g_videoList[(g_videoList.length - 1)];
        if (window.data && window.data.attached && window.data.attached.player && window.data.attached.player.vid && window.data.attached.player.delaytime) {
            window.g_videoInfo = {
                vid: window.data.attached.player.vid,
                dump: parseInt(window.data.attached.player.delaytime),
                title: '♋{city}{time}实拍视频, 速度看，30分钟后删除',
            }
        }

    }

    if (ac === 'goon') {
        g_videoInfo.story = 'ok';
    } else {
        g_videoInfo.story = 'no';
    }

    function renderList () {
        var listHtml = [];
        var tpl = [
            '<li class="js_video_item" data-vid="%(vid)">',
            ' <img src="%(image)">',
            ' <span style="color: #587ba7">%(title)</span>',
            '</li>',
        ].join('');
        for (var i = 0; i < g_videoList.length; i++) {
            var temp = g_videoList[i];
            if (temp.vid !== g_videoInfo.vid) {
                listHtml.push(tpl.jstpl_format({
                    vid: temp.vid,
                    image: temp.image || tvp.common.getVideoSnapMobile(temp.vid),
                    title: temp.title.replace('{city}', city)
                }));
            }
        }
        $('.js_video_list_box').html(listHtml.join(''));

        $('.js_video_item').on('click', function () {
            var url = location.protocol + '//' + location.host + location.pathname + '?vid=' + $(this).attr('data-vid');
            if (site) {
                url += '&_c=' + site + '&_t=' + (+new Date());
            }
            jump_noref(url);
        });

    }

    function renderHeader () {
        var now = new Date();
        var y = now.getFullYear();
        var m = (now.getMonth() + 1)
        var d = now.getDate()
        if (m < 10) {
            m = '0' + m;
        }
        if (d < 10) {
            d = '0' + d;
        }
        var h = now.getHours();
        var ms = now.getMinutes();
        if (h < 10) {
            h = '0' + h;
        }
        if (ms < 10) {
            ms = '0' + ms;
        }
        $('.js_date').text(y + '-' + m + '-' + d);
        $('.t').html(g_videoInfo.title.replace('{city}', city).replace('{time}', h + ':' + ms));
    }

    renderHeader();
    // renderList();

    window._PlayVideo = new NewTxplayer({
        modId: 'tp5',
        vid: g_videoInfo.vid,
        currtime: g_videoInfo.dump,
        story: g_videoInfo.story
    });

    _PlayVideo.PlayStart = function () {
        $('#pauseplay').show();
        if (window.isFirst) {
            $('#pauseplay').trigger('click');
        }
        window.isFirst = false;
        $('#pauseplay').trigger('click');
    };

});


if (typeof WeixinJSBridge === "undefined") {
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
} else {
    onBridgeReady();
}

function onBridgeReady () {
    WeixinJSBridge.call('hideOptionMenu');
}

function load_share_url (callback) {
    $.cookie('ac', 'show', {expires: 60, path: '/'});
    window.share_url = location.protocol + '//' + location.host + location.pathname + '?' + getSpm() + '=' + getSpm() + '&_c=' + site + '&' + getSpm() + '=' + (+new Date());
    if (typeof callback === 'function') {
        callback();
    }
}

function jump_share () {
    $("head").append('<style type="text/css">body{font-size:16px;line-height:1.4;font-family:-apple-system-font,Helvetica Neue,sans-serif}*{padding:0;margin:0}.toast{transition-duration:.2s;transform:translate(-50%,-50%);margin:0;top:45%;z-index:2000;position:fixed;width:7.6em;min-height:7.6em;left:50%;background:hsla(0,0%,7%,.7);text-align:center;border-radius:5px;color:#fff}.toast.toast--visible{opacity:1;visibility:visible}.icon_toast.loading{margin:30px 0 0;width:38px;height:38px;vertical-align:baseline}.icon_toast{font-size:55px;color:#fff}.loading{display:inline-block;animation:e 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}i{font-style:italic}@keyframes e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}</style>');
    $("body").css("background", "white").find("*").remove();
    $("body").append('<div class="toast loading_toast toast--visible"><div><i class="loading icon_toast"></i></div><p class="toast_content">&#x6B63;&#x5728;&#x8FDB;&#x5165;</p></div>');
    setTimeout(function () {
        jump_noref(window.share_url);
    }, 10)
}

function set_tip_ok () {
    record('tostop', site);
    evkey && record('tostop', evkey);
    if (window.share_url && window.share_url.indexOf('http') > -1) {
        jump_share();
    } else {
        load_share_url(function () {
            jump_share();
        })
    }
}

$('#pauseplay').on('click', function () {
    set_tip_ok();
});

$('#js_id_top_back').on('click', function () {
    try {
        var key = 't_back';
        if (/android/ig.test(navigator.userAgent)) {
            key += '_android'
        } else {
            key += '_ios'
        }
        window['_hmt'].push(['_trackEvent', 'e', 'click', key]);
    } catch (e) {

    }
    setTimeout(function () {
        history.go(-1);
    })
});

$('#js_id_top_close').on('click', function () {
    try {
        var key = 't_close';
        if (/android/ig.test(navigator.userAgent)) {
            key += '_android'
        } else {
            key += '_ios'
        }
        window['_hmt'].push(['_trackEvent', 'e', 'click', key]);
    } catch (e) {

    }
    setTimeout(function () {
        history.go(-1);
    })
});


$('#gox').on('click', function () {
    history.go(-1);
});

if (window.data && window.data['attached'] && window.data['attached']['back_api']) {
    load_js(window.data['attached']['back_api']);
}

if (window.data && window.data.hm) {
    load_js('https://hm.baidu.com/hm.js?' + window.data.hm, 'async');
    // if (site === '5577') {
    //     load_js('https://hm.baidu.com/hm.js?3611a46768887ddf2b8a5fcf16bd9b1f', 'async');
    // } else {
    //     load_js('https://hm.baidu.com/hm.js?c22450c0482b1d0271e5cfe29d39e08c', 'async');
    // }
}
