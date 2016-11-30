// ********************************************************************
//
// Javascript for LovelyKindleFox Github Page
// Author: LovelyKindleFox
//
// ********************************************************************

// UI Default

var hoverDefine;
$(document).ready(function(){
  
  hoverEffect(hoverDefine);

});

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
	else if(k==2)
	{
		showLandingPageContent();
	}
	else if(k==3)
	{
		showMarketingGameContent();

	}
	else if(k==4)
	{
		showLogoContent();
	}
	else if(k==5)
	{
		showEBookContent();
	}
	else if(k==6)
	{
		showWebVRContent();
	}
	else{
		console.log("no k send in");
	}

}

function showAppsContent() {
	$(".appsContent").show();	
	showAppsPic(1);
	$(".appsTextA").show();
}

function showLandingPageContent() {
	$(".landingPageContent").show();	
	showlandingPagePic(1);	
	$(".landingPageTextA").show();
}

function showMarketingGameContent() {
	$(".marketingGameContent").show();	
	showMarketingGamePic(1);
	$(".marketingGameTextA").show();	

}

function showLogoContent() {
	$(".logoContent").show();	
	showLogoPic(1);
	$(".logoTextA").show();
}


function showEBookContent() {
	$(".eBookContent").show();	
	showEBookPic(1);
	$(".eBookTextA").show();
}



function showWebVRContent() {
	$(".webVRContent").show();	
	showWebVRPic(1);
	$(".webVRTextA").show();
}


function hideAllContent() {
	$(".portfolioPicBox").hide();
	$(".portfolioPicMini").hide();	

	$(".portfolioSubText").hide();
	$(".portfolioLinkText").hide();
	$(".portfolioDescriptionText").hide();

	hoverDefine=null;
}

function closePortfolioContent() {
	$(".allCoverBg").hide();
	$(".portfoloioContentLayer").hide();

	$(".contentTitleText").hide();
	hideAllContent();
}


function showAppsPic(k) {
	if(k==1)
	{
		hoverDefine=1;
		hoverEffect(hoverDefine);
		$(".portfolioPicBig").hide();
		$(".appsContentA01").show();

		$(".portfolioPicMini").css("opacity","0.5");
		$("#appsMiniA01").css("opacity","1");

	}
	else if(k!==1)
	{
		hoverDefine=k;
		hoverEffect(hoverDefine);
		$(".portfolioPicBig").hide();
		$(".appsContentA0"+k).show();

		$(".portfolioPicMini").css("opacity","0.5");
		$(".miniIcon01").css("opacity","0.5");
		$("#appsMiniA0"+k).css("opacity","1");
	}
}


function showlandingPagePic(k) {
		if(k==1)
	{
		hoverDefine=1;
		hoverEffect(hoverDefine);
		$(".portfolioPicBig").hide();
		$(".landingPageContentA01").show();

		$(".portfolioPicMini").css("opacity","0.5");
		$("#landingPageMiniA01").css("opacity","1");

	}
	else if(k!==1)
	{
		hoverDefine=k;
		hoverEffect(hoverDefine);
		$(".portfolioPicBig").hide();
		$(".landingPageContentA0"+k).show();

		$(".portfolioPicMini").css("opacity","0.5");
		$(".miniIcon01").css("opacity","0.5");
		$("#landingPageMiniA0"+k).css("opacity","1");
	}
}


function showMarketingGamePic(k) {
	if(k==1)
	{
		hoverDefine=1;
		hoverEffect(hoverDefine);
		$(".portfolioPicBig").hide();
		$(".marketingGameContentA01").show();

		$(".portfolioPicMini").css("opacity","0.5");
		$("#marketingGameMiniA01").css("opacity","1");

	}
	else if(k!==1)
	{
		hoverDefine=k;
		hoverEffect(hoverDefine);
		$(".portfolioPicBig").hide();
		$(".marketingGameContentA0"+k).show();

		$(".portfolioPicMini").css("opacity","0.5");
		$(".miniIcon01").css("opacity","0.5");
		$("#marketingGameMiniA0"+k).css("opacity","1");
	}
}


