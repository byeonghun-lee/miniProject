//--------------------------------------------
var control_bar;
control_bar = document.querySelector('.controlBar');
var text_1984;
text_1984 = document.querySelector('.text');

// 폰트사이즈
var font_size_up_button, font_size_down_button;
font_size_up_button = control_bar.querySelector('.font-size-up-button');
font_size_down_button = control_bar.querySelector('.font-size-down-button');

var font_size_input;
font_size_input = control_bar.querySelector('.font-size-box');

// 폰트사이즈 기본 값
var font_count_min = 12;
var font_count_max = 20;
var font_count = 16;

function updateCount(number) {
  font_size_input.setAttribute('value', number);
}
updateCount(font_count);

// 버튼 활성화
font_size_up_button.onclick = function(){
  updateCount(++font_count);
  font_size(font_count);
}

font_size_down_button.onclick = function() {
  updateCount(--font_count);
  font_size(font_count);
}

// 폰트 사이즈 조정
function font_size(num){
  text_1984.style.fontSize = num+'px';
}

// -----------------------------------------------------
//글 간격
var letter_spacing_up_button, letter_spacing_down_button;
letter_spacing_up_button = control_bar.querySelector('.letter-spacing-up-button');
letter_spacing_down_button = control_bar.querySelector('.letter-spacing-down-button');

var letter_spacing_input;
letter_spacing_input = control_bar.querySelector('.letter-spacing-box');

var letter_count_min = -3;
var letter_count_max = 5;
var letter_count = 1;

function updateCountSp(number) {
  letter_spacing_input.setAttribute('value', number);
}
updateCountSp(letter_count);

letter_spacing_up_button.onclick = function(){
  updateCountSp(++letter_count);
  letter_spacing(letter_count);
}

letter_spacing_down_button.onclick = function() {
  updateCountSp(--letter_count);
  letter_spacing(letter_count);
}

function letter_spacing(num){
  text_1984.style.letterSpacing = num+'px';
}

// --------------------------------------------------------------------------
// 줄 간격
var line_height_up_button, line_height_down_button;
line_height_up_button = control_bar.querySelector('.line-height-up-button');
line_height_down_button = control_bar.querySelector('.line-height-down-button');

var line_height_input;
line_height_input = control_bar.querySelector('.line-height-box');

var line_count_min = 0;
var line_count_max = 3;
var line_count = 1.5;

function updateCountLi(number) {
  line_height_input.setAttribute('value', number);
}
updateCountLi(line_count);

line_height_up_button.onclick = function(){
  updateCountLi(++line_count);
  line_height(line_count);
}

line_height_down_button.onclick = function() {
  updateCountLi(--line_count);
  line_height(line_count);
}

function line_height(num){
  text_1984.style.lineHeight = num;
}
