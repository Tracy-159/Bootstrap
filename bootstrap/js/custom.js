 $(document).ready(function(){
 	$("#demo-navbar .dropdown-menu a").click(function(){
 		var href=$(this).attr("href");
 		var target_top = $("#posi").offset().top;
 		$("html,body").animate({scrollTop: target_top}, 1000);  //带滑动效果的跳转
 		setTimeout(function(){
 			$("#tab-list a[href='"+ href +"']").tab("show");
 		}, 200);
 	});
 });

function clickNextPage(){  
        window.location.reload("activity_detail.html");  
        document.getElementById('nextPage').addEventListener("click", clickNextPage);  
}

 $(document).ready(function(){
 	$(".col-center-block a").click(function(){
 		var href=$(this).attr("href");
 		setTimeout(function(){
 			$("section[herf='"+ id +"']").tab("show");
 		}, 200);
 	});
 });

