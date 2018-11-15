<?php
date_default_timezone_set('PRC');
set_time_limit(30);
$recordFileName = 'r_view.txt';

if (!file_exists($recordFileName)) {
    file_put_contents($recordFileName, '{"baba":{"0":0}');
}


$f = fopen($recordFileName, 'r+');
if (flock($f, LOCK_EX)) {
    $json = stream_get_contents($f);
    $arr = json_decode(trim($json), true);// 为了防止意外还是把trim加上了
    $res = 'baba';
    $arr[$res][0] = isset($arr[$res][0]) ? $arr[$res][0] : 0;
    $arr[$res][0]++;
    //////////////////////////////
    $time = strtotime(date('Y-m-d H:00:00'));
    $arr[$res][$time] = isset($arr[$res][$time]) ? $arr[$res][$time] : 0;
    $arr[$res][$time]++;
    //////////////////////////////
    $json = json_encode($arr);
    if (strlen($json) > 10) {
        // truncate file
        ftruncate($f, 0);
        rewind($f); // 必须配合rewind否则写入的json字符串无法解析
        fwrite($f, $json);
        fflush($f); // flush output before releasing the lock
        flock($f, LOCK_UN);
    }
}

fclose($f);





//$json = file_get_contents($recordFileName);
//$arr = json_decode($json,true);
//$res = 'baba';
//$arr[$res][0] = isset($arr[$res][0]) ? $arr[$res][0] : 0;
//$arr[$res][0] ++;
////////////////////////////////
//$time = strtotime(date('Y-m-d H:00:00'));
//$arr[$res][$time] = isset($arr[$res][$time]) ? $arr[$res][$time] : 0;
//$arr[$res][$time] ++;
////////////////////////////////
//$json = json_encode($arr);
//if(strlen($json) > 10)
//{
//    file_put_contents($recordFileName,$json);
//}
