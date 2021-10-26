$(document).ready(function () {
  let data = $('[data-attr-value]').data('attr-value');
  let albumData = data.albums;

  if (albumData) {
    for (let i = 0; i < albumData.length; i++) {
      $(`#album-${i}`).click(function () {
        console.log(albumData[i].shortname);
        $('body').css('overflow', 'hidden');
        $(`#modal-${i}`).css('display', 'flex').hide().fadeIn();
      });
    }

  }
  $('.overlay').click(() => {
    $('body').css('overflow', 'auto');
    $('.album-modal').fadeOut();
  });

  // Dropdown Menu
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
});
