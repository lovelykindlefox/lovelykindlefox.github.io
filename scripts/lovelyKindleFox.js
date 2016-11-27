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
	// $("#resumeArea").removeClass('sectionLarge');
	// $("#resumeArea").addClass('sectionBig');

	$("#job03").hide();
	$("#job04").hide();
	$("#job05").hide();

	$("#btnResumeClose").hide();
	$("#btnResumeOpen").show();

	$("#resumeArea").css("height", "900px");
	$("#resumeArea").css("background-size", "100% 900px");

	$("#employmentArea").css("height", "480px");
	$("#employmentArea").css("background-size", "100% 480px");
}

function resumeOpen() {
	// $("#resumeArea").addClass('sectionLarge');
	// $("#resumeArea").removeClass('sectionBig');

	$("#job03").show();
	$("#job04").show();
	$("#job05").show();

	$("#btnResumeClose").show();
	$("#btnResumeOpen").hide();


	$("#resumeArea").css("height", "1600px");
	$("#resumeArea").css("background-size", "100% 1600px");

	$("#employmentArea").css("height", "1200px");
	$("#employmentArea").css("background-size", "100% 1200px");

}

function showPortfolioContent(k) {
	$(".allCoverBg").show();
	$(".portfoloioContentLayer").show();

	$("#contentTitleText0"+k).show();

	if(k==1){
		showAppsContent();
	}
	else
	{

	}

}

function showAppsContent() {
	$(".appsContent").show();		
}

function hideAllContent() {
	$(".portfolioPicBox").hide();
	$(".portfolioPicMini").hide();
	
}

function closePortfolioContent() {
	$(".allCoverBg").hide();
	$(".portfoloioContentLayer").hide();

	$(".contentTitleText").hide();
	hideAllContent();
}

// UI Event Effect 



