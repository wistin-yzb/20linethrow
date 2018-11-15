<?php
date_default_timezone_set('PRC');
set_time_limit(30);
//require 'dump.php';

include('include.php');

$auto = get('auto');

$json = file_get_contents('r.txt');
if ($json != '') {
    $arr = json_decode($json, true);
} else {
    $arr = array();
}

if (!isset($arr['timeline']) || !isset($arr['friend'])) {
    exit('500');
}

// 读取访问数据
$json = file_get_contents('r_view.txt');
if ($json != '') {
    $array = (array)json_decode($json, true);
    $arr['baba'] = $array['baba'];
} else {
    $arr['baba'] = array();
}

if (!isset($arr['baba'])) {
    exit('500');
}

// 读取文件json格式数据
$timeline = $arr['timeline'];
$friend = $arr['friend'];
$baba = $arr['baba'];

// 获取总数
$sum1 = $timeline[0];
$sum2 = $friend[0];
$sum3 = $baba[0];

// 清理总数
unset($timeline[0]);
unset($friend[0]);
unset($baba[0]);


$max = strtotime(date('Y-m-d H:00:00'));

$min1 = current(array_keys($timeline));
$min2 = current(array_keys($friend));
$min3 = current(array_keys($baba));
$min = max($min1, $min2, $min3);

list($friend, $timeline, $baba) = array_map(function ($item) use ($min) {
    foreach ($item as $key => $value) {
        if ($key < $min) {
            unset($item[$key]);
        }
    }
    return $item;
}, array($friend, $timeline, $baba));

$long = 25;
if ($max > $min + $long * 60 * 60) {
    $min = $max - $long * 60 * 60;

    list($friend, $timeline, $baba) = array_map(function ($item) use ($min) {
        foreach ($item as $key => $value) {
            if ($key < $min) {
                unset($item[$key]);
            }
        }
        return $item;
    }, array($friend, $timeline, $baba));
}

$keys = array();
$all = array();
$len = ($max - $min) / (60 * 60);
for ($i = 0; $i <= $len; $i++) {
    $key = $min + $i * 60 * 60;
    $keys[$i] = $key;
    if (!isset($timeline[$key])) {
        $timeline[$key] = 0;
    }
    if (!isset($friend[$key])) {
        $friend[$key] = 0;
    }
    if (!isset($baba[$key])) {
        $baba[$key] = 0;
    }
    if ($baba[$key]) {
        $baba[$key] = sprintf('%.2f',(($friend[$key] + $timeline[$key])*100)/$baba[$key]);
        if ($baba[$key] >= 100) {
            $baba[$key] = 100;
        }
    }

    ksort($timeline);
    ksort($friend);
    ksort($baba);
    $all[$key] = $timeline[$key] + $friend[$key];
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>分享统计 - <?php echo date('H:i:s', time()); ?></title>
    <script type="text/javascript" src="http://www.wncwk.cn./common/js/ichart.1.2.min.js"></script>
    <style type="text/css">
        .canvas {
            padding: 5px;
            float: left;
        }

        .ichartjs_btn {
            padding: 2px 5px;
            line-height: 25px;
            color: #0b2946;
            cursor: pointer;
            text-align: center;
            font-size: 12px;
            border: 1px solid #98adc1;
            -webkit-box-shadow: 0 0 2px #375073;
            -moz-box-shadow: 0 0 2px #375073;
            box-shadow: 0 0 2px #375073;
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
            -khtml-border-radius: 5px;
            border-radius: 5px
        }

        .ichartjs_author {
            position: absolute;
            font-size: 12px;
            right: 20px;
            top: 0
        }

        .ichartjs_author a {
            color: #113659
        }

        .ichartjs_info {
            position: relative;
            margin: 10px;
            padding: 5px;
            color: #1b4267
        }

        .ichartjs_sm {
            margin: 10px 0;
            font-size: 13px;
            font-weight: 600
        }

        .ichartjs_details {
            padding: 0;
            text-indent: 2em;
            font-size: 12px;
            line-height: 20px
        }

        #ichartjs_code {
            display: none
        }

        #ichartjs_result {
            position: absolute;
            left: 20px;
            bottom: 20px;
            padding: 8px;
            color: #fefefe;
            font-size: 20px;
            font-weight: 600;
            background-color: #6d869f;
            cursor: pointer;
            text-align: center;
            border: 1px solid #6a869d;
            -webkit-box-shadow: 0 0 2px #375073;
            -moz-box-shadow: 0 0 2px #375073;
            box-shadow: 0 0 2px #375073;
            -moz-border-radius: 10px;
            -webkit-border-radius: 10px;
            -khtml-border-radius: 10px;
            border-radius: 10px
        }
    </style>
</head>
<body>
<div style="padding:15px 0;">
    访问：<?php echo $sum3; ?><br/>
    朋友圈：<?php echo $sum1; ?><br/>
    微信群：<?php echo $sum2; ?>
