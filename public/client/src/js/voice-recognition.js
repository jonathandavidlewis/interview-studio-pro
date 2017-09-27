$(document).ready(function() {

  window.speechApp = {};

  navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(function(stream) {
    /* use the stream */
  }).catch(function(err) {
    /* handle the error */
  });


  if (!('webkitSpeechRecognition' in window)) {

  } else {
    var speech = new webkitSpeechRecognition();
    speech.continuous = true;
    speech.interimResults = true;
    // speech.interimResults = false;
    // speech.maxAlternatives = 1;
    var final_transcript = '';
    speech.onstart = function() {
      console.log('Speech speech service has started');
    };
    speech.onresult = function(event) {
      console.log(event);
      var interim_transcript = '';

      console.log('final transcript is: ', final_transcript);

      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
          setTimeout(function() {

          }, 0);
        } else {
          interim_transcript += event.results[i][0].transcript;
          $('.interim-result').text(interim_transcript);

        }
      }

    };
  }
  speech.onerror = function(event) {
    console.log('Speech speech Had an error', JSON.stringify(event), event.error, event.error.message);
  };
  speech.onend = function() {
    console.log('Speech speech service disconnected');
    $('.interim-result').text(final_transcript);
  };



  speechApp.startButton = function(event) {
    $('.interim-result').text('');
    $('.final-result').text(final_transcript);
    final_transcript = '';
    speech.lang = 'en-US';
    speech.start();

  };


  speechApp.stopButton = function(event) {
    speech.stop();
    console.log(final_transcript);

  };

  speechApp.interim_span = document.getElementsByClassName('interim-result')[0];
  speechApp.final_span = document.getElementsByClassName('final-result')[0];

});
