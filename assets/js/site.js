var sound = new Audio();
    sound.src = "/error.wav";

$( document ).ready(function() {

	var countMe = 0;
	var countMeSocial = 0;


	
    

	$(".button").on({
		mouseover:function(){
			if(countMe > 3) {
				$(this).delay(200).queue( function(next){ 
					$(this).css({
						position:"absolute",
						left:(Math.random()*$('.container').width())+"px",
						top:(Math.random()*$('.container').height())+"px",
					});	
					 $(this).dequeue();
				});

			} else {
				$(this).css({
					position:"absolute",
					left:(Math.random()*$('.container').width())+"px",
					top:(Math.random()*$('.container').height())+"px",
				});	
			}
			
			$('.clickit').css('visibility', 'visible');
			countMe++;
		},
		mousedown:function(){
			$('.bf4-crash').show();
			sound.play();
		}
	});

	$("body").on( "click", ".closeprogram", function() {
			
			sound.pause();
    		sound.currentTime = 0;
			sound.play();

			if(countMeSocial > 6) {
				$('.invisible').show();
				_gaq.push(['_trackEvent', 'Social Popup', 'Social', 'Social Popup']);
			
			}

			var newEl = $(this).parents('div').clone();

			newEl.css({
				left:(Math.random()*$('body').width())+"px",
				top:(Math.random()*$('body').height())+"px",
			});

			$('body').append(newEl);


			countMeSocial++;
	});

});