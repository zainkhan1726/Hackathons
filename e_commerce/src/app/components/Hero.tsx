import Image from "next/image";

export default function Hero(){
    return (
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-[704px] flex justify-center items-center">

        <div className="h-[584px] flex flex-row mx-20 my-[60px] bg-[#2A254B] text-white">

          <div className="flex flex-col justify-around">
            <div className="w-[513px] h-[187px] flex flex-col gap-[41px] ml-[60px]">
            <h1 className="text-[32px] font-[Clash Display]">The furniture brand for the <br /> future, with timeless designs</h1>
            <button className="bg-[#F9F9F926]  w-[170px] h-14 py-4 text-base font-normal">View Collection</button>
            </div>
            <p className="w-[602px] h-[81px] ml-[60px] mr-[98px] text-lg font-[Satoshi]">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
          <div className="w-[520px] h-[584px]">
            <Image src="/images/hero_img/hero-image.png" alt="Hero Image" width={520} height={584}/>
          </div>
        </div>
      </div>


      
    );
}