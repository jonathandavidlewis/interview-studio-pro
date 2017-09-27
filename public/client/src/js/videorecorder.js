

video = document.getElementById("live")


navigator.mediaDevices.getUserMedia({
  audio: true,
  video: { width: 640, height: 480 }
}).then(function(stream) {
  /* use the stream */
  video.srcObject = stream
}).catch(function(err) {
  /* handle the error */
});

