/*初步设想：
	1.将小说内容以图片形式保存到img中；
	2.然后用命名规则对每张图片命名，比如第一页就命名1.jpg；
	3.然后改变ajax获取图片的路径，可以专门写一个生成路径的方法；
	4点击上一页或下一页时就调用相应的方法来来生成路径，再将路径用到ajax的方法中；
	5.此时就可以改变获取的图片内容了*/
$(function(){
	/*function addimg(){//纯粹利用jquery方法实现翻页
		var i=1;var str=null;
		$('.next').removeAttr("disabled");
		$('.last').removeAttr("disabled");
		$(".next").click(function(){
			$('.last').removeAttr("disabled");
			if(i<5){
				++i;
				$('.next').removeAttr("disabled");
				str='<img src="img/'+i+'.jpg">';
				$("#main").html();
				$("#main").html(str);				
			}else{
				$('.next').attr('disabled',"true");
			}		
		})
		$(".last").click(function(){			
			if(i>=2){
				i--;
				$('.next').removeAttr("disabled");
				str='<img src="img/'+i+'.jpg">';
				$("#main").html(str);	
			}else{
				$('.last').attr('disabled',"true");
			}
			$('.next').removeAttr("disabled");
		})
	}*/


	//function addajax(){//利用ajax技术实现翻页
		$(".next").click(function(){
			$("#main").load("data.html");
		})
	//}
})