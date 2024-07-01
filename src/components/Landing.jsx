export default function Landing() {
    return <div className="lg:h-screen">
        <div className="flex justify-between p-8 navbar">
            <h5 className="text-[3vw] lg:text-base">(MENU)</h5>
            <h3 className="text-[5vw] lg:text-2xl">OurRevolution</h3>
            <h5 className="text-[3vw] lg:text-base">(WORK*)</h5>
        </div>
        <div className="text-center items-center my-96 lg:m-20 text-[14vw] leading-[12vw] lg:text-[9vw] lg:leading-[9vw]">
            <div className="overflow-hidden">
                <h1 className="overflow-hidden title font-['PP_Migra_Regular'] font-thin">WE BELIEVE</h1>
            </div>
            <div className="overflow-hidden">
                <h1 className="overflow-hidden title font-['PP_Migra_Regular'] font-thin">BRANDS SHAPE THE</h1>
            </div>
            <div className="overflow-hidden">
                <h1 className="overflow-hidden font-extrabold title ">FUTURE</h1>
            </div>
        </div>
    </div>
}