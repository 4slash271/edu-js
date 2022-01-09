['a', 'b', 'c', 'd', 'e'].indexOf('a'); // 배열.indexOf()

/***************** 글로벌 설정 *******************/
let btnLotto = document.querySelector('#bt-lotto');
let btnReset = document.querySelector('#bt-reset');
let currentNumber = document.querySelector('.disp-wrapper > .display');
let pastNumber = document.querySelector('.history-wrapper');
/***************** 사용자 함수 *******************/

/***************** 이벤트 등록 *******************/
// $('#bt-lotto').on('click', onLotto)
// $('#bt-reset').on('click', onReset)
btnLotto.addEventListener('click', onLotto);
btnReset.addEventListener('click', onReset);

/***************** 이벤트 콜백 *******************/
function onReset() {
  //   $('.disp-wrapper .display').empty();
  //   $('.history-wrapper').empty();
  currentNumber.innerHTML = '';
  pastNumber.innerHTML = '';
}

function onLotto() {
  /******* 변수선언 *******/
  var numbers = [], //버튼 클릭 시에 생성되는 로또 한 세트의 배열
    n, //로또 번호
    i, //로또 번호의 범위 안의 값(예 1-20 사이)
    color; //공의 색깔(번호의 범위 별로 다른 색상)
  // while(조건): 조건이 참일때까지 반복

  /******* 랜덤한 로또번호 6개를 추출 *******/
  while (numbers.length < 6) { //배열 안의 값은 6개만 존재(0,1,2,3,4,5)
    n = Math.floor(Math.random() * 45) + 1; //0 출력 방지
    if (numbers.indexOf(n) === -1) numbers.push(n);//탐색하는 문자열이 존재한다면(indexOf는 탐색하는 문자열이 존재하지 않으면 -1반환) push
  }

  /******* 추출된 번호를 오름차순 정렬 *******/
  // numbers.sort(function(a, b) { return a - b }) 오름차순
  // numbers.sort(function(a, b) { return b - a }) 내림차순
  numbers.sort(function (a, b) {
	  return a - b;
	});

  /******* .display에 표현 *******/
  currentNumber.innerHTML = '';
  for (i = 0; i < 6; i++) {
    if (numbers[i] <= 10) {
      color = 'yellow';
    } else if (numbers[i] <= 20) {
      color = 'blue';
    } else if (numbers[i] <= 30) {
      color = 'red';
    } else if (numbers[i] <= 40) {
      color = 'grey';
    } else {
      color = 'green';
    }
    currentNumber.innerHTML =currentNumber.innerHTML +'<li class="ball ' + color +'">' + numbers[i] +'</li>';
  }

  /******* .history-wrapper에 넣어주기 *******/
  let copy = currentNumber.cloneNode(true);
  pastNumber.appendChild(copy);
  console.log(pastNumber);
    // $('.history-wrapper').prepend($('.disp-wrapper .display').clone());
}





