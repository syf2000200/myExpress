//下拉菜单
function tab(btn,obj,iclass){
	$(btn).hover(function(){
		setTimeout(function(){
			$(obj).toggle(0);
		},200);

		$(btn).toggleClass(iclass);
		$(btn).find('s').toggleClass('arrowup')
	});
}

$(function(){
	tab('.aboutus','.dropdown','highlight');
})

//首页轮播banner
var swiper = new Swiper('.banner', {
	wrapperClass : 'bannerwrap',
	effect: 'fade',
    pagination: '.bannerpagination',
    paginationClickable: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    loop: true,
    setWrapperSize: true
});