
const crsr = document.querySelector("#cursor")
const blur = document.querySelector("#cursor-1")
document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x -125+ "px";
    blur.style.top = dets.y -125+ "px";
})
console.log("hello ")
new Typewriter('.typing', {
    strings: ['Front-End devloper', 'Video Editor' , 'Video-AD creater','Website Animator'],
    autoStart:true,
    delay:200,
    loop:true,
    pauseFor:3000,
  });


gsap.to("#navname", {
    color:"black",
    textShadow:" -1px -1px 1px rgb(36, 224, 74), 1px -1px 1px rgb(36, 224, 74), -1px 1px 1px rgb(36, 224, 74), 1px 1px 1px rgb(36, 224, 74)",
    duration:0.5,
    scrollTrigger:{
        trigger:"#navname",
        scroll:"body",
       // markers:true,
        start:"top -0%",
        end:"top top -1%",
        scrub: 2,
    }


})


gsap.to("#navbar",{
    borderBottom: "1px solid  rgb(137, 137, 137)",
    backgroundColor: "black",
    duration:0.5,
    scrollTrigger:{
        trigger:"#navbar",
        scroll:"window",
       // markers:true,
        start:"top -0%",
        end:"top -1%",
        scrub: 2,
    }
})

gsap.to(".ap1",{
    color:" rgb(137, 137, 137)",
    scrollTrigger:{
        trigger:".ap1",
        scroll:"body",
         //markers:true,
         start:"bottom 70%",
         end:"bottom 65%",
         scrub: 2,
    }
})
gsap.to(".ap2",{
    color:" rgb(0, 255, 51)",
    scrollTrigger:{
        trigger:".ap2",
        scroll:"body",
         //markers:true,
         start:"bottom 75%",
         end:"bottom 60%",
         scrub: 2,
    }
})
gsap.to(".ap2",{
    color:"  rgb(137, 137, 137)",
    scrollTrigger:{
        trigger:".ap2",
        scroll:"body",
        // markers:true,
         start:"bottom 60%",
         end:"bottom 50%",
         scrub: 2,
    }
})
gsap.to(".ap3",{
    color:" rgb(0, 255, 51)",
        scrollTrigger:{
        trigger:".ap3",
        scroll:"body",
         //markers:true,
        start:"bottom 75%",
         end:"bottom 60%",
         scrub:2,
    }
})
gsap.to(".ap3",{
    color:"  rgb(137, 137, 137)",
    scrollTrigger:{
        trigger:".ap3",
        scroll:"body",
       // markers:true,
       start:"bottom 60%",
       end:"bottom 50%",
         scrub: 2,
    }
})
gsap.to(".ap4",{
    color:" rgb(0, 255, 51)",
    scrollTrigger:{
        trigger:".ap4",
        scroll:"body",
        //markers:true,
        start:"bottom 75%",
         end:"bottom 60%",
         scrub: 2,
    }
})
gsap.set("#title1",{
    transform:"translateX(-10000px)"
})
gsap.to("#title1",{
    transform:"translateX(0)",
    scrollTrigger:{
        trigger:"#title1",
        scroll:"body",
        //markers:true,
        start:"top 80%",
        end:"top 75%",
        scrub:2
    }
})

