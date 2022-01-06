
console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);
console.log(screen.colorDepth);
console.log(screen.pixelDepth);

console.log(location.hostname);
console.log(location.pathname);
console.log(location.protocol);
console.log(location.port);

console.log(window.clientInformation);
console.log(navigator.appName);
console.log(navigator.appCodeName);
console.log(navigator.platform);
console.log(navigator.product);


// 드디어 사용자 정의 함수
function sulki(query) {
	console.log(query);
	// console.log( alert(query) );			// 리턴값이 없는 함수(void형)
	// console.log( confirm(query) );		// 리턴값이 있는 함수(String, Number, Boolean ...)
	if(confirm(query)) {
		alert('진실!');
	}
	else {
		alert('거짓!');
	}
}


function pomulsun(x) {	// 리턴값이 있는 함수
	alert(x * x);
	return x * x;
}

function pomulsun2(x) {	// 리턴값이 없는 함수
	alert(x * x);
}

console.log( pomulsun(5) );		//25
console.log( pomulsun2(5) );	//undefined


function promptAlert(query) {
	console.log( prompt(query) + '을(를) 좋아하시는군요!!' )
}