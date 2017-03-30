$(function(){
	$("input").click(function(){
		$("#box").load("data.html");//数据显示在#box里面，所以是用#box加载load方法，此方法为局部方法
	})
})