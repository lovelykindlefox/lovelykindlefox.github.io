// ********************************************************************
//
// Javascript for LovelyKindleFox Github Page
// Author: LovelyKindleFox
//
// ********************************************************************

// UI Framework Generators
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();


// UI Event
function resumeClose() {
	$("#resumeArea").removeClass('sectionLarge');
	$("#resumeArea").addClass('sectionBig');

	$("#job03").hide();
	$("#job04").hide();
	$("#job05").hide();

	$("#btnResumeClose").hide();
	$("#btnResumeOpen").show();
}

function resumeOpen() {
	$("#resumeArea").addClass('sectionLarge');
	$("#resumeArea").removeClass('sectionBig');

	$("#job03").show();
	$("#job04").show();
	$("#job05").show();

	$("#btnResumeClose").show();
	$("#btnResumeOpen").hide();
}



// UI Event Effect 



