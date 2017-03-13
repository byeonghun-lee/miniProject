var modal_btn = document.querySelector('.m-list-1')
modal_btn.onclick = createModalWindow;


// createModalWindow.onload = (function(global){
  // 'use strict';
  // var btn_play;
  // var my_music;
  // my_music = new AudioCtrl();
  // btn_play = document.querySelector('.music-play');
  // btn_play를 못 찾음.
  // console.log(btn_play);
  // btn_play.onclick = my_music.play.bind(my_music);
// })(window);


function createModalWindow(){
  // console.log("하하하하");
  var modal_player = document.querySelector('.modal-player');
  var modal = [
    '<div class="modal-window">',
      '<div class="cover">',
        '<img src="media/cover/001.EdSheeran-ShapeOfYou.jpg" alt="1위 쉐이프오브유 앨범자켓">',
      '</div>',
      '<div class="music-contents">',
        '<div class="seekbar">',
          '<div class="seekbar-progress"></div>',
        '</div>',
        '<div class="music-time">',
          '<span class="time-current">00:00</span>',
          '<span class="time-bar">|</span>',
          '<span class="time-total">00:00</span>',
        '</div>',
        '<div class="btn-area">',
          '<button type="button" class="music-play">PLAY</button>',
          '<button type="button" class="music-pause">PAUSE</button>',
          '<button type="button" class="music-stop">STOP</button>',
        '</div>',
        '<div class="volume-area">',
          '<button type="button" class="btn-plus">+</button>',
          '<button type="button" class="btn-minus">-</button>',
        '</div>',
      '</div>',
    '</div>'
  ].join('');
  modal_player.innerHTML = modal
};
