<?php 
date_default_timezone_set('PRC');
set_time_limit(30);
$recordFileName = 'r.txt';
$errorFileName = 'error.txt';
$res = post('res');

if (!file_exists($recordFileName)) {
    file_put_contents($recordFileName, '{"friend":{"0":0},"timeline":{"0":0}}');
}

$json = file_get_contents($recordFileName);
if($json != '')
{
	$arr = json_decode($json,true);
}else{
	file_put_contents($errorFileName,"1\n",FILE_APPEND);
	exit();
}
if(is_array($arr))
{
	$res = $res != '' ? $res : 'other';
	$arr[$res][0] = isset($arr[$res][0]) ? $arr[$res][0] : 0;
	$arr[$res][0] ++;
	//////////////////////////////
	$time = strtotime(date('Y-m-d H:00:00'));
	$arr[$res][$time] = isset($arr[$res][$time]) ? $arr[$res][$time] : 0;
	$arr[$res][$time] ++;
	//////////////////////////////
	$json = json_encode($arr);
	if(strlen($json) > 10)
	{
		file_put_contents($recordFileName,$json);
	}
}else{
	file_put_contents($errorFileName,"2\n",FILE_APPEND);
}

////////////////////////////////////////////////////////

function strict($str)
{
	if(get_magic_quotes_gpc())
	{
		$str = stripslashes($str);
	}
	$str = str_replace('&#','{vv}',$str);
	$str = str_replace('#','&#35;',$str);
	$str = str_replace('--','-&#45;',$str);
	$str = str_replace('/*','/&#42;',$str);
	$str = str_replace('*/','&#42;/',$str);
	$str = str_replace('<','&#60;',$str);
	$str = str_replace('>','&#62;',$str);
	$str = str_replace('(','&#40;',$str);
	$str = str_replace(')','&#41;',$str);
	$str = str_replace("'",'&#39;',$str);
	$str = str_replace('"','&#34;',$str);
	$str = str_replace('\\','&#92;',$str);
	$str = str_replace('%20','&nbsp;',$str);
	$str = str_replace(chr(13).chr(10),'<br />',$str);
	$str = str_replace('{vv}','&#',$str);
	return $str;
}
function post($val,$filter = 'strict')
{
	return $filter(isset($_POST[$val])?$_POST[$val]:'');
}

?>