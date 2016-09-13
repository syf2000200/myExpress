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