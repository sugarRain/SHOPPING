$(function(){
	//导航菜单
	$('#nav li').hover(function(){
		$(this).children('.jnNav').show();
	}, function(){
		$(this).children('.jnNav').hide();
	});

	//轮播图
	$('#jnImageroll .tab-menu a').on('mouseover', function(){
		$(this).addClass('chos').siblings().removeClass('chos');
		var index = $(this).index();
		$('#JS_imgWrap a').eq(index).fadeIn().siblings().fadeOut();
	});

	//hot
	$('.promoted').append('<s class="hot"></s>');

	//品牌活动
	$('#jnBrandList li').append('<span style="position:absolute;top:0;left:5px;width:183px;height:164px;" class="imageMask"></span>');

	//tooltip

	tooltip('.tooltip');


	tooltip('#jnCatalog a');

















});