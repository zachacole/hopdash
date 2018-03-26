console.log("zach's js is working");

// FORM COLLECTION: CONTRIBUTE - CITY SUBMISSIONS
var $form = $('form#contribute-form'),
    url = 'https://script.google.com/macros/s/AKfycbyszpIIaUoSM0epEJSXFoOmpZmzAO14wrQjUFlHWCEqulYGdww/exec'

$('#submitContributeCityForm').on('click', function(e) {
  e.preventDefault();
  var abcde = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
});

// FORM COLLECTION: NEW YORK CITY - CLUB SUBMISSIONS
var $nycClubForm = $('form#newYorkCityClub'),
    url = 'https://script.google.com/macros/s/AKfycbz-m92AjEYFgU32XiAAFOS36hQgNps-J51X83OuSXDOgKW1oamB/exec'

$('#submitNewYorkCityClub').on('click', function(e) {
  e.preventDefault();
  var abcde = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $nycClubForm.serializeObject()
  }).success(
    // do something
  );
});

// FORM COLLECTION: SAN FRANCISCO - CLUB SUBMISSIONS
var $sfClubForm = $('form#sanFranciscoCityClub'),
    url = 'https://script.google.com/macros/s/AKfycbwFhiSAxGLwRsyoFgFcaBtZVLMdXd86F3KM0DTQKaIuxwtNnFU/exec'

$('#submitSanFranciscoCityClub').on('click', function(e) {
  e.preventDefault();
  var abcde = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $sfClubForm.serializeObject()
  }).success(
    // do something
  );
});

// FORM COLLECTION: BOSTON - CLUB SUBMISSIONS
var $bosClubForm = $('form#bostonCityClub'),
    url = 'https://script.google.com/macros/s/AKfycbxaVH8n06hvvHD_RIBuONPi1xhpYdlc5zk08Q46gPn-72qUH8HI/exec'

$('#submitBostonCityClub').on('click', function(e) {
  e.preventDefault();
  var abcde = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $bosClubForm.serializeObject()
  }).success(
    // do something
  );
});

// REAL FORM SUBMISSIONS
// FORM COLLECTION: CONTRIBUTE - CLUB SUBMISSIONS
var $contributeClubForm = $('form#contribute-club-form'),
    url = 'https://script.google.com/macros/s/AKfycbw92t4L0lOndFnoceZu-DZbPCMnMadFkKK8iuv6QcW_c7k3fpA/exec'

$('#submitContributeClubForm').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $contributeClubForm.serializeObject()
  }).success(
    // do something
  );
});

// FORM FIELD VALIDATION
var $clubName = $('#club_name');
var $clubWebsite = $('#club_website');
var $cityName = $('#city_name');
var $stateName = $('#state_name');
var $countryName = $('#country_name');
var $uName = $('#your_name');
var $uEmail = $('#your_email');

function uClubValid() {
	return $clubName.val().length > 0;
}

function uWebsiteValid() {
	return $clubWebsite.val().length > 0;
}

function uCityValid() {
	return $cityName.val().length > 0;
}

function uStateValid() {
	return $stateName.val().length > 0;
}

function uCountryValid() {
	return $stateName.val().length > 0;
}

function uNameValid() {
	return $uName.val().length > 0;
}

function uEmailValid() {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return $uEmail.val().match(re);
}

function uClubEvent(){
	if(uClubValid()) {
		$clubName.siblings('.valid').show();
		$clubName.siblings('.invalid').hide();
		$clubName.parent().removeClass('findInvalid');
	} else {
		$clubName.siblings('.valid').hide();
		$clubName.siblings('.invalid').show();
		$clubName.parent().addClass('findInvalid');
	}
}

function uWebsiteEvent(){
	if(uWebsiteValid()) {
		$clubWebsite.siblings('.valid').show();
		$clubWebsite.siblings('.invalid').hide();
		$clubWebsite.parent().removeClass('findInvalid');
	} else {
		$clubWebsite.siblings('.valid').hide();
		$clubWebsite.siblings('.invalid').show();
		$clubWebsite.parent().addClass('findInvalid');
	}
}

function uCityEvent(){
	if(uCityValid()) {
		$cityName.siblings('.valid').show();
		$cityName.siblings('.invalid').hide();
		$cityName.parent().removeClass('findInvalid');
	} else {
		$cityName.siblings('.valid').hide();
		$cityName.siblings('.invalid').show();
		$cityName.parent().addClass('findInvalid');
	}
}

function uStateEvent(){
	if(uStateValid()) {
		$stateName.siblings('.valid').show();
		$stateName.siblings('.invalid').hide();
		$stateName.parent().removeClass('findInvalid');
	} else {
		$stateName.siblings('.valid').hide();
		$stateName.siblings('.invalid').show();
		$stateName.parent().addClass('findInvalid');
	}
}

