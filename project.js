let images = document.querySelectorAll(`.home > img`);
let leftArrow = document.querySelector(`span.left`);
let rightArrow = document.querySelector(`span.right`);
let liDrop = document.querySelector(`li:nth-child(+5)`);
let dropContant = document.querySelector(`.dropDown`);
let pillButtons = document.querySelectorAll('.ul_contact > li');
let boxBottom = document.querySelectorAll('.box_bottom');
let spyScrollLi = document.querySelectorAll(`div:nth-of-type(2)>li:nth-child(-n+4)`)
let sections = document.querySelectorAll(`section`);
let firstSection = document.querySelector('section:nth-of-type(1)')
let lasttSection = document.querySelector('section:nth-of-type(4)')
let blogNewsLink = document.querySelector('.dropDown > a:nth-of-type(1)');
let blogNewsSection = document.querySelector('.blog');
let nav = document.querySelector(`nav`);
let score = 0;
let backTopButton = document.querySelector(".backTop");


let moveDown = function(item){
 let scrollDownMenu = setInterval(function(){
  window.scrollBy(0, 6);
   if(window.pageYOffset >= item){
     clearInterval(scrollDownMenu);
   }
 },1)
}

let moveUp = function(item1, item2){
 let scrollDownMenu = setInterval(function(){
  window.scrollBy(0, -6);
   if(window.pageYOffset <= item1 || window.pageYOffset <= item2.offsetTop){
     clearInterval(scrollDownMenu);
   }
 },1)
}

blogNewsSection = blogNewsSection.offsetTop - 20;
blogNewsLink.addEventListener("click", function(ev){
 ev.preventDefault();
 moveDown(blogNewsSection);
 return;
})


for(let i = 0; i < spyScrollLi.length; i++){
  spyScrollLi[i].addEventListener("click", function(ev){
   ev.preventDefault();
    let destinationSections = sections[i].offsetTop - 65;
     moveDown(destinationSections);
     moveUp(destinationSections, firstSection);
  })
}


backTopButton.addEventListener("click", function(){
  let scrollUp = setInterval(function(){
    window.scrollBy(0, -5);
    if(window.pageYOffset <= 0){
      clearInterval(scrollUp);
    }
  }, 1);
})


window.addEventListener(`scroll`, function (ev) {
    let heightToExecute = nav.clientHeight + 250;
    for (let i = 0; i < sections.length; i++) {
        if (window.pageYOffset >= sections[i].offsetTop - heightToExecute && window.pageYOffset < sections[i + 1].offsetTop){
            // console.log(` you watching the ${titels[i]}.innertext poster`);
            for (let j = 0; j < spyScrollLi.length; j++) {
                if (spyScrollLi[j].classList.contains(`changeColor`)) {
                    spyScrollLi[j].classList.remove(`changeColor`);
                    break;
                }
            }
            spyScrollLi[i].classList.add(`changeColor`);
        }
    }
})


liDrop.addEventListener(`click`, function (ev) {
    ev.stopPropagation();
    dropContant.classList.toggle('active');
})

document.body.addEventListener('click', function(){
    if(dropContant.classList.contains('active')){
      dropContant.classList.remove('active');
    }
})



for(let n = 0; n < pillButtons.length; n++ ){
    pillButtons[n].addEventListener('click', function(ev){
      ev.preventDefault();
      for(let i = 0; i < boxBottom.length; i++){
         if(boxBottom[i].classList.contains("box_bottom_active")){
           boxBottom[i].classList.remove("box_bottom_active");
           pillButtons[i].classList.remove("border_bottom_active");
           break;
         }
      }
      boxBottom[n].classList.add("box_bottom_active");
      pillButtons[n].classList.add("border_bottom_active");
    })
}

rightArrow.addEventListener(`click`, function (ev) {
    score++;
    if (score === images.length) {
        score = 0;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translate(${score * -100}%,0)`;
    }
})

leftArrow.addEventListener(`click`, function (ev) {
    score--;
    if (score < 0) {
        score = images.length - 1;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translate(${score * -100}%,0)`;
    }
})
