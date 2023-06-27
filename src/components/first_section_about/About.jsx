import "./about.css";
import man from "./imgs/man.png"
import quote from "./imgs/quote.png"

const About = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-40 flex items-center justify-between flex-wrap">
        <div data-aos="fade-right" className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            Emmanuel is a <span className="text-[#C778DD]">Fullstack developer</span> that is an innovative optimized solution seeker and adept at building responsive web applications.
          </h1>
          <p className="text-[#ABB2BF] my-6">
            He crafts responsive websites where technologies meet creativity
          </p>
          {/* *
          *
          * The button below is to be changed
          *
          * */}
          <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
            Contact me
          </button>
        </div>
        <div  data-aos="fade-left" data-aos-delay="400" className="mx-auto">
          <div className="">
            <img src={man} alt="" />
          </div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#C778DD]"></div>
            <div className="">
              Currently working on a <span className="text-white">Fitness app</span>
            </div>
          </div>
        </div>
      </div>
      <div  data-aos="fade-up" className=" px-5 py-10">
        <img className="mx-auto" src={quote} alt="" />
      </div>
    </>
  );
};

export default About;
