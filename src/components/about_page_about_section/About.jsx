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
                        I am a full-stack developer located in Nairobi, Kenya. My expertise lies in creating responsive websites from the ground up and transforming them into contemporary, user-friendly web experiences.
                        <br />
                        <br />
                        Channeling my creativity and knowledge into website development has been my passion. I have been assisting numerous clients in establishing their online presence. I am constantly eager to learn about the latest technologies and frameworks to enhance my skills further.
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