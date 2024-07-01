export default function Footer() {

    const revol = ["O", "u", "r", "R", "e", "v", "o", "l", "u", "t", "i", "o", "n"]

    return <div className="bg-black text-white p-5 lg:relative lg:top-[190vw] mt-20 text-center lg:text-left">
        <div className="text-[3vw] lg:text-base mt-5 lg:grid lg:grid-cols-12 ">
            <div className="mb-5 lg:col-span-5 lg:ml-10">
                <p className="font-extrabold p-2">(SITEMAP)</p>
                <div className="lg:pl-2">
                    <p>Home</p>
                    <p>Work</p>
                    <p>About</p>
                    <p>News</p>
                    <p>Contact</p>
                    <p>Ventures</p>
                    <p>Privacy</p>
                    <p>Terms</p>

                </div>
            </div>
            <div className="col-span-2">
                <div className=" mb-5 p-2">
                    <p className="font-extrabold pb-2">(COPYRIGHT)</p>
                    <p>2023 Our Revolution PTY Ltd</p>
                </div>
                <div className="lg:pl-2">
                    <p className="font-extrabold p-2">(SOCIAL)</p>
                    <p>Linkedin</p>
                    <p>Behance</p>
                    <p>Instagram</p>
                    <p>Pinterest</p>

                </div>
            </div>
            <div className=" mb-5 col-span-2">
                <div className=" mb-5 p-2">
                    <p className="font-extrabold pb-2">(NEW BUSINESS)</p>
                    <p>hello@our-revolution.com</p>
                </div>
                <div className="p-2">
                    <p className="font-extrabold pb-2">(SYDNEY)</p>
                    <p>C26, 99 Jones Street.</p>
                    <p>Ultimo, Sydney, 2007,</p>
                    <p>NSW, Australia</p>
                    <p>+61(02) 8034 2611</p>

                </div>
            </div>
            <div className=" mb-5 col-span-2">
                <div className=" mb-5 p-2">
                    <p className="font-extrabold pb-2">(OR VENTURES)</p>
                    <p>ventures@our-revolution.com</p>

                </div>
                <div className="p-2">
                    <p className="font-extrabold pb-2">(LONDON)</p>
                    <p>86-90 Paul Street,</p>
                    <p>London, EC2A 4NE,</p>
                    <p>United Kingdom</p>
                    <p>+44 (0)20 3131 0036</p>

                </div>
            </div>
        </div>
        <div className="hidden font-['PP_Migra_Regular'] lg:flex justify-center text-[15vw] leading-[15vw] mt-20 ">
            {revol.map((letter, index) => {
                return <span className={`inline-block ${index % 2 === 0 ? "even" : ""}`} key={index}>{letter}</span>    
            })}
            {/* <span>O</span>
            <span>u</span>
            <span>r</span>
            <span>R</span>
            <span>e</span>
            <span>v</span>
            <span>o</span>
            <span>l</span>
            <span>u</span>
            <span>t</span>
            <span>i</span>
            <span>o</span>
            <span>n</span> */}
        </div>
    </div>
}