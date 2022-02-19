// header-------------

let header=document.querySelector("header");
window.addEventListener("scroll",()=>{
  if(window.scrollY>=100){
    header.style.backgroundColor="#1e1e1e";
  }else{
    header.style.backgroundColor="transparent"
  }
})


// nav animation----------
let nav =document.querySelector('nav'),
menuWord=document.querySelector('#menuWord'),
openMenu=document.querySelector('#openMenu'),
section1=document.querySelector('.section-1'),
cancelMenu=document.querySelector('#cancelMenu');

openMenu.addEventListener("click",()=>{
  openMenu.style.display="none"
  cancelMenu.style.display="block"
  nav.style.cssText="transform:translateY(0);";
  menuWord.innerHTML="Close"
  section1.style.cssText="z-index:-1;";
  window.scrollTo({
    top:0,
  })
})
cancelMenu.addEventListener("click",()=>{
cancelMenu.style.display="none"
openMenu.style.display="block"
nav.style.cssText="rotateZ(180deg) translateY(180em)";
menuWord.innerHTML="Menu"
section1.style.cssText="z-index:1;";

})


// share button ----------------------------------------
let shareBut=document.querySelector('#shareBut'),
sm=document.querySelector('#sM')

shareBut.addEventListener("mouseover",()=>{
  sm.style.display="flex"
})
shareBut.addEventListener("click",()=>{
  sm.style.display="none"
})


// next and previous buttons---------------
let leftArr =document.querySelector('#leftArr'),
rightArr =document.querySelector('#rightArr'),
slides =document.querySelectorAll('#bigSection'),
numbers =document.querySelector('#numbers');

current = 0;
function setDefault(){
  slides[current].style.display="block"
  numbers.innerHTML=`01`

}
setDefault()

rightArr.addEventListener("click",()=>{
  slides[current].style.display="none";
  slides[current].classList.remove("animated")

  current=current+1;
  if(current==slides.length){
    current=0;
  }
  slides[current].style.display="block"
  numbers.innerHTML=`0${current+1}`
  slides[current].classList.add("animated")
})

leftArr.addEventListener("click",()=>{
  slides[current].style.display="none";
  slides[current].classList.remove("animated")
  numbers.innerHTML=`0${current}`
  current=current-1;
  if(current<0){
    current=slides.length-1;
    numbers.innerHTML=`0${current+1}`
  }
  slides[current].style.display="block"
  slides[current].classList.add("animated")


})




// --------------------------------------------
// section-2 animation 

let section2Img =document.querySelector('#section2Img'),
yearsOfexp=document.querySelector("#yearsOfexp"),
section2=document.querySelector(".section-2");

function startCount(e){
  let goal =e.dataset.goal;
  let count =setInterval(()=>{
    e.textContent++;
    if(e.textContent==goal){
      clearInterval(count)
    }
  },100);
}


window.addEventListener("scroll",()=>{
  if(window.scrollY>=310){
    section2Img.style.cssText=`transform: scale(1);`
  }else if(window.scrollY<=703){
    section2Img.style.cssText=`transform: scale(0.2);`
  }else{
    section2Img.style.cssText=`transform: none`
  }
})

let started = false;
window.addEventListener("scroll",()=>{
  if(window.scrollY>=section2.offsetTop){
    if(!started){
      startCount(yearsOfexp);
    }
    started=true;
  }
})


// section-4 -------------------------


let section4bg =document.querySelector("#section4bg");
window.addEventListener("scroll",()=>{
  if(window.scrollY>= 1750&&window.scrollY<=2300){
    section4bg.style.cssText=`transform: scale(1.5);`
  }else{
    section4bg.style.cssText=`transform: scale(1);`
  }
})



// section -5 -------------

let card1=document.querySelector("#card1"),
card2=document.querySelector("#card2"),
card3=document.querySelector("#card3"),
card4=document.querySelector("#card4");