gsap.to("#bitmoji",{
    height:"35vh",
    width:"20vw",
    scrollTrigger:{
        trigger:"#bitmoji",
        scroll:"body",
        //markers:true,
        start:"bottom 50%",
        end:"bottom 45%",
        scrub:2
    }
})
gsap.set("#title2",{
    transform:"translateX(10000px)"
})
gsap.to("#title2",{
    transform:"translateX(0)",
    scrollTrigger:{
        trigger:"#title2",
        scroll:"body",
       // markers:true,
        start:"bottom 90%",
        end:"bottom 85%",
        scrub:2
    }
})
gsap.set(".video",{
    opacity:0
})
gsap.to(".video",{
    opacity:1,
    scrollTrigger:{
        trigger:".video",
        scroll:"body",
        //markers:true,
        start:"bottom 120%",
        end:"bottom 100%",
        scrub:2,
    }
})
gsap.set(".box1",{
    transform:"translateX(-1000px)"
})
gsap.to(".box1",{
    transform:"translateX(0px)",
    scrollTrigger:{
        trigger:".box1",
        scroll:"body",
       // markers:true,
        start:"bottom 95%",
        end:"bottom 90%",
        scrub:2,

    }})
 gsap.set(".box2",{
        transform:"translateX(-1000px)"
    })
 gsap.to(".box2",{
        transform:"translateX(0px)",
        scrollTrigger:{
            trigger:".box2",
            scroll:"body",
           // markers:true,
            start:"bottom 95%",
            end:"bottom 90%",
            scrub:2,
    
        }})
        gsap.set(".box3",{
            transform:"translateX(-1000px)"
        })
        gsap.to(".box3",{
            transform:"translateX(0px)",
            scrollTrigger:{
                trigger:".box3",
                scroll:"body",
               // markers:true,
                start:"bottom 95%",
                end:"bottom 90%",
                scrub:2,
        
            }})
            gsap.set(".me",{
                transform:"translateX(-1000px)"
            })
            gsap.to(".me",{
                transform:"translateX(0px)",
                scrollTrigger:{
                    trigger:".me",
                    scroll:"body",
                   // markers:true,
                    start:"bottom 100%",
                    end:"bottom 95%",
                    scrub:2,
            
                }})
                gsap.set("#submit",{
                    opacity:0
                })
                gsap.to("#submit",{
                    opacity:1,
                    scrollTrigger:{
                        trigger:"#submit",
                        scroll:"body",
                       // markers:true,
                        start:"bottom 100%",
                        end:"bottom 95%",
                        scrub:2,
                
                    }})
                    gsap.set("#title3",{
                        opacity:0
                    })
                    gsap.to("#title3",{
                        opacity:1,
                        scrollTrigger:{
                            trigger:"#title3",
                            scroll:"body",
                           // markers:true,
                            start:"bottom 65%",
                            end:"bottom 45%",
                            scrub:2,
                    
                        }})
                        gsap.set("#title4",{
                            opacity:0
                        })
                        gsap.to("#title4",{
                            opacity:1,
                            scrollTrigger:{
                                trigger:"#title4",
                                scroll:"body",
                               // markers:true,
                                start:"bottom 65%",
                                end:"bottom 45%",
                                scrub:2,
                        
                            }})
                            gsap.set(".contact",{
                                transform:"translateX(1000px)"
                            })
                            gsap.to(".contact",{
                                transform:"translateX(0)",
                                scrollTrigger:{
                                    trigger:".contact",
                                    scroll:"body",
                                   // markers:true,
                                    start:"bottom 70%",
                                    end:"bottom 60%",
                                    scrub:2,
                            
                                }})
                                gsap.set(".logo",{
                                    transform:"translateX(1000px)"
                                })
                                gsap.to(".logo",{
                                    transform:"translateX(0)",
                                    scrollTrigger:{
                                        trigger:".logo",
                                        scroll:"body",
                                        //markers:true,
                                        start:"bottom 100%",
                                        end:"bottom 95%",
                                        scrub:2,
                                
                                    }})
window.onload=()=>{
    const mtl = gsap.timeline();

    mtl.set("#herosection",{
        opacity:0,
    })
    mtl.to("#herosection",{
        opacity:0.5,
        delay:0.5,
    })
    mtl.to("#herosection",{
        opacity:1,       
    })
    mtl.set("#navbar",{
        opacity:0,
        delay:0.5
    })
    mtl.to("#navbar",{
        opacity:1,
        delay:0.5
    })
}

function sendemail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "krish3085.nagpal@gmail.com",
        Password : "26388946746843D64589C66E0BD50E8D20A2",
        To : 'krish3085.nagpal@gmail.com',
        From : 'krish3085.nagpal@gmail.com',
        Subject : document.querySelector("#subject").value,
        Body :document.querySelector("#nmaes").value +" <br/>" + document.querySelector("#email").value+" <br/>"+ document.querySelector(".me").value
    }).then(
      message => document.querySelector("#recive").innerHTML = "Got your message i will get back to you "
    )};
    
