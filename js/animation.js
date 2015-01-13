
$(document).ready(function() {
	
	// Optimalisation: Store the references outside the event handler:
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 667) {
            //if the window is greater than 440px wide then swap height with width..
            //Homepage animation
						$('#projectsBtn').hover(
							function(){ 
								$('#projectsBtn').css('width','66.666667%');
								$('#experimentsBtn').css('width','33.333333%');
							},
							function(){ 
								$('#projectsBtn').css('width','33.333333%');
								$('#experimentsBtn').css('width','66.666667%');
							}
						);

						$('#experimentsBtn').hover(
							function(){ 
								$('#experimentsBtn').css('width','66.666667%');
								$('#projectsBtn').css('width','33.333333%');
							},
							function(){ 
								$('#experimentsBtn').css('width','33.333333%');
								$('#projectsBtn').css('width','66.666667%');
							}
						);
        } else {
        	//Homepage animation
						$('#projectsBtn').hover(
							function(){ 
								$('#projectsBtn').css('height','66.666667%');
								$('#experimentsBtn').css('height','33.333333%');
							},
							function(){ 
								$('#projectsBtn').css('height','33.333333%');
								$('#experimentsBtn').css('height','66.666667%');
							}
						);

						$('#experimentsBtn').hover(
							function(){ 
								$('#experimentsBtn').css('height','66.666667%');
								$('#projectsBtn').css('height','33.333333%');
							},
							function(){ 
								$('#experimentsBtn').css('height','33.333333%');
								$('#projectsBtn').css('height','66.666667%');
							}
						);
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

	

});