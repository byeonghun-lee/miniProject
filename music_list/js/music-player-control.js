function AudioCtrl(){
  'use strict';
  var audio = document.createElement('audio');
  var audio_src = 'media/source/001.EdSheeran-ShapeOfYou.mp3';
  audio.setAttribute('src', audio_src);
  this.media = audio;
}

AudioCtrl.fn = AudioCtrl.prototype;
// console.log(this.media);
AudioCtrl.fn.play = function(){
  this.media.play();
};

(function(global){
  'use strict';
  var my_music;
  my_music = new AudioCtrl();
  var btn_play = document.querySelector('.music-play');
  // btn_play를 못 찾음.
  console.log(btn_play);
  btn_play.onclick = my_music.play.bind(my_music);
})(window);
