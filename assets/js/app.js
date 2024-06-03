$(document).ready(function () {
  if($(window).innerWidth() < 760) {
     $('#assortment-video').attr('poster', '../../public/bg/video-1-mob.png');
     $('#straightaway-video').attr('poster', '../../public/bg/video-2-mob.png');
     $('#options-video').attr('poster', '../../public/bg/video-3-mob.png');
  }

  $('.modal-menu__close').on('click', function() {
  	$('.modal-menu').removeClass('visible');
  	$('.open-menu').removeClass('active');
  	return false;
  })

  $('.open-menu').on('click', function() {
  	$('.modal-menu').toggleClass('visible');
  	$('.open-menu').toggleClass('active');
  	return false;
  })

  $(document).mouseup( function(e){ // событие клика по веб-документу
	let modal_catalog = $('.modal-catalog .content'); // тут указываем ID элемента
	if ( !modal_catalog.is(e.target) // если клик был не по нашему блоку
	    && modal_catalog.has(e.target).length === 0 ) { // и не по его дочерним элементам
		$('.modal-catalog').removeClass('visible');
	}
  });

  $('.modal-menu__close').on('click', function() {
  	$('.modal-catalog').removeClass('visible');
  	return false;
  })

  $('.open-catalog').on('click', function() {
  	$('.modal-catalog').toggleClass('visible');
  	return false;
  })

  AOS.init();
})