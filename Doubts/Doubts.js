// JavaScript HTML DOM NodeList Object
// EXAMPLE 1 ||
const myNodeList = document.querySelectorAll('p');

document.getElementById('demo').innerHTML =
    "The innerHTML of the seconds paragraph is : " + myNodeList[1].innerHTML;


// JavaScript Array.from()
// EXAMPLE 1 ||
let text = "ABCDEFG";
const myArr = Array.from(text);

document.getElementById('demo2').innerHTML = myArr;