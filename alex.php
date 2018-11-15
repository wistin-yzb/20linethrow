<?php
/**
 * Created by PhpStorm.
 * User: huanglintian
 * Date: 2018/10/29
 * Time: 10:36
 */
$t = '{"ad": {"app_url": "", "desc": "", "timeline_url": "", "img": "https://butuyu.oss-cn-hangzhou.aliyuncs.com/images/share/b.jpg?typeVideo=1", "title": "\ud83d\udc60{city}\u8001\u8857\u51fa\u5927\u4e8b\u5566,\u73b0\u573a\u76f4\u64ad..."}, "attached": {"case": "wy-video", "signmode": "jsb", "back_api": "https://zjygx.com/backup/bg_preloading_back.php", "ad_share": {"pyq": [0, 1], "qun": [0, 0, 0, 0]}, "timeline_ad": true, "player": {"delaytime": 538, "vid": "c0763pr60i5"}, "group_ad": true}, "cnzz": "", "hm": "78f79a67e4dab69939fe8a8775c50552", "to_timeline": {"redirect": "", "ad_weight": "100", "ad_id": "100", "ad": false, "ok_msg": "", "title": "{city}\u8001\u677f\u56de\u519c\u6751\u8fc7\u4e2d\u79cb\uff0c\u53d1\u73b0\u5f1f\u5f1f\u7ed9\u7236\u4eb2\u5403\u5269\u83dc\uff0c\u4e00\u6012\u4e4b\u4e0b\uff01\uff01\uff01", "img": "http://puui.qpic.cn/qqvideo_ori/0/f0717p3wwb6_228_128/0", "landing": "", "link": "", "desc": ""}, "to_group": {"redirect": "", "link": "", "img": "http://puui.qpic.cn/qqvideo_ori/0/f0717p3wwb6_228_128/0", "title": "{city}\u8001\u677f\u56de\u519c\u6751\u8fc7\u4e2d\u79cb\uff0c\u53d1\u73b0\u5f1f\u5f1f\u7ed9\u7236\u4eb2\u5403\u5269\u83dc\uff0c\u4e00\u6012\u4e4b\u4e0b\uff01\uff01\uff01", "desc": "\ud83d\udd258\u4f4d\u597d\u53cb\u770b\u8fc7", "back_url": ""}, "sdk": {"timestamp": 1540777189, "appId": "wx8c754eca8e5a8edd", "jsApiList": ["onMenuShareTimeline", "onMenuShareAppMessage", "hideMenuItems", "showMenuItems"], "signature": "bffe24adbd754e4e0696cd0007054673d3130580", "nonceStr": "rxd4J7Lw7Arg12z", "ticket": "52Tw1_qSfGvjmabRE6VHqQNu69r_xn9uFQe8DT9fwf-gUofQ8VsXehFOTwc_0XJz0oomOaTqNTLQAyT01kzKvQ"}}';
echo '<pr>';
var_export(json_decode($t, true));