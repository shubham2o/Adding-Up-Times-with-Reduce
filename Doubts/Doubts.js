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


// JavaScript parseFloat()
// EXAMPLE 1 ||
document.getElementById('demo3').innerHTML =
    parseFloat(10) + "<br>" +
    parseFloat("10") + "<br>" +
    parseFloat("10.33") + "<br>" +
    parseFloat("34 45 66") + "<br>" +
    parseFloat("He was 40");