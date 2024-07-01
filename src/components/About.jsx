import image1 from "../assets/asset2.webp"
import image2 from "../assets/asset3.webp"
import image3 from "../assets/asset1.webp"
import image4 from "../assets/asset4.webp"
import image5 from "../assets/asset27.webp"
import image6 from "../assets/asset28.webp"
import image7 from "../assets/asset29.webp"
import image8 from "../assets/asset30.webp"
import image9 from "../assets/asset31.webp"
import image10 from "../assets/asset32.jpeg"
import gsap from "gsap"
import LocomotiveScroll from "locomotive-scroll"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import LocomotiveScroll from "locomotive-scroll"

export default function About() {




    return <div>
        <div className="sm:px-10 lg:w-1/2 lg:ml-auto mr-10">
            <div className="text-4xl lg:text-base flex justify-between">
                <p>(SELECTED PROJECTS)</p>
                <p>(01   -   04)</p>
            </div>
            <div className="flex lg:float-right">
                <img className="h-[20vw] w-[20vw] lg:h-[5vw] lg:w-[5vw] m-2" src={image4} alt="" />
                <img className="h-[20vw] w-[20vw] lg:h-[5vw] lg:w-[5vw] m-2" src={image2} alt="" />
                <img className="h-[20vw] w-[20vw] lg:h-[5vw] lg:w-[5vw] m-2" src={image1} alt="" />
                <img className="h-[20vw] w-[20vw] lg:h-[5vw] lg:w-[5vw] m-2" src={image3} alt="" />
            </div>
        </div>
        <div className="text-center">
            <div className="lg:absolute lg:right-0 lg:flex lg:gap-10 mt-40 mr-20">
                <p className="text-5xl mb-10 pt-2 lg:text-base ">(ABOUT US)</p>
                <div className="text-8xl leading-[120px] lg:text-[5vw] lg:leading-[5vw]">
                    <div className="overflow-hidden"><h1 className="aboutUs">We are a design</h1></div>
                    <div className="overflow-hidden"> <h1 className="aboutUs">company that helps</h1> </div>
                    <div className="overflow-hidden"><h1 className="aboutUs">brand define and</h1> </div>
                    <div className="overflow-hidden"><h1 className="aboutUs">thrive in culture.</h1> </div>
                    <div className="overflow-hidden"><h1 className="aboutUs">Creating influentail</h1> </div>
                    <div className="overflow-hidden"><h1 className="aboutUs">Strategy, brand</h1> </div>
                    <div className="overflow-hidden"><h1 className="aboutUs">identity, packaging</h1> </div>
                    <div className="overflow-hidden"><h1 className="aboutUs">design and</h1> </div>
                    <div className="overflow-hidden"><h1 className="aboutUs">communications.</h1> </div>
                </div>
            </div>
            {/* <div className="text-right">
                Learn more about us
            </div> */}
        </div>

        <div className="sm:mt-[30vw] lg:m-0">
            <div className=" lg:h-[33vw] lg:w-[28vw] flex justify-center lg:absolute lg:left-[8vw] lg:top-[80vw] mt-10 overflow-hidden">
                <div className="">
                    <img className="object-cover img1 h-[100vw] w-[76vw] lg:h-[35vw] lg:w-[25vw] " src={image6} alt="" />
                </div>
            </div>
            <div className="lg:h-[33vw] lg:w-[28vw] flex justify-center lg:absolute lg:left-[65vw] lg:top-[110vw] mt-10 overflow-hidden">
                <div className="img2">
                    <img className="object-cover h-[100vw] w-[76vw] lg:h-[35vw] lg:w-[25vw]" src={image7} alt="" />

                </div>
            </div>
            <div className="lg:h-[33vw] lg:w-[28vw] flex justify-center lg:absolute lg:left-[30vw] lg:top-[125vw] mt-10 overflow-hidden">
                <div className="img3">
                    <img className="object-cover h-[100vw] w-[76vw] lg:h-[35vw] lg:w-[25vw] " src={image8} alt="" />

                </div>
            </div>
            <div className="lg:h-[33vw] lg:w-[28vw] flex justify-center lg:absolute lg:left-[45vw] lg:top-[160vw] mt-10 overflow-hidden">
                <div className="img4">
                    <img className="object-cover h-[100vw] w-[76vw] lg:h-[35vw] lg:w-[25vw] " src={image9} alt="" />

                </div>
            </div>
            <div className="lg:h-[33vw] lg:w-[28vw] flex justify-center lg:absolute lg:left-[5vw] lg:top-[180vw] mt-10 overflow-hidden">
                <div className="img5">
                    <img className="object-cover h-[100vw] w-[76vw] lg:h-[35vw] lg:w-[25vw] " src={image10} alt="" />

                </div>
            </div>
            <div className="lg:h-[33vw] lg:w-[28vw] flex justify-center lg:absolute lg:left-[60vw] lg:top-[200vw] mt-10 overflow-hidden">
                <div className="img6">
                    <img className="object-cover h-[100vw] w-[76vw] lg:h-[35vw] lg:w-[25vw] " src={image5} alt="" />

                </div>
            </div>
        </div>

    </div>
}

// 