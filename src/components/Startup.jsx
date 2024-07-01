import image1 from "../assets/asset2.webp"
import image2 from "../assets/asset3.webp"
import image3 from "../assets/asset4.webp"
import image4 from "../assets/asset5.webp"
import image5 from "../assets/asset6.webp"
import image6 from "../assets/asset7.webp"

export default function Startup() {

    return <div className="z-40 w-full flex items-center h-screen bg-black overflow-hidden startup absolute">

        <div className="imgStrip lg:flex lg:flex-row justify-center items-center w-full">
            <div className="m-auto flex justify-center items-center">
                <img className="box p-5 h-80 w-80" src={image1} alt="can't load" />
            </div>
            <div className="m-auto flex justify-center items-center">
                <img className="box p-5 h-80 w-80" src={image2} alt="can't load" />
            </div>
            <div className="m-auto flex justify-center items-center">
                <img className="box  p-5  h-80 w-80" src={image3} alt="can't load" />
            </div>
            <div className="m-auto flex justify-center items-center">
                <img className="box  p-5  h-80 w-80" src={image4} alt="can't load" />
            </div>
            <div className="m-auto  flex justify-center items-center">
                <img className="box  p-5  h-80 w-80" src={image5} alt="can't load" />
            </div>
            <div className="m-auto flex justify-center items-center">
                <img className="box p-5  h-80 w-80" src={image6} alt="can't load" />
            </div>

            {/* <span className="box text-9xl text-white p-5  h-80 w-80 flex items-center">@</span> */}
        </div>

    </div>
}