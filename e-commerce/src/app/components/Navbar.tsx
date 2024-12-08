import { GoSearch } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";

export default function Navbar(){
    return(
        <div className="h-[132px] w-full   flex flex-col justify-center ">
            <div className="flex flex-row justify-between mb-[20px]">
                <p className="ml-7"><GoSearch className="w-4 h-4"/></p>
                <h1 className=" font-normal text-2xl ml-3 font-[Clash Display] text-[#22202E]">Avion</h1>
                <p className="flex flex-row gap-3 mr-4">
                    <MdOutlineShoppingCart className="w-4 h-4"/>
                    <BiUserCircle className="w-4 h-4"/>
                </p>
            </div>
            <hr className="mx-[26px] border"/>
            <ul className="flex flex-row justify-center mt-[20px] gap-11 font-normal text-base font-[Satoshi] text-[#726E8D]">
                <li>Plant pots</li>
                <li>Ceramics</li>
                <li>Tables</li>
                <li>Chairs</li>
                <li>Crockery</li>
                <li>Tableware</li>
                <li>Cutlery</li>
            </ul>
        </div>
    )
}