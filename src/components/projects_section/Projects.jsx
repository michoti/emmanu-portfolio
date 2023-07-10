import Project_card from "../project_card/Project_card";
import first from "./imgs/laravel-ecomm-api-img.jpg";
import second from "./imgs/react-material-dashboard.jpg";
import third from "./imgs/Rectangle 22 (1).png";
import { NavLink } from "react-router-dom";

const Projects = () => {
  // date
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
      langs: ["html", "css", "javascript", "Node.js", "python"],
      title: "Kahoot Answers Viewer",
      disc: "Get answers to your kahoot quiz ",
      link: "#",
    },
  ];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div data-aos="fade-down" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <NavLink to="/projects">
              <a>
                <span>View all ~~&gt;</span>
              </a>
            </NavLink>            
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc, link }) => {
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
    </>
  );
};

export default Projects;
