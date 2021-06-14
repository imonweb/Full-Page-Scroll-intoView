const sections = document.querySelectorAll('section');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const animationDuration = 1000;
let lastTime = 0;

const toggleText = (index, state) => {
  if(state === 'show'){
    sections.forEach((section, i) => {
      if(i === index) {
        section.querySelector('.text').classList.add('show');
      }
    })
  } else {
      sections.forEach((section, i) => {
      if(i === index) {
        section.querySelector('.text').classList.remove('show');
      }
    })
  }
};

toggleText(0, 'show');

nextBtn.addEventListener('click', () => {
  if(index > 2) return;
  toggleText(index, 'hide');
  index++;
  sections.forEach((section, i) => {
    if(i === index){
      toggleText(i, 'show');
      section.scrollIntoView({behavior: 'smooth'});
    }
  })
})

prevBtn.addEventListener('click', () => {
  if(index < 1) return;
  toggleText(index, 'hide');
  index--;
  sections.forEach((section, i) => {
    if(i === index){
      toggleText(i, 'show');
      section.scrollIntoView({behavior: 'smooth'});
    }
  })
})

window.addEventListener('wheel', (e) => {
  // console.log('Im scrolling');
  const delta = e.wheelDelta;
  // console.log(delta);

  const currentTime = new Date().getTime();

  if(currentTime - lastTime < animationDuration){
    e.preventDefault();
    return;
  }
  if(delta < 0){
    const nextBtnClick = new Event('click');
    nextBtn.dispatchEvent(nextBtnClick);
  } else {
     const prevBtnClick = new Event('click');
    prevBtn.dispatchEvent(prevBtnClick);
  }
  lastTime = currentTime;
})