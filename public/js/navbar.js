$(document).ready(() => {
  $('#hamburger-icon').click(() => {
    $('.menu-container').fadeToggle();
    $('.dropdown-wrapper').toggleClass('show-menu');
    $('body').css('overflow', 'hidden');
  });

  $('.menu-container').click(() => {
    $('.dropdown-wrapper').removeClass('show-menu');
    $('.menu-container').fadeOut();
    $('body').css('overflow', 'auto');
  });

  $('.overlay').click(() => {
    $('body').css('overflow', 'auto');
    $('.album-modal').fadeOut();
  });
});
