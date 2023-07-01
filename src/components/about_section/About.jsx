import man from "./imgs/man.png"

const AboutSec = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* bottom */}
        <div className=" flex-wrap flex items-center justify-between">
          {/* left */}
          <div  data-aos = "fade-right" className="md:w-[48%] w-full">
            {/* title */}
            <div className=" mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#C778DD]">#</span>about-me
                </div>
                <div className="line w-1/3 h-px bg-[#C778DD]"></div>
              </div>
            </div>
            {/* disc */}
            <p className="text-[#ABB2BF] ">
                        Hello, i’m Emmanuel Michoti!
                        <br />
                        <br />
                        I am a full-stack developer located in Nairobi, Kenya. My expertise lies in creating responsive websites from the ground up and transforming them into contemporary, user-friendly web experiences.
                        <br />
                        <br />
                        Channeling my creativity and knowledge into website development has been my passion. I have been assisting numerous clients in establishing their online presence. I am constantly eager to learn about the latest technologies and frameworks to enhance my skills further.
                    </p>
            {/* button */}
            <div className="mt-7">
              <a
                href="#"
                className=" duration-150 hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white "
              >
                <button>Read more -{">"}</button>
              </a>
            </div>
          </div>
          {/* right */}
          <div  data-aos = "fade-left" className=" mx-auto">
            <img className="mx-auto" src={man} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
