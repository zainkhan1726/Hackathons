import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PiCreditCardLight } from "react-icons/pi";
import { LuSprout } from "react-icons/lu";
import Image from "next/image";
import EmailSignup from "./components/EmailSignup";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />

      {/* Features section */}
      <div className=" w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-[355px] flex flex-col justify-center items-center ">
        <h1 className="mb-[51px] font-normal text-2xl">
          What makes our brand different
        </h1>

        <div className=" flex flex-row">
          <div className="w-[270px] h-[124px] flex flex-col gap-4 mr-[59px]">
            <TbTruckDelivery className="w-6 h-6" />
            <h2 className="text-xl">Next day as standard</h2>
            <p className="text-base">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="w-[266px] h-[124px] flex flex-col gap-4 mr-[58px]">
            <IoIosCheckmarkCircleOutline className="w-6 h-6" />
            <h2 className="text-xl">Made by true artisans</h2>
            <p className="text-base">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="w-[235px] h-[124px] flex flex-col gap-4 mr-[91px]">
            <PiCreditCardLight className="w-6 h-6" />
            <h2 className="text-xl">Unbeatable prices</h2>
            <p className="text-base">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
          <div className="w-[265px] h-[124] flex flex-col gap-[13px]">
            <LuSprout className="w-6 h-6" />
            <h2 className="text-xl">Recycled packaging</h2>
            <p className="text-base">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>

      {/* Product Listing Section */}

      <div className="h-[761px] w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-start font-[Clash Display]">
        <h1 className=" text-[32px] font-normal mt-20 mb-[33px]">
          New Ceramics
        </h1>

        <div className="flex flex-row justify-center gap-5">
          <div className="flex flex-col gap-6">
            <Image
              src="/images/products/Chair.png"
              alt="Dandy Chair"
              width={305}
              height={375}
            />
            <div className="flex flex-col gap-2">
              <p>The Dandy Chair</p>
              <p>£250</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Image
              src="/images/products/Vase.png"
              alt="Rustic Vase"
              width={305}
              height={375}
            />
            <div className="flex flex-col gap-2">
              <p>Rustic Vase Set</p>
              <p>£155</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Image
              src="/images/products/Silky-vase.png"
              alt="Silky Vase"
              width={305}
              height={375}
            />
            <div className="flex flex-col gap-2">
              <p>The Silky Vase</p>
              <p>£125</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Image
              src="/images/products/Lamp.png"
              alt="Lucy Lamp"
              width={305}
              height={375}
            />
            <div className="flex flex-col gap-2">
              <p>The Lucy Lamp</p>
              <p>£399</p>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <button className="bg-[#F9F9F9] w-[170px] h-14 text-center text-base font-normal mt-[35px]">
            View Collection
          </button>
        </div>
      </div>

{/* Popular Products Section */}

      <div className="h-[744px] flex flex-col w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 font-[Clash Display]">

       <section className="mt-20  mb-[33px]">
        <h1 className="text-[32px] font-normal">Our popular products</h1>
       </section>
       <section className="flex flex-row gap-5 justify-center">
        <div className="flex flex-col gap-6">
          <Image src="/images/products/Sofa.png" alt="Sofa" width={630} height={375}/>
          <div className="flex flex-col gap-2">
            <p>The Poplar suede sofa</p>
            <p>£980</p>
          </div>
          </div>
        <div className="flex flex-col gap-6">
          <Image src="/images/products/Chair.png" alt="dandy chair" width={305} height={375}/>
          <div className="flex flex-col gap-2">
            <p>The Dandy chair</p>
            <p>£250</p>
          </div>
          </div>
        <div className="flex flex-col gap-6">
          <Image src="/images/products/Chair-2.png" alt="The dandy chair" width={305} height={375}/>
          <div className="flex flex-col gap-2">
            <p>The Dandy chair</p>
            <p>£250</p>
          </div>
          </div>
       </section>
       <section className="flex justify-center items-center mt-[42px]">
        <button className="bg-[#F9F9F9] w-[170px] h-14 text-center">View Collection</button>
       </section>

      </div>

      <EmailSignup/>
      <Features/>
      <Footer/>
    </div>
  );
}