card1.addEventListener("mouseover",()=>{
  card1.style.cssText=`background-image: linear-gradient(to top, #000000fd, #0000009e),
  url("../../imgs/section\ 5\ photography.jpg");`
// -------------
  card1.addEventListener("mouseout",()=>{
    card1.style.cssText=`background-image: linear-gradient(to top, #000000fd, transparent),
    url("../../imgs/section\ 5\ photography.jpg");`
  })
})
// -------------------------------------------------------
card2.addEventListener("mouseover",()=>{
  card2.style.cssText=`background-image: linear-gradient(to top, #000000fd, #0000009e),
  url("../../imgs/section\ 5\ fashen.jpg");`
// -----------------
  card2.addEventListener("mouseout",()=>{
    card2.style.cssText=`background-image: linear-gradient(to top, #000000fd, transparent),
    url("../../imgs/section\ 5\ fashen.jpg");`
  })
})

// -------------------------------------------------------
card3.addEventListener("mouseover",()=>{
  card3.style.cssText=`background-image: linear-gradient(to top, #000000fd, #0000009e),
  url("../../imgs/section\ 5\ photography\ 3.jpg");`
// -----------------
  card3.addEventListener("mouseout",()=>{
    card3.style.cssText=`background-image: linear-gradient(to top, #000000fd, transparent),
    url("../../imgs/section\ 5\ photography\ 3.jpg");`
  })
})
// -------------------------------------------------------
card4.addEventListener("mouseover",()=>{
  card4.style.cssText=`background-image: linear-gradient(to top, #000000fd, #0000009e),
  url("../../imgs/section\ 5\ fashion.jpg");`
// -----------------
  card4.addEventListener("mouseout",()=>{
    card4.style.cssText=`background-image: linear-gradient(to top, #000000fd, transparent),
    url("../../imgs/section\ 5\ fashion.jpg");`
  })
})



// section 6 -----------------------------

let section6=document.querySelector(".section-6"),
containerS6=document.querySelector(".section-6 .container"),
infoS6=document.querySelector("#infoS6"),
butS6=document.querySelector("#butS6");

function section6Fun(){
  section6.style.cssText=`background-color:white;`
  containerS6.style.cssText=`background-color:#dedede;`
  infoS6.style.cssText=`color:black;`
  butS6.style.cssText=`color:black;`
}
function section6FunCancel(){
  section6.style.cssText=`background-color:black;`
  containerS6.style.cssText=`background-color:#161616;`
  infoS6.style.cssText=`color:white;`
  butS6.style.cssText=`color:white;`
}

window.addEventListener("scroll",()=>{
  if(window.scrollY>=section6.offsetTop){
section6Fun()
  }else{
    section6FunCancel()
  }
});



// section-7--------------
let imgsContainer=document.querySelector(".imgs-container");
let section7=document.querySelector(".section-7");
let item=document.querySelector(".item");
let size =item.offsetWidth;
let sec7But=document.querySelector("#sec7But");
let smallScreen = window.matchMedia("(max-width:767px)");

  sec7But.addEventListener("click",()=>{
    imgsContainer.style.cssText=`transform: translateX(-${size}px);`
    sec7But.style.cssText=`transform:none;`
    sec7But.addEventListener("click",()=>{
      imgsContainer.style.cssText=`transform: translateX(0px);`
      sec7But.style.cssText=`transform: rotate(180deg);`
    })
  })

// ----- small screen
if(smallScreen.matches){
  sec7But.addEventListener("click",()=>{
    imgsContainer.style.cssText=`transform: translateX(-${size}px);`
    sec7But.style.cssText=`transform: rotate(180deg);`
    sec7But.addEventListener("click",()=>{    
      imgsContainer.style.cssText=`transform: translateX(-${size*2}px);`
      sec7But.style.cssText=`transform:none;`
      sec7But.addEventListener("click",()=>{
        imgsContainer.style.cssText=`transform: translateX(0px);`
        sec7But.style.cssText=`transform: rotate(180deg);`  
      })
    })
  })
}


// last section ------------------------------------

let openLink =document.querySelectorAll("#openLink"),
company =document.querySelectorAll(".company");



company.forEach((e)=>{
  e.addEventListener("mouseover",x9)
  e.addEventListener("mouseout",x10)
  })

function x9(e){
  openLink.forEach((ele)=>{
    ele.style.cssText=`display:flex;`;
  })
}
function x10(e){
  openLink.forEach((ele)=>{
    ele.style.cssText=`display:none;`;
  })
}