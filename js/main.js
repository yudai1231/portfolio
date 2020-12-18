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

	// translate初め
	$(window).on('scroll', function() {
		// idがq-11の要素の画面最上部からの距離を取得
		let sec_b = $('.section-b').offset().top;
	
		// 画面の高さ
		let wh = $(window).height();
	
		// $(window).scrollTop()は現在のスクロール位置
		if (sec_b <= $(window).scrollTop() + wh) {
		  $('.section-b').removeClass('hide');
		} else {
		  $('.section-b').addClass('hide');
		}
		
	})

	$(window).on('scroll', function() {
		// idがq-11の要素の画面最上部からの距離を取得
		let sec_d = $('.section-d').offset().top;
	
		// 画面の高さ
		let wh = $(window).height();
	
		// $(window).scrollTop()は現在のスクロール位置
		if (sec_d <= $(window).scrollTop() + wh) {
		  $('.section-d').removeClass('hide');
		} else {
		  $('.section-d').addClass('hide');
		}
		
	})

	$(window).on('scroll', function() {
		// idがq-11の要素の画面最上部からの距離を取得
		let sec_f = $('.section-f').offset().top;
	
		// 画面の高さ
		let wh = $(window).height();
	
		// $(window).scrollTop()は現在のスクロール位置
		if (sec_f <= $(window).scrollTop() + wh) {
		  $('.section-f').removeClass('hide');
		} else {
		  $('.section-f').addClass('hide');
		}
		
	})
	// translate終わり

	// ハンバーガーメニュー初め
	$(function () {
		$("#nav-open").on("click", function () {
		  if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("#nav-content").removeClass("open").fadeOut(100);
		  } else {
			$(this).addClass("active");
			$("#nav-content").fadeIn(100).addClass("open");
		  }
		});
	});
	// ハンバーガーメニュー終わり


});