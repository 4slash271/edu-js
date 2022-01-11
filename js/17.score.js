
/* scores[0] = {
	name: '홍길동',
	kor: 80,
	eng: 90,
	math: 85,
	total: 255,
	avg: 85,
	rank: 2
} */

/******************* 글로벌 설정 *********************/
let scores = []
let newData = document.querySelector('.score-tb > tbody');


/******************* 사용자 함수 *********************/
/* 
if(scores[i-1].total === v.total) v.rank = scores[i-1].rank
else v.rank = i + 1 
if(i == 0) v.rank = 1
else v.rank = scores[i-1].total === v.total ? scores[i-1].rank : i + 1
*/

/*
// 축약과정
function rankingScore() {
	scores.sort(function(a, b) {
		return b.total - a.total 
	})
	scores.forEach(function(v, i) {
		if(i === 0) v.rank = 1
		else {
			if(v.total === scores[i - 1].total) v.rank = scores[i - 1].rank
			else v.rank = i + 1
		}
	})
}

function rankingScore() {
	scores.sort(sortDesc('total'))
	scores.forEach(function(v, i) {
		if(i === 0) v.rank = 1
		else {
			v.rank = (v.total === scores[i - 1].total) ? scores[i - 1].rank : i + 1
		}
	})
}

function rankingScore() {
	scores.sort(sortDesc('total'))
	scores.forEach(function(v, i) {
		v.rank = (i === 0) ? 1 : (v.total === scores[i - 1].total) ? scores[i - 1].rank : i + 1 
	})
}
*/
/********utill********/
// function sortDesc(key) {
// 	return function(a, b) {
// 		return key ? b[key] - a[key] : b - a
// 	}
// }
/********utill********/

function rankingScore() {
	scores.sort(sortDesc('total')).forEach(function(v, i) {
		console.log(sortDesc('total'));
		v.rank = (i === 0) ? 1 : (scores[i-1].total === v.total) ? scores[i-1].rank : i + 1
	})
	scores.sort(sortAsc('createdAt'));//입력 시간 순에 따라 오름차순(먼저 입력한 거 먼저 출력)
	// console.log(scores)
}

function renderScore() {
	// 테이블에 점수를 등록
	let i, html
	newData.innerHTML = '';//이전의 데이터를 중복해서 올리지 않도록 비우기
	for(i=0; i<scores.length; i++) {
		html  = '<tr>'
		html += '<td>'+(i+1)+'</td>'
		html += '<td>'+scores[i].name+'</td>'
		html += '<td>'+scores[i].kor+'점</td>'
		html += '<td>'+scores[i].eng+'점</td>'
		html += '<td>'+scores[i].math+'점</td>'
		html += '<td>'+scores[i].total+'점</td>'
		html += '<td>'+scores[i].avg+'점</td>'
		html += '<td>'+scores[i].rank+'등</td>'
		html += '<td>'
		// html += '<button class="bt-change">수정</button>&nbsp;'
		// html += '<button class="bt-remove">삭제</button>'
		html += '</td>'
		html += '</tr>'
		// console.log(html)
		newData.innerHTML += html;
		// $('.score-tb tbody').prepend(html)//위의 vanila와 같음
	}
	// newData.stop().fadeOut(0, function() {
	// 	$(this).stop().fadeIn(1000)
	// })
}

/******************* 이벤트 등록 *********************/


/******************* 이벤트 콜백 *********************/
function onScoreSubmit(f) {

	// 데이터 저장
	// let f = document.scoreForm
	let name = f.name.value.trim()
	let kor = f.kor.value.trim()
	let eng = f.eng.value.trim()
	let math = f.math.value.trim()
	let createdAt = new Date().getTime()
	
	// 데이터 검증
	if(name === '') {
		alert('이름을 입력하세요.')
		f.name.focus()
		return false
	}
	if(kor === '') {
		alert('국어점수를 입력하세요.')
		f.kor.focus()
		return false
	}
	if(eng === '') {
		alert('영어점수를 입력하세요.')
		f.eng.focus()
		return false
	}
	if(math === '') {
		alert('수학점수를 입력하세요.')
		f.math.focus()
		return false
	}
	
	// 데이터 수정
	kor = Number(kor)
	eng = Number(eng)
	math = Number(math)
	total = kor + eng + math
	avg = Number((total/3).toFixed(2))//소수점 두자리까지만 반영하게 만들어 준다
	// console.log(kor, eng, math, total, avg)

	// 배열에 데이터를 저장
	scores.push({
		name: name,
		kor: kor,
		eng: eng,
		math: math,
		total: total,
		avg: avg,
		createdAt: createdAt
	})
	// console.log(scores)

	// form을 초기화
	f.reset()

	// 데이터의 순위를 가공한다
	rankingScore()

	// 데이터를 화면에 표현한다
	renderScore()

	return false
}
