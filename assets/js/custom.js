var $ = jQuery.noConflict();
jQuery(document).ready(function($) {
  $(window).scroll(function(){
    if ($(this).scrollTop() > 70) {
       $('.mainHeader').addClass('pageScrolled');
    } else {
       $('.mainHeader').removeClass('pageScrolled');
    }
  });
  $('.mobileNav').on('click',function(){
    $('.mainHeader').addClass('active');
    $('html').addClass('scOff');
  });
  $('.closeNav').on('click',function(){
    $('.mainHeader').removeClass('active');
    $('html').removeClass('scOff');
  });
});

