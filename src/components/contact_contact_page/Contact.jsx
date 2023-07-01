import React from 'react'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
    return (
        <div className='px-5 max-w-[1560px] min-h-screen mx-auto pt-20 py-10'>
            {/* title */}
            <div className=" text-white font-semibold text-[32px] mt-12">
                <span className=' text-[#C778DD]'>/</span>
                contacts</div>
            {/* h2 title */}
            <div className=" text-white mt-[14px] mb-[46px]">Who am i?</div>
            {/* flex main */}
            <div className="flex justify-between flex-wrap gap-10">
                {/* left side */}
                <div className="  md:w-3/5 w-full">
                    {/* some text */}
                    <div className=" text-[#ABB2BF] font-medium">
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                    </div>
                </div>
                {/* right side */}
                <div className=" flex gap-3">
                    {/* boxes/flex */}
                    {/* 1 */}
                    <div className=" p-4 border border-[#ABB2BF]">
                        <h2 className=' text-white font-medium pb-2'>Support me here</h2>
                        <span className='flex gap-1 items-center text-[#ABB2BF]'><PhoneIcon className='h-6 w-6' />+254-705-223-948</span>
                    </div>
                    {/* 2 */}
                    <div className=" p-4 border border-[#ABB2BF]">
                        <h2 className=' text-white font-medium pb-4 '>Message me here</h2>
                        <div className=" text-[#ABB2BF]">
                            {/* contacts */}
                            <div className=" flex gap-1 items-center">
                                {/* img */}
                                <FontAwesomeIcon icon={faDiscord} className='h-8 w-8' />
                                {/* text */}
                                <span>Emmanuel#1234</span>
                            </div>
                            {/* contacts */}
                            <div className=" flex gap-1 items-center">
                                {/* img */}
                                <FontAwesomeIcon icon={faEnvelope} className='h-8 w-8' />
                                {/* text */}
                                <span>emichoti2660@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* all media */}
            <div className=" mt-6 mb-5x">
                {/* title */}
                <div className=" text-[32px] font-medium text-white"><span className='text-[#C778DD]'>#</span>all-media</div>
                {/* media */}
                <div className=" flex gap-6">
                    <a href="https://twitter.com/Michoti1">
                        <div className=" text-[#ABB2BF] flex items-center gap-1">
                                <FontAwesomeIcon icon={faTwitter} className='h-8 w-8' />
                                <span>@Michoti1</span>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/emmanuel-michoti-764427189/">
                        <div className=" text-[#ABB2BF] flex items-center gap-1">
                            <FontAwesomeIcon icon={faLinkedin} className='h-8 w-8' />
                            <span>@emmanuel</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact


// We completed our project :)