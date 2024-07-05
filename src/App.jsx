import { useGSAP } from "@gsap/react"
import Startup from "./components/Startup"
import gsap from "gsap"
import Landing from "./components/Landing"
import About from "./components/About"
import Footer from "./components/Footer"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import LocomotiveScroll from 'locomotive-scroll';



gsap.registerPlugin(ScrollTrigger);

function App() {
  
  useGSAP(()=>{
    gsap.from(".box", {
      y:300,
      duration: 0.3,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0.1
    })
    gsap.to(".box", {
      y:-300,
      duration: 0.3,
      delay: 1,
      stagger: 0.1,
      opacity: 0.1
    })
    
    // gsap.to(".imgStrip",{
    //   x: "-30%",
    //   duration: 1,
    //   delay: 0.5
    
    // })

    gsap.to(".startup",{
      y: "-100%",
      duration:0.5,
      delay: 2
    })
    
    
    
    gsap.from(".title",{
      y: 130,
      duration: 0.5,
      delay: 2,
      stagger: 0.1
      
    })
    
    gsap.from(".navbar",{
      y: 80,
      duration: 0.5,
      delay: 2.5,
      opacity: 0.1
    })
    
    gsap.from(".aboutUs",{
      y: 200,
      duration: 4,
      opacity: 0.1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutUs",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      }

      
    })
    
    gsap.to(".img1",{
      y: -100,
      duration: 4,
      stagger: 1,
      scrollTrigger: {
        trigger: ".img1",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
      }
    })
    gsap.to(".img2",{
      y: -100,
      duration: 4,
      stagger: 1,
      scrollTrigger: {
        trigger: ".img2",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
      }
    })
    gsap.to(".img3",{
      y: -100,
      duration: 4,
      stagger: 1,
      scrollTrigger: {
        trigger: ".img3",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
      }
    })
    gsap.to(".img4",{
      y: -100,
      duration: 4,
      stagger: 1,
      scrollTrigger: {
        trigger: ".img4",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
      }
    })
    gsap.to(".img5",{
      y: -100,
      duration: 4,
      stagger: 1,
      scrollTrigger: {
        trigger: ".img5",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
      }
    })
    gsap.to(".img6",{
      y: -100,
      duration: 4,
      stagger: 1,
      scrollTrigger: {
        trigger: ".img6",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
      }
    })
    gsap.from(".even", {
      y: -100,
      duration: 2,
      stagger: 0,
      scrollTrigger: {
        trigger: ".even",
        start: "top 100%",
        end: "top 35%",
        scrub: true,
      },
    })
  })

  

  
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <main className="">
      <Startup/>
      <Landing/>
      <About/>
      <Footer/>
    </main>
  )
}

export default App