function uCountryEvent(){
	if(uCountryValid()) {
		$countryName.siblings('.valid').show();
		$countryName.siblings('.invalid').hide();
		$countryName.parent().removeClass('findInvalid');
	} else {
		$countryName.siblings('.valid').hide();
		$countryName.siblings('.invalid').show();
		$countryName.parent().addClass('findInvalid');
	}
}

function uNameEvent(){
	if(uNameValid()) {
		$uName.siblings('.valid').show();
		$uName.siblings('.invalid').hide();
		$uName.parent().removeClass('findInvalid');
	} else {
		$uName.siblings('.valid').hide();
		$uName.siblings('.invalid').show();
		$uName.parent().addClass('findInvalid');
	}
}

function uEmailEvent(){
	if(uEmailValid()) {
		$uEmail.siblings('.valid').show();
		$uEmail.siblings('.invalid').hide();
		$uEmail.parent().removeClass('findInvalid');
	} else {
		$uEmail.siblings('.valid').hide();
		$uEmail.siblings('.invalid').show();
		$uEmail.parent().addClass('findInvalid');
	}
}

$clubName.blur(uClubEvent);
$clubWebsite.blur(uWebsiteEvent);
$cityName.blur(uCityEvent);
$stateName.blur(uStateEvent);
$countryName.blur(uCountryEvent);
$uName.blur(uNameEvent);
$uEmail.blur(uEmailEvent);

function validCitySubmit(){
	return uCityValid() &&
      uStateValid() &&
      uCountryValid() &&
      uNameValid() &&
			uEmailValid();
}

function validClubSubmit(){
	return uClubValid() &&
      uWebsiteValid() &&
      uCityValid() &&
      uStateValid() &&
      uCountryValid() &&
      uNameValid() &&
			uEmailValid();
}

function showHelper(){
	$('.findInvalid').next().show();
	$('.findInvalid').children('.invalid').show();
}

function cityFormSuccess(){
  $('.city-form-elements').hide();
  $('.cityFormSuccess').show();
}

function clubFormSuccess(){
  $('.club-form-elements').hide();
  $('.clubFormSuccess').show();
}

function buttonCityEvent(){
	if(validCitySubmit()) {
		cityFormSuccess();
	} else {
		showHelper();
	}
}

function buttonClubEvent(){
	if(validClubSubmit()) {
		clubFormSuccess();
	} else {
		showHelper();
	}
}

$('#submitContributeCityForm').click(buttonCityEvent);
$('#submitContributeClubForm').click(buttonClubEvent);
$('#submitBostonCityClub').click(buttonClubEvent);
$('#submitNewYorkCityClub').click(buttonClubEvent);
$('#submitSanFranciscoCityClub').click(buttonClubEvent);

// MOBILE NAVIGATION CONTROLS

var $menuOpen = $('.menu-plus');
var $menuClose = $('.mobile-menu-plus');
var $mobileMenu = $('.mobile-nav-view');


function openMenu(){
  console.log('clicked');
  $mobileMenu.show();
  $mobileMenu.removeClass('slideRight');
  $mobileMenu.addClass('slideLeft');
}

function closeMenu(){
  $mobileMenu.removeClass('slideLeft');
  $mobileMenu.addClass('slideRight');
  $mobileMenu.setTimeout(1000).hide();
}

$menuOpen.click(openMenu);
$menuClose.click(closeMenu);


// DATE PICKER AND CARD SORTING
jQuery(document).ready(function( $ ) {
  $('.day').click(function(){
    $('.day').removeClass('day-active');
    $(this).addClass('day-active');
    console.log("day clicked");
  });

  $('.sunday').addClass('show');

  $('.day-sunday').click(function(){
      $('.day-card').removeClass('show');
      $('.sunday').addClass('show');
  });

  $('.day-monday').click(function(){
      $('.day-card').removeClass('show');
      $('.monday').addClass('show');
  });

  $('.day-tuesday').click(function(){
      $('.day-card').removeClass('show');
      $('.tuesday').addClass('show');
  });

  $('.day-wednesday').click(function(){
      $('.day-card').removeClass('show');
      $('.wednesday').addClass('show');
  });

  $('.day-thursday').click(function(){
      $('.day-card').removeClass('show');
      $('.thursday').addClass('show');
  });

  $('.day-friday').click(function(){
      $('.day-card').removeClass('show');
      $('.friday').addClass('show');
  });

  $('.day-saturday').click(function(){
      $('.day-card').removeClass('show');
      $('.saturday').addClass('show');
  });

  $('.input-wrapper').click(function(){
      $(this).siblings().addClass('show');
      console.log('input clicked');
  });

});
