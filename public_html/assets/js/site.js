$( document ).ready(function() {

	$(".button").on({
		mouseover:function(){
			$(this).css({
				position:"absolute",
				left:(Math.random()*$('.container').width())+"px",
				top:(Math.random()*$('.container').height())+"px",
			});
		},
		mousedown:function(){
			$('.bf4-crash').show();
		}
	});

	function bf4Crash() {

	}

});