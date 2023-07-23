const mainDiv = document.getElementById('main-div');
mainDiv.style.display = 'none';
function animateSmallDiv() {
  const smallDiv = document.querySelector('.small-div');
  const largeDiv = document.querySelector('.large-div');
  const animationDiv = document.querySelector('.animationDiv');
  const para = document.querySelector('.para');

  smallDiv.classList.add('hidden-small-div');
  if (smallDiv.classList.contains('hidden-small-div')) {
    animationDiv.style.left = "-730px";
    animationDiv.style.top = "280px";
    animationDiv.style.width = '340px';
    animationDiv.style.height = '30%';
    animationDiv.style.flexWrap = 'wrap';
    mainDiv.style.display = 'block';
    mainDiv.style.transition = 'all 0.5s';
    mainDiv.style.transition = 'left 1s ease';
    mainDiv.style.transformOrigin = 'left';
    mainDiv.style.zIndex = '2';
    smallDiv.style.width = '40%'
    const paraHeight = para.scrollHeight;
    para.style.top = `-${paraHeight}px`;
    setTimeout(() => {
      para.style.top = "0";
    }, 10);

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

  const paraHeight = para.scrollHeight;
  para.style.top = `-${paraHeight}px`;
}
