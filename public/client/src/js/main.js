$(document).ready(function(){

  var openNav = function(e) {
    console.log(e.target);
    document.querySelector(".sidenav").style.width = "250px";
  };

   var closeNav = function(e) {
    document.querySelector(".sidenav").style.width = "30px";
  };

  $('.sidenav').on('mouseover', openNav);
  $('.sidenav').on('mouseout', closeNav);


  // Record button

  $('body').on('click', '.record', function() {
    if ($('.btn-record').hasClass('recording')) {
      $('.btn-record').removeClass('recording btn-danger');
      $('.btn-record').addClass('btn-success');
      $('.record-button-text').text('Start recording');
      window.speechApp.stopButton();
    } else {
      $('.btn-record').removeClass('btn-success');
      $('.btn-record').addClass('btn-danger recording');
      $('.record-button-text').text('Stop recording');
      window.speechApp.startButton();
    }
  });

  var loadNextQuestion = function() {

  }





});
