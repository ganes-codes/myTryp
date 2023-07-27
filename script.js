
const mainDiv = document.getElementById('main-div');
mainDiv.style.display = 'none';
const text = document.getElementById('text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const ele = document.querySelectorAll('span');
for (var i = 1; i < ele.length; i++) {
  ele[i].style.transform = "rotate(" + i * 30 + "deg)"
}

var pointer = document.querySelector('.pointer');



function flipCoin() {
  const button = document.querySelector(".coin-button");
  button.classList.add("coin-flip");
  setTimeout(() => {
    button.classList.remove("coin-flip");
  }, 1000);
}


function animateSmallDiv() {
  const smallDiv = document.querySelector('.small-div');
  const largeDiv = document.querySelector('.large-div');
  const animationDiv = document.querySelector('.animationDiv');
  const para = document.querySelector('.para');
  const capture = document.getElementById('capture');
  var fadeButton = document.querySelector('.fadeInButton');
  var textDec = document.querySelector('.text-container');



  smallDiv.classList.add('hidden-small-div');
  capture.classList.add('add-hover');
  if (smallDiv.classList.contains('hidden-small-div')) {
    animationDiv.style.left = "-657px";
    animationDiv.style.top = "300px";
    animationDiv.style.width = '340px';
    animationDiv.style.height = '30%';
    animationDiv.style.flexWrap = 'wrap';
    mainDiv.style.display = 'block';
    mainDiv.style.zIndex = '2';
    smallDiv.style.width = '40%';
    setTimeout(() => {
      textDec.style.marginLeft = "-505px"
      mainDiv.style.opacity = '1';
      mainDiv.style.transform = 'translateX(0)';
      pointer.style.opacity = 0;
      if (fadeButton.style.opacity === '' || fadeButton.style.opacity === '0') {
        fadeButton.style.opacity = '1';
      }
    }, 1000);

  }
}

function back() {
  const smallDiv = document.querySelector('.small-div');
  const largeDiv = document.querySelector('.large-div');
  const animationDiv = document.querySelector('.animationDiv');
  const para = document.querySelector('.para');
  var fadeButton = document.querySelector('.fadeInButton');
  var pointer = document.querySelector('.pointer');
  var textDec = document.querySelector('.text-container')
  animationDiv.style.left = "0";
  animationDiv.style.top = "30px";
  animationDiv.style.width = 'fit-content';
  animationDiv.style.height = 'fit-content';
  animationDiv.style.flexWrap = 'revert';
  mainDiv.style.display = 'none';
  mainDiv.style.transform = 'translateX(100%)';
  setTimeout(() => {
    pointer.style.opacity = "1"
    mainDiv.style.display = 'none';
    fadeButton.style.opacity = '0';
    textDec.style.marginLeft = "-7.7em"
  }, 500);
}