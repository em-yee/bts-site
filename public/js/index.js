// import albumData from '../../data/data.json';

$(document).ready(function () {
  $('#2cool4skool').click(() => {
    $('body').css('overflow', 'hidden');
    $('.album-modal').css('display', 'flex').hide().fadeIn();
  });

  $('.overlay').click(() => {
    $('body').css('overflow', 'auto');
    $('.album-modal').fadeOut();
  });

  // for (let i = 0; i < albumData.albums.length; i++) {
  //   $(`#${albumData.albums.shortname}`).click(function() {
  //     $('body').css('overflow', 'hidden');
  //     $('.album-modal').css('display', 'flex').hide().fadeIn();
  //   });
  // }
});
