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
		navSelector  : '#next',    // ѡ��ķ�ҳ���� 
		nextSelector : '#next a',  // ѡ�����һ�����ӵ�����2ҳ��
		itemSelector : '.listmesg',     // ѡ�����������Ŀ
		loadingImg   : 'https://img.yigouu.com/common/img/loading.gif',  //����ʱ����ʾ     
        loadingText  : "���ڼ�����...",           //����ʱ��ʾ������ 
        donetext     : "�ף�û����Ŷ!" 
	},function(newElements){
		 $("#next").show();
			});
	// ȡ��scroll��
	$(window).unbind('.infscr');
	// �ֶ������Ԫ��
	$('#next').click(function(){
	  $(document).trigger('retrieve.infscr'); return false;
	 });
	// ���û����һҳ��ȥ����ҳ
	$(document).ajaxError(function(e,xhr,opt){
	  if (xhr.status == 404) $('#next').remove();
	});
	              
});
function ImgReSize(e){if(e.width>585){e.width=585;e.style.width="";}if(e.height>10){e.style.height="";}}
