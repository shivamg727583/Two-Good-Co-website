
function LocomotiveScrollAnimation(){
    
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

}

LocomotiveScrollAnimation();


function elementTabAnime(){
    
var tabHead = document.querySelector(".tab-head");
var tabBody = document.querySelector(".tab-body");
var tabElem =document.querySelectorAll(".elem-tab")

tabElem.forEach(function(elem){
    
elem.addEventListener("mouseenter",function(){
    elem.style.height = "40%"  
})

elem.addEventListener("mouseleave",function(){
    elem.style.height = "60px"
})
})
}

elementTabAnime();

var tl =gsap.timeline();
tl.from(".page1 h1",{
    y:200,
    opacity:0,
    duration:.7,
    stagger:.3,
})


function mouseMoveAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
            left:dets.x,
            top:dets.y,
    
        })
    })
    document.querySelector(".page4").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
        transform: `translate(-50%,-50%) scale(1)`,
    
        })
    })
    document.querySelector(".page4").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
        transform: `translate(-50%,-50%) scale(0)`,
    
        })
    })
}

mouseMoveAnimation();


    
function navigationAnimation(){
    
gsap.to(".nav1 svg",{
    transform:`translateY(-100%)`,
        scrollTrigger:{
            trigger:".page1",
            scroller:".main",
            // markers:true,
            start:"top 0%",
            end:"top -100%",
            scrub:true,
        }
    })
    gsap.to(".nav2 .link",{
        y:-200,
        opacity:0,
        scrollTrigger:{
            trigger:".page1",
            scroller:".main",
            // markers:true,
            start:"top 0%",
            end:"top -100%",
            scrub:true,
        }
    })
    
}

navigationAnimation()


//////////////// responsive menu 
function mobileNavbar(){
    var check=0;
document.querySelector(".menu").addEventListener("click",function(){
  if(check==0){
    document.querySelector(".navbar").style.height=`100vh`;
    document.querySelector(".navbar").style.backgroundColor=`black`;
    document.querySelector(".navbar").style.color=`white`;
     document.querySelector('.link').style.opacity=1;
check=1; 
document.querySelector(".menu").innerHTML=`<i class="ri-close-line"></i>`
  }
  else{
    document.querySelector(".navbar").style.height=`120px`;
    document.querySelector(".navbar").style.backgroundColor=`transparent`;
    document.querySelector(".navbar").style.color=`black`;
     document.querySelector('.link').style.opacity=0;
document.querySelector(".menu").innerHTML=`<i class="ri-menu-line"></i>`
check=0;
 
  }
})
}
mobileNavbar()