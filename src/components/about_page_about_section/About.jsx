import React from 'react'
import man from "./imgs/man.png"

const About = () => {
    return (
        <div className='px-5 max-w-[1560px] mx-auto pt-20 py-10'>
            {/* title */}
            <div className=" mb-12">
                <div className=" text-white w-2/3 font-semibold text-[32px]">
                    <div className="">
                        <span className="text-[#C778DD]">/</span>
                        about-me
                    </div>
                    <div className=" text-white text-base font-normal mt-[14px]">
                        Who am i?
                    </div>
                </div>
            </div>
            <div className=" flex-wrap flex items-center justify-between">
                {/* left */}
                <div className="md:w-[48%] w-full">
                    {/* disc */}
                    <p className="text-[#ABB2BF] ">
                        Hello, i’m Emmanuel Michoti!
                        <br />
                        <br />
                        I’m a self-taught front-end developer based in Nairobi, Kenya. I
                        can develop responsive websites from scratch and raise them into
                        modern user-friendly web experiences.
                        <br />
                        <br />
                        Transforming my creativity and knowledge into a websites has been
                        my passion. I have been helping various clients to
                        establish their presence online. I always strive to learn about
                        the newest technologies and frameworks.
                    </p>
                </div>
                {/* right */}
                <div className=" mx-auto">
                    <img className="mx-auto" src={man} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About