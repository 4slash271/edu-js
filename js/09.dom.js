/* var document = {
	html: {
		head: {
			innerHTML: '<...>'
		},
		body: {
			innerHTML: '<...>'
		}
	}
} 
console.log(document.body.innerHTML);
document.body.innerHTML += '<h1>BOOLDOOK</h1>';
*/

var appendTxt = document.getElementById('appendTxt');
var txtWrapper = document.getElementById('text-wrapper');

function make() {
  txtWrapper.innerHTML =
    txtWrapper.innerHTML + '<p>' + appendTxt.value + '</p>';
  init();
}

function removeAll() {
  txtWrapper.innerHTML = '';
  init();
}

function removeOldLine() {
  console.log(txtWrapper.getElementsByTagName('p').length);
  console.log(txtWrapper.getElementsByTagName('p')[1]);
  txtWrapper.getElementsByTagName('p')[0].remove();
  init();
}
function removeNewLine() {
  console.log(txtWrapper.getElementsByTagName('p').length);
  console.log(txtWrapper.getElementsByTagName('p')[1]);
  let lastIdx = txtWrapper.getElementsByTagName('p').length - 1;
  txtWrapper.getElementsByTagName('p')[lastIdx].remove();
  init();
}

function init() {
  appendTxt.value = '';
  appendTxt.focus();
}
