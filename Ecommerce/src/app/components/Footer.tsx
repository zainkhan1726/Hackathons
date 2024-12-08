import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="font-[Satoshi] w-full h-[380px] bg-[#2A254B] text-white flex flex-col justify-center items-center">
        {/* Uppper div*/}
        <div className="flex flex-row">
            {/* Left div */}
           <div className="flex flex-row"> 

            <div className="flex flex-col gap-3 mr-[109px]">
                <h5 className="text-base font-normal">Menu</h5>
                <ul className="flex flex-col gap-3 font-normal text-sm">
                    <li>New arrivals</li>
                    <li>Best sellers</li>
                    <li>Recently viewed</li>
                    <li>Popular this week</li>
                    <li>All products</li>
                </ul>
            </div>
            {/* Categories section */}
            <div className="flex flex-col gap-3 mr-[133px]">
                <h5 className="text-base font-normal">Categories</h5>
                <ul className="flex flex-col gap-3 font-normal text-sm">
                    <li>Crockery</li>
                    <li>Furniture</li>
                    <li>Homeware</li>
                    <li>Plant pots</li>
                    <li>Chairs</li>
                    <li>Crockery</li>
                </ul>
            </div>
            {/* Company section */}
            <div className="flex flex-col gap-3 mr-[109px]">
                <h5 className="text-base font-normal">Our company</h5>
                <ul className="flex flex-col gap-3 font-normal text-sm">
                    <li>About us</li>
                    <li>Vacancies</li>
                    <li>Contact us</li>
                    <li>Privacy</li>
                    <li>Returns policy</li>
                </ul>
            </div>
            </div> 
            {/* Right div */}
            <div className="flex flex-col gap-4">
                <h1>Join our mailing list</h1>
                <div className=" flex flex-row w-[627px] h-14">
                    <input type="email" placeholder="your@email.com" className="bg-white bg-opacity-15 w-[509px] h-14 outline-none text-start pl-8"/>
                    <button className="w-[118px] h-14 bg-white text-black">Sign up</button>
                </div>
            </div>
                
        </div>
        {/* Lower div */}
        <div className="flex flex-col h-[68px] w-full">
            <hr className=" bg-[#4E4D93] mt-12 mx-20"/>
            <div className="flex flex-row justify-between mx-20 mt-6">
            <p>Copyright 2022 Avion LTD</p>
            <p className="w-[264px] h-6 flex flex-row  justify-between ">
                <FaLinkedin className="w-6 h-6 "/>
                <FaFacebookSquare className="w-6 h-6 "/>
                <FaInstagram className="w-6 h-6 "/>
                <FaSkype className="w-6 h-6 "/>
                <FaTwitter className="w-6 h-6 "/>
                <FaPinterest className="w-6 h-6" />
            </p>
            </div>
        </div>

        </div>
    )
}