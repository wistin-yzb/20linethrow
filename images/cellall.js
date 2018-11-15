/*    $(document).ready(function() {
       var asd = $(".header").clone();
       var prevTop = 0,
            currTop = 0;
        var h = $(".header").height() + 36;

        $(window).scroll(function(e) {

            currTop = $(document).scrollTop();
            if (currTop > h) {
               $(".wrap").append(asd);
               $(".header:not(:first)").attr("id", "headerbar");
                $(".header:not(:first)").find(".nav").attr("id", "header");
              $(".header:not(:first)").find(".logo").remove();
               $("#header").addClass("float");
               $("#header").slideDown(50);
                var flag = 0;
            } else {
                $("#headerbar").remove();
           }
        })
        var flag = 0;

    });*/
	
$(document).ready(function(){
	var $container=$('#listwrap');
$container.infinitescroll({
		navSelector  : '#next',    // 选择的分页导航 
		nextSelector : '#next a',  // 选择的下一个链接到（第2页）
		itemSelector : '.listmesg',     // 选择检索所有项目
		loadingImg   : 'https://img.yigouu.com/common/img/loading.gif',  //加载时候显示     
        loadingText  : "正在加载中...",           //加载时显示的文字 
        donetext     : "亲，没有了哦!" 
	},function(newElements){
		 $("#next").show();
			});
	// 取消scroll绑定
	$(window).unbind('.infscr');
	// 手动点击的元素
	$('#next').click(function(){
	  $(document).trigger('retrieve.infscr'); return false;
	 });
	// 如果没有下一页，去掉分页
	$(document).ajaxError(function(e,xhr,opt){
	  if (xhr.status == 404) $('#next').remove();
	});
	              
});
function ImgReSize(e){if(e.width>585){e.width=585;e.style.width="";}if(e.height>10){e.style.height="";}}
