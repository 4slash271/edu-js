/************ 선수학습 *************/
console.log(Math);

var n = 10.11;
console.log(Math.floor(n)); // 무조건 버림
console.log(Math.ceil(n)); // 무조건 올림
console.log(Math.round(n)); // 반올림

var n2 = -12.55;
console.log(Math.abs(n2)); // 절대값

var random = Math.random(); // 0부터 1보다 작은 실수(0 ~ 0.9999999999999999)
console.log(random);

// console.log( Math.floor(0.829347891241 * 100) )
// 예 0 ~ 44에서 랜덤한 정수를 구하시오.
// 공식: Math.floor(Math.random() * 45) -> 구하고 싶은 정수 + 1

// 0 ~ 255
console.log(Math.floor(Math.random() * 256));

/************ 전역설정 *************/
var stage = document.querySelector('.stage');
var btMake = document.querySelector('.bt-make');
var btRemove = document.querySelector('.bt-remove');
/************ 사용자 함수 *************/

/************ 이벤트 설정 *************/
btMake.addEventListener('click', onMake);
btRemove.addEventListener('click', onRemove);

// $('.bt-make').on('click', onMake);
// $('.bt-remove').on('click', onRemove);

/************ 이벤트 콜백 *************/
// <div class="box" style="background-color: rgb(12,3,27)"></div>

function onMake() {
  let cnt = Number(document.querySelector('#cnt').value);
  console.log(cnt);
  var bg, r, g, b;
  for (var i = 0; i < cnt; i++) {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    bg = 'background-color: rgb(' + r + ', ' + g + ', ' + b + ')';
    stage.innerHTML += '<div class="box" style="' + bg + '"></div>';
  }
}

// function onMake() {
//   var cnt = Number($('#cnt').val());
//   var bg, r, g, b;
//   for (var i = 0; i < cnt; i++) {
//     r = Math.floor(Math.random() * 256);
//     g = Math.floor(Math.random() * 256);
//     b = Math.floor(Math.random() * 256);
//     bg = 'background-color: rgb(' + r + ', ' + g + ', ' + b + ')';

//     var el = $('.stage').append('<div class="box" style="' + bg + '"></div>');

//     var el2 = $('<div class="box" style="' + bg + '"></div>').appendTo(
//       '.stage'
//     );

//     $('.stage').prepend('<div class="box" style="' + bg + '"></div>');
//     $('<div class="box" style="' + bg + '"></div>').prependTo('.stage');

//   }
// }

function onRemove() {
  stage.innerHTML = '';
}
