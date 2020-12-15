$(function() {
	setTimeout(function(){
		$('.title').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！

	// ページトップに戻る　初め
	var pagetop = $('#page_top');   
	pagetop.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});
	
	pagetop.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500); //0.5秒かけてトップへ移動
		return false;
	});
	// ページトップに戻る　終わり



});