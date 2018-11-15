<?php
require_once  __DIR__ . "/../wechat/jssdk.php";
$config = [
    'app_id' => 'wx6d93a878ad1d406c',
    'app_secret' => 'a4e0b3275e9875a530d67c75ef87d28c'
];
@$jssdk = new JSSDK($config['app_id'], $config['app_secret']);
@$signPackage = $jssdk->GetSignPackage($_REQUEST['url']);
$a=array('meibaimianmo8.com','chnbpa.com');
$random_keys=array_rand($a);
$host = $a[$random_keys];


$data = array(
    'ad' => array(
        'app_url' => '',
        'desc' => '',
        'timeline_url' => '',
        'img' => 'https://butuyu.oss-cn-hangzhou.aliyuncs.com/images/share/b.jpg?typeVideo=1',
        'title' => '👠{city}老街出大事啦,现场直播...',
    ),
    'attached' => array(
        'case' => 'wy-video',
        'signmode' => 'jsb',
        'back_api' => './status/bg_preloading_back.php',
        'ad_share' => array(
            'pyq' => array(
                0 => 0,
                1 => 1,
            ),
            'qun' => array(
                0 => 0,
                1 => 0,
                2 => 0,
                3 => 0,
            ),
        ),
        'timeline_ad' => true,
        'player' => array(
            'delaytime' => 538,
            'vid' => 'c0763pr60i5',
        ),
        'group_ad' => true,
    ),
    'cnzz' => '',
    'hm' => 'db5265010d3e084d4d96eb8c4713f967',
    'to_timeline' => array(
        'redirect' => '',
        'ad_weight' => '100',
        'ad_id' => '100',
        'ad' => false,
        'ok_msg' => '',
        'title' => '{city}老板回农村过中秋，发现弟弟给父亲吃剩菜，一怒之下！！！',
        'img' => 'http://puui.qpic.cn/qqvideo_ori/0/f0717p3wwb6_228_128/0',
        'landing' => '',
        'link' => 'http://wen.baike.com?a=shsls',
        'desc' => '',
    ),
    'to_group' => array(
        'redirect' => '',
        'link' => 'http://wen.baike.com?b=jslsl',
        'img' => 'http://puui.qpic.cn/qqvideo_ori/0/f0717p3wwb6_228_128/0',
        'title' => '{city}老板回农村过中秋，发现弟弟给父亲吃剩菜，一怒之下！！！',
        'desc' => '🔥8位好友看过',
        'back_url' => '',
    ),
    'sdk' => array(
        'debug' => false,
        'appId' => $signPackage['appId'],
        'timestamp' => $signPackage['timestamp'],
        'nonceStr' => $signPackage['nonceStr'],
        'signature' => $signPackage['signature'],
        'jsApiList' => array(
            0 => 'checkJsApi',
            1 => 'onMenuShareTimeline',
            2 => 'hideOptionMenu',
            3 => 'onMenuShareAppMessage',
            4 => 'hideMenuItems',
            5 => 'showMenuItems',
        ),
    ),
);


echo "window.data=" . json_encode($data);
