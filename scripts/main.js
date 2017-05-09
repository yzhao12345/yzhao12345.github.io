//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'SCAL is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'SCAL is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

/*document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

/*var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kids.jpg') {
      myImage.setAttribute ('src','images/kids2.jpg');
    } else {
      myImage.setAttribute ('src','images/kids.jpg');
    }
}
*/