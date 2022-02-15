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
bigTitle =document.querySelector('#bigTitle'),
smallTitle =document.querySelector('#smallTitle'),
paragraph =document.querySelector('#paragraph'),
bigSection =document.querySelector('#bigSection'),
numbers =document.querySelector('#numbers');





function sectionNo1(){
  smallTitle.innerHTML='Brands'
  bigTitle.innerHTML="time tag watch"
  paragraph.innerHTML="Sometimes, we need to check the time, wondering when our work or meeting will finish, without getting caught by others."
  numbers.innerHTML="01"
  bigSection.style.cssText=`background-image: url("../../imgs/section\ 1\ 4.jpg");`
}
function sectionNo2(){
  bigTitle.innerHTML="under armour"
  paragraph.innerHTML="Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all."
  numbers.innerHTML="02"
  bigSection.style.cssText=`background-image: url("../../imgs/section\ 1\ 1.jpg");`
}
function sectionNo3(){
  smallTitle.innerHTML='PHOTOGRAPHY'
  bigTitle.innerHTML="re styling"
  paragraph.innerHTML="Once the brand strategy was sharp and real for everyone inside of the company, all the brand behavior started to roll out as stationary material."
  numbers.innerHTML="03"
  bigSection.style.cssText=`background-image: url("../../imgs/section\ 1\ 2.jpg");`
}
function sectionNo4(){
  smallTitle.innerHTML='PHOTOGRAPHY'
  bigTitle.innerHTML="toast 2022 reel"
  paragraph.innerHTML="We are thrilled to share our new reel with you all! Special thanks to all of our talented friends."
  numbers.innerHTML="04"
  bigSection.style.cssText=`background-image: url("../../imgs/section\ 1\ 3.jpg");`
}
function sectionNo5(){
  smallTitle.innerHTML='PHOTOGRAPHY'
  bigTitle.innerHTML="nile - kabutha"
  paragraph.innerHTML="We are thrilled to share our new reel with you all! Special thanks to all of our talented friends."
  numbers.innerHTML="05"
  bigSection.style.cssText=`background-image: url("../../imgs/section\ 1\ 5.jpg");`
}
function sectionNo6(){
  smallTitle.innerHTML='PHOTOGRAPHY'
  bigTitle.innerHTML="sleep walker"
  paragraph.innerHTML=""
  numbers.innerHTML="06"
  bigSection.style.cssText=`background-image: url("../../imgs/section\ 1\ 6.jpg");`
}
function sectionNo7(){
  smallTitle.innerHTML='SPORTS'
  bigTitle.innerHTML="magista"
  paragraph.innerHTML="The Brief team has been sincerely committed to designing great communication around our projects."
  numbers.innerHTML="07"
  bigSection.style.cssText=`background-image: url("../../imgs/section\ 1\ 7.jpg");`
}
function sectionNo8(){
  smallTitle.innerHTML='PHOTOGRAPHY'
  bigTitle.innerHTML="bastian bux"
  paragraph.innerHTML="Bastian bux is the consequence of reducing everything surrounding a dj and producer to its essential element: the music."
  numbers.innerHTML="08"
  bigSection.style.cssText=`background-image: url("../../imgs/section\ 1\ 8.jpg");`
}
function sectionNo9(){
  smallTitle.innerHTML='ARCHITECTURE'
  bigTitle.innerHTML="novara conic"
  paragraph.innerHTML="Cal was first. The first public university in the great state of California. They are the pioneers."
  numbers.innerHTML="09"
  bigSection.style.cssText=`background-image: url("../../imgs/section\ 1\ 9.jpg");`
}

rightArr.addEventListener("click",()=>{
  if(numbers.innerHTML='01'){
    sectionNo2()
  }
  rightArr.addEventListener("click",()=>{
    if(numbers.innerHTML='02'){
      sectionNo3()
    }
    rightArr.addEventListener("click",()=>{
      if(numbers.innerHTML='03'){
        sectionNo4()
      }
      rightArr.addEventListener("click",()=>{
        if(numbers.innerHTML='04'){
          sectionNo5()
        }
        rightArr.addEventListener("click",()=>{
          if(numbers.innerHTML='05'){
            sectionNo6()
          }
          rightArr.addEventListener("click",()=>{
            if(numbers.innerHTML='06'){
              sectionNo7()
            }
            rightArr.addEventListener("click",()=>{
              if(numbers.innerHTML='07'){
                sectionNo8()
              }
              rightArr.addEventListener("click",()=>{
                if(numbers.innerHTML='08'){
                  sectionNo9()
                }
              })
            })
          })
        })
      })
    })
  })
})



// --------------




leftArr.addEventListener("click",sectionNo1)
  
//   leftArr.addEventListener("click",()=>{
//     if(numbers.innerHTML='03'){
//       sectionNo2()
//     }
//     leftArr.addEventListener("click",()=>{
//       if(numbers.innerHTML='04'){
//         sectionNo3()
//       }
//       leftArr.addEventListener("click",()=>{
//         if(numbers.innerHTML='05'){
//           sectionNo4()
//         }
//         leftArr.addEventListener("click",()=>{
//           if(numbers.innerHTML='06'){
//             sectionNo5()
//           }
//           leftArr.addEventListener("click",()=>{
//             if(numbers.innerHTML='07'){
//               sectionNo6()
//             }
//             leftArr.addEventListener("click",()=>{
//               if(numbers.innerHTML='08'){
//                 sectionNo7()
//               }
//               leftArr.addEventListener("click",()=>{
//                 if(numbers.innerHTML='09'){
//                 sectionNo8()
//                 }
//               })
//             })
//           })
//         })
//       })
//     })
//   })
// })



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