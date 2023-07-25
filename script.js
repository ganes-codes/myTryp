
const mainDiv = document.getElementById('main-div');
mainDiv.style.display = 'none';
function animateSmallDiv() {
  const smallDiv = document.querySelector('.small-div');
  const largeDiv = document.querySelector('.large-div');
  const animationDiv = document.querySelector('.animationDiv');
  const para = document.querySelector('.para');
  const capture = document.getElementById('capture');

  smallDiv.classList.add('hidden-small-div');
  capture.classList.add('add-hover');
  if (smallDiv.classList.contains('hidden-small-div')) {
    animationDiv.style.left = "-687px";
    animationDiv.style.top = "300px";
    animationDiv.style.width = '340px';
    animationDiv.style.height = '30%';
    animationDiv.style.flexWrap = 'wrap';
    mainDiv.style.display = 'block';
    mainDiv.style.zIndex = '2';
    smallDiv.style.width = '40%';
    setTimeout(() => {
         mainDiv.style.opacity = '1';
      mainDiv.style.transform = 'translateX(0)';
    }, 1000);

  }
}

function back() {
  const smallDiv = document.querySelector('.small-div');
  const largeDiv = document.querySelector('.large-div');
  const animationDiv = document.querySelector('.animationDiv');
  const para = document.querySelector('.para');

  animationDiv.style.left = "0";
  animationDiv.style.top = "30px";
  animationDiv.style.width = 'fit-content';
  animationDiv.style.height = 'fit-content';
  animationDiv.style.flexWrap = 'revert';
  mainDiv.style.display = 'none';
  mainDiv.style.transform = 'translateX(100%)';
  setTimeout(() => {
    mainDiv.style.display = 'none';
  }, 500); 
}