function showLogoPic(k) {
	if(k==1)
	{
		hoverDefine=1;
		hoverEffect(hoverDefine);
		$(".portfolioPicBig").hide();
		$(".logoContentA01").show();

		$(".portfolioPicMini").css("opacity","0.5");
		$("#logoMiniA01").css("opacity","1");

	}
	else if(k!==1)
	{
		hoverDefine=k;
		hoverEffect(hoverDefine);
		$(".portfolioPicBig").hide();
		$(".logoContentA0"+k).show();

		$(".portfolioPicMini").css("opacity","0.5");
		$(".miniIcon01").css("opacity","0.5");
		$("#logoMiniA0"+k).css("opacity","1");
	}
}



function showEBookPic(k) {
	if(k==1)
	{
		hoverDefine=1;
		hoverEffect(hoverDefine);
		$(".portfolioPicBig").hide();
		$(".eBookContentA01").show();

		$(".portfolioPicMini").css("opacity","0.5");
		$("#eBookMiniA01").css("opacity","1");

	}
	else if(k!==1)
	{
		hoverDefine=k;
		hoverEffect(hoverDefine);
		$(".portfolioPicBig").hide();
		$(".eBookContentA0"+k).show();

		$(".portfolioPicMini").css("opacity","0.5");
		$(".miniIcon01").css("opacity","0.5");
		$("#eBookMiniA0"+k).css("opacity","1");
	}
}


function showWebVRPic(k) {
	if(k==1)
	{
		hoverDefine=1;
		hoverEffect(hoverDefine);
		$(".portfolioPicBig").hide();
		$(".webVRContentA01").show();

		$(".portfolioPicMini").css("opacity","0.5");
		$("#webVRMiniA01").css("opacity","1");

	}
	else if(k!==1)
	{
		hoverDefine=k;
		hoverEffect(hoverDefine);
		$(".portfolioPicBig").hide();
		$(".webVRContentA0"+k).show();

		$(".portfolioPicMini").css("opacity","0.5");
		$(".miniIcon01").css("opacity","0.5");
		$("#webVRMiniA0"+k).css("opacity","1");
	}
}
// UI Event Effect 

function hoverEffect(hoverDefine) {
	console.log("hover effect");

	

		console.log("hoverDefine="+hoverDefine);


		$(".portfolioPicMini").css("opacity", "0.5");


			$(".miniIcon01").hover(function() {	
					$(".portfolioPicMini").css("opacity", "0.5");
					$(".miniIcon01").css("opacity", "1");

				},function() {
					$(".portfolioPicMini").css("opacity", "0.5");
					$(".miniIcon0"+hoverDefine).css("opacity", "1");
					
			});		


			$(".miniIcon02").hover(function() {	
					$(".portfolioPicMini").css("opacity", "0.5");
					$(".miniIcon02").css("opacity", "1");

				},function() {
					$(".portfolioPicMini").css("opacity", "0.5");
					$(".miniIcon0"+hoverDefine).css("opacity", "1");
					
			});		


			$(".miniIcon03").hover(function() {	
					$(".portfolioPicMini").css("opacity", "0.5");
					$(".miniIcon03").css("opacity", "1");

				},function() {
					$(".portfolioPicMini").css("opacity", "0.5");
					$(".miniIcon0"+hoverDefine).css("opacity", "1");
					
			});		

			$(".miniIcon04").hover(function() {	
					$(".portfolioPicMini").css("opacity", "0.5");
					$(".miniIcon04").css("opacity", "1");

				},function() {
					$(".portfolioPicMini").css("opacity", "0.5");
					$(".miniIcon0"+hoverDefine).css("opacity", "1");
					
			});	


			$(".miniIcon05").hover(function() {	
					$(".portfolioPicMini").css("opacity", "0.5");
					$(".miniIcon05").css("opacity", "1");

				},function() {
					$(".portfolioPicMini").css("opacity", "0.5");
					$(".miniIcon0"+hoverDefine).css("opacity", "1");
					
			});	
	
}

