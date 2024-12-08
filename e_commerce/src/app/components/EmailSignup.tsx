export default function EmailSignup() {
    return (
      <div className="bg-[#F9F9F9] h-[481px] w-full   flex flex-col justify-center items-center">
        <div className="bg-white flex flex-col justify-center items-center w-11/12 h-[364px]">
          <div className="flex flex-col gap-4 justify-center">
          <h1 className="text-4xl leading-[50.4px]">Join the club and get the benefits</h1>
          <p className="text-base font-normal text-center">
            Sign up for our newsletter and receive exclusive offers on new <br />
            ranges, sales, pop up stores and more
          </p>
          </div>
          <div className="bg-[#F9F9F9] flex flex-row mt-[72px] w-[472px] h-14 justify-between items-center">
            <p className="ml-8 opacity-50">your@email.com</p>
            <button className="bg-[#2A254B] text-white w-[118px] h-14">Sign Up</button>
          </div>
        </div>
      </div>
    );
}