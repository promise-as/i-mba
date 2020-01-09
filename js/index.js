$(function(){
  theaMsForm($('.sign-in'));

  $('.popup-btn').click(function(){
    $('#popup').show();
  });
  $('#popup .close').click(function(){
    $('#popup').hide();
  });
});
