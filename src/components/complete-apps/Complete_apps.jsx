import React from 'react'
// imgs
import first from "./imgs/laravel-ecomm-api-img.jpg";
import second from "./imgs/react-material-dashboard.jpg";
import third from "./imgs/gym-page.png";
import Project_card from '../project_card/Project_card';

const Complete_apps = () => {
  const projects = [
    {
      img: first,
      langs: ["Laravel", "pusher", "MySQL", "Filament", "Tailwindcss"],
      title: "Ecommerce API",
      disc: "The API leverages Laravel Scout for search, Pusher for websockets, and Filament for an admin panel, enabling seamless integration, real-time communication, and user-friendly management. ",
      link: "https://github.com/michoti/ecommerceapi",
    },
    {
      img: second,
      langs: ["React", "MUI", "Tailwindcss", "Node.js"],
      title: "Admin Dashboard",
      disc: "This dashboard is developed using ReactJS, MUI design, and Tailwind CSS, featuring a dynamic theme-changing functionality for a personalized user experience. ",
      link: "https://m-ui-dashboard.vercel.app/",
    },
    {
      img: third,
      langs: ["React", "TypeScript", "Tailwind"],
      title: "Gym Application",
      disc: "This gym web application, created with React, TypeScript, and Tailwind CSS, showcases an enticing design, providing visitors with a captivating introduction to the gym's services, features, and motivating visuals, encouraging them to join.",
      link: "https://gym-app-em.vercel.app/",
    },
  ];
    return (
        <div>
            <div className=" pt-[114px] px-5 max-w-[1560px] mx-auto">
                {/* top / title */}
                <div className="">
                    {/* projects */}
                    <div className=" text-white font-bold text-[32px]">
                        <span className=" text-[#C778DD]">/</span>
                        <span>projects</span>
                    </div>
                    {/* list */}
                    <div className=" text-white mt-[14px]">List of my projects</div>
                </div>
                {/* completed tasks */}
                <div className="">
                    {/* title */}
                    <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
                        <span className=" text-[#C778DD]">#</span>
                        <span>complete-apps</span>
                    </div>
                    {/* projects */}
                    <div className="flex flex-wrap justify-start  gap-4 my-12">
                        {/* cards */}
                        {projects.map(({ img, langs, title, disc }) => {
                            return (
                                <>
                                    <Project_card
                                        img={img}
                                        langs={langs}
                                        title={title}
                                        disc={disc}
                                        link={link}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Complete_apps