</div>
<div class="canvas" id='views'></div>
<div class="canvas" id='canvasTimeline'></div>
<div class="canvas" id='canvasFriend'></div>
<div class="canvas" id='canvasAll'></div>

<script language="javascript">
    $(function () {
        var data4 = [
            {
                name: '分享率',
                value: [<?php $k = 0;?><?php foreach($baba as $key => $value):?><?php echo $value;?><?php if($k++ < count($baba) - 1):?>,<?php endif;?><?php endforeach;?>],
                color: '#6cbf3d',
                line_width: 3
            }
        ];
        var chart4 = new iChart.LineBasic2D({
            render: 'views',
            data: data4,
            title: '分享率统计(单位%)',
            width: 900,
            height: 450,
            coordinate: {height: '90%', background_color: '#f6f9fa'},
            sub_option: {
                hollow_inside: false,
                point_size: 16
            },
            labels: [<?php $k = 0;?><?php foreach($keys as $key => $value):?><?php echo date('H', $value);?><?php if($k++ < count($keys) - 1):?>,<?php endif;?><?php endforeach;?>]
        });
        //利用自定义组件构造左侧说明文本
        chart4.plugin(new iChart.Custom({
            drawFn:function(){
                //计算位置
                var coo = chart4.getCoordinate(),
                    x = coo.get('originx'),
                    y = coo.get('originy'),
                    w = coo.width,
                    h = coo.height;
                //在左上侧的位置，渲染一个单位的文字
                chart4.target.textAlign('start')
                    .textBaseline('bottom')
                    .textFont('600 11px 微软雅黑')
                    .fillText('比例(%)',x-40,y-12,false,'red')
                    .textBaseline('top')
                    .fillText('(时间点)',x+w+12,y+h+10,false,'red');

            }
        }));
        chart4.draw();

        ////////////////////////////////////////////////////////////////////////////////////
        var data1 = [
            {
                name: '朋友圈',
                value: [<?php $k = 0;?><?php foreach($timeline as $key => $value):?><?php echo $value;?><?php if($k++ < count($timeline) - 1):?>,<?php endif;?><?php endforeach;?>],
                color: '#6cbf3d',
                line_width: 3
            }
        ];
        var chart1 = new iChart.LineBasic2D({
            render: 'canvasTimeline',
            data: data1,
            title: '朋友圈统计',
            width: 900,
            height: 450,
            coordinate: {height: '90%', background_color: '#f6f9fa'},
            sub_option: {
                hollow_inside: false,
                point_size: 16
            },
            labels: [<?php $k = 0;?><?php foreach($keys as $key => $value):?><?php echo date('H', $value);?><?php if($k++ < count($keys) - 1):?>,<?php endif;?><?php endforeach;?>]
        });
        chart1.draw();
        //////////////////////////////////////////////////////////////////////////////////////////////
        var data2 = [
            {
                name: '微信群',
                value: [<?php $k = 0;?><?php foreach($friend as $key => $value):?><?php echo $value;?><?php if($k++ < count($friend) - 1):?>,<?php endif;?><?php endforeach;?>],
                color: '#6cbf3d',
                line_width: 3
            }
        ];
        var chart2 = new iChart.LineBasic2D({
            render: 'canvasFriend',
            data: data2,
            title: '微信群统计',
            width: 900,
            height: 450,
            coordinate: {height: '90%', background_color: '#f6f9fa'},
            sub_option: {
                hollow_inside: false,
                point_size: 16
            },
            labels: [<?php $k = 0;?><?php foreach($keys as $key => $value):?><?php echo date('H', $value);?><?php if($k++ < count($keys) - 1):?>,<?php endif;?><?php endforeach;?>]
        });
        chart2.draw();
        //////////////////////////////////////////////////////////////////////////////////////////////
        var data3 = [
            {
                name: '整体',
                value: [<?php $k = 0;?><?php foreach($all as $key => $value):?><?php echo $value;?><?php if($k++ < count($all) - 1):?>,<?php endif;?><?php endforeach;?>],
                color: '#6cbf3d',
                line_width: 3
            }
        ];
        var chart3 = new iChart.LineBasic2D({
            render: 'canvasAll',
            data: data3,
            title: '整体统计',
            width: 900,
            height: 450,
            coordinate: {height: '90%', background_color: '#f6f9fa'},
            sub_option: {
                hollow_inside: false,
                point_size: 16
            },
            labels: [<?php $k = 0;?><?php foreach($keys as $key => $value):?><?php echo date('H', $value);?><?php if($k++ < count($keys) - 1):?>,<?php endif;?><?php endforeach;?>]
        });
        chart3.draw();
    });

    <?php if($auto == 1):?>
    setTimeout("document.location.href = './r2.php?auto=1'", 10 * 1000);
    <?php elseif($auto == 3):?>
    setTimeout("document.location.href = ''", 3 * 1000);
    <?php endif;?>
</script>
</body>
</html>
