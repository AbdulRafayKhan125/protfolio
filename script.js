function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


function animate(){

  gsap .from('#nav',{
    y:-100,
    duration:1,
    opacity:0
  })

  gsap.from('.hero-left>h4,.hero-left>h3,.hero-left>h1,.hero-left>h2,.contact',{
    y:100,
    stagger:0.2,
    opacity:0

  })
  gsap.from('.hero-right>p',{
    x:100,
    opacity:0,
    duration:1,
  })
  gsap.from('#icons>a',{
    y:-200,
    duration:1,
    stagger:0.3,
    opacity:0
  })
  gsap.from('.hero',{
    scale:0.5,
    duration:0.7
  })

 

  gsap.from('.profile-photo',{
    x:-100,
    duration:0.6,
    opacity:0.5,
    scrollTrigger:{
      scroller:"#main",
      trigger:".profile-photo",
      start:"top 60%",
      scrub:true,
    }
  })

  gsap.from('.para',{
    x:100,
    duration:0.6,
    opacity:0.5,
    scrollTrigger:{
      scroller:"#main",
      trigger:".para",
      start:"top 60%",
      scrub:true,
    }
  })

  gsap.from('.frameworks',{
    x:-80,
    duration:0.3,
    opacity:0.5,
    scrollTrigger:{
      scroller:"#main",
      trigger:".frameworks",
      start:"top 130%",
      scrub:true
    }
    
  })
  gsap.from('.skills',{
    y:80,
    duration:0.3,
    scrollTrigger:{
      scroller:"#main",
      trigger:".skills",
      start:"top 130%",
      scrub:true
    }
    
  })

  gsap.from('.projects',{
    x:100,
    duration:0.3,
    opacity:0.5,
    scrollTrigger:{
      scroller:"#main",
      trigger:".projects",
      start:"top 130%",
      scrub:true
    }
    
  })

  gsap.from('.head3',{
    y:100,
    opacity:0,
    duration:0.3,
    scrollTrigger:{
      scroller:"#main",
      trigger:".head3",
      start:"top 90%",
      scrub:true,
    }
  })

  gsap.from('.top3',{
    y:100,
    opacity:0,
    duration:0.3,
    scrollTrigger:{
      scroller:"#main",
      trigger:".top3",
      start:"top 90%",
      scrub:true,
    }
  })
  gsap.from('.btm3',{
    y:100,
    opacity:0.5,
    duration:0.3,
    scrollTrigger:{
      scroller:"#main",
      trigger:".btm3",
      start:"top 90%",
      scrub:true,
    }
  })


}





loco()
animate()