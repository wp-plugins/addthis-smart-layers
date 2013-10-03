(function($){
$(document).ready(function() {
	
	//target
	$('#wpbody').addClass('smart-layer-modal-target');
	
	var atModalOkHandler = function() {
		document.location = 'http://www.google.com';
	};
	
	var atModalCancelHandler = function() {
		$('.smart-layer-dialog').hide();
		$('.smart-layer-modal-target').removeClass('at-overlay');
	}
	
	if(typeof hasSet !== 'undefined' && hasSet) {
		
		$('.smart-layer-trigger').click(function() {

			$('.smart-layer-modal-target').addClass('at-overlay');


			var dialog = $('.smart-layer-dialog');
			dialog.remove();
			$('.smart-layer-modal-target').append(dialog);

			var dialog = $('.smart-layer-dialog');
			dialog.remove();
			$('body').append(dialog);
			
			$('.smart-layer-dialog p').html('');
			
			$('.smart-layer-dialog').show();
			$('#smart-layer-dialog-cancel').click(atModalCancelHandler);
			//$('#at-welcome-dialog-ok').click(atModalOkHandler);
		});
	

	}
	
	//trigger
	$('.smart-layer-trigger').click(function() {
		
		
		$('.smart-layer-modal-target').addClass('at-overlay');
		
		
		var dialog = $('.smart-layer-dialog');
		dialog.remove();
		$('.smart-layer-modal-target').append(dialog);
		
		var dialog = $('.smart-layer-dialog');
		dialog.remove();
		$('body').append(dialog);
		$('.smart-layer-dialog').show();
		$('#smart-layer-dialog-cancel').click(atModalCancelHandler);
		//$('#at-welcome-dialog-ok').click(atModalOkHandler);
	});
	
	var s = $("#custom_api");
    var pos = s.position(); 
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        
        if (windowpos >= pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick"); 
        }
    });
    
    $('#profile_id a').mouseover(function(){
		me = $(this);
		parent = $(me).parent();

		dataContent = $(parent).attr('data-content');
		innerContent = "<div class='popover fade right in' style='display: block;'><div class='arrow'></div><h3 class='popover-title'>";
		innerContent = innerContent + "</h3><div class='popover-content'>";
		innerContent = innerContent + dataContent;
		innerContent = innerContent + "</div></div>";
		$(parent).append(innerContent);

		popoverHeight = $(parent).find('.popover').height();
		left = $(me).position().left + 15;
		top = $(me).position().top - (popoverHeight/2) + 8;

		$(parent).find('.popover').css({
			'left': left+'px',
			'top': '125px'
		});
	});
	$('#profile_id a').mouseout(function(){ 
		$('.popover').remove();
	});
	
	$('#submit').click(function(){
		var error = 0;
		try {
	    	var code = jQuery.parseJSON($('#wbCode').val());
	    }
  	    catch (e) {
			$('#code-error').show();
			error = 1;
	    }
      	  if (error == 0) {
  			$('#code-error').hide();
  		    return true;
  		} else {
  			$('#code-error').show();
  		    return false;
  		}
	});
	
});

})(jQuery);
