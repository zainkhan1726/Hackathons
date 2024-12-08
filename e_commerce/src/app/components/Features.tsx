import Image from "next/image";

export default function Features() {
    return (
      <div className="h-[603px] w-full flex flex-row">
        <div className="w-[720px] flex flex-col mt-[72px] ml-[84px] gap-44">
          <div className="flex flex-col gap-[25px] w-[536px] h-[225px]">
            <h1 className="font-normal text-2xl">
              From a studio in London to a global brand with <br /> over 400 outlets
            </h1>
            <p className="font-[Satoshi]">
              When we started Avion, the idea was simple. Make high quality
              furniture <br /> affordable and available for the mass market. <br /> <br />Handmade,
              and lovingly crafted furniture and homeware is what we live,<br />
              breathe and design so our Chelsea boutique become the hotbed for
              the <br /> London interior design community.
            </p>
          </div>
          <div className="bg-[#F9F9F9] w-[150px] h-14 border flex items-center justify-center">
            <button>Get in touch</button>
          </div>
        </div>
            <Image src="/images/hero_img/Features-img.png" alt="feature image" width={720} height={603}/>
      </div>
    );
}