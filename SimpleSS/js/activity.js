(function(app){
	var currentSlide=0;
	$(document).ready(function(){
		$(".prev_btn").bind("click",previousClk);
		$(".next_btn").bind("click",nextClk);
		checkPrevNext();
	})
	function previousClk(){
		currentSlide--;
		$(".column:visible").addClass("hide");
		$(".column").eq(currentSlide).removeClass("hide");
		checkPrevNext();
	}
	function nextClk(){
		currentSlide++;
		$(".column:visible").addClass("hide");
		$(".column").eq(currentSlide).removeClass("hide");
		checkPrevNext();
	}
	function checkPrevNext(){
		var visibleIndex = $(".column:visible").index();

		if(visibleIndex == 0){
			$(".prev_btn").attr("disabled","disabled");
		}else{
			$(".prev_btn").removeAttr("disabled")
		}

		if(visibleIndex == 2){
			$(".next_btn").attr("disabled","disabled");
		}else{
			$(".next_btn").removeAttr("disabled");
		}

	}
})
(player = player || {})
var player;