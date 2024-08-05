/* eslint-disable react/no-unescaped-entities */

// import { useEffect, useState } from "react"
// import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Software developer",
    description: "Design, code, test, and maintain software applications or systems to solve problems and meet user needs, ensuring functionality, performance, and reliability throughout the development lifecycle."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Devops engineer",
    description: "I integrate development and operations, automating processes to enhance deployment, scalability, and system reliability for continuous delivery."
  },
  {
    icon: "/images/icon-sys.svg",
    title: "Systems architect",
    description: "Designing and structuring complex systems, ensuring they meet technical requirements, scalability, and integration within the organization."
  },
  {
    icon: "/images/icon-qa.svg",
    title: "Quality Assurance engineer",
    description: "Test software to identify defects, ensure quality, and verify that applications meet specified requirements and standards."
  }
];


const About = () => {
  // const [testimonials , setTestimonials ] = useState([]);
  // useEffect(()=> {
  //   fetch('testimonials.json').then(res => res.json()).then(data => {
  //     console.log(data)
  //     setTestimonials(data)
  //   });
  // }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
          I am a dedicated and innovative fullstack developer with a passion for crafting responsive web applications. With experience
         at Startappzke Ltd, I have developed robust travel insurance platforms using Laravel, enhancing services for domestic clients.
      </p>

      <p>     
          I specialize in eCommerce and business platforms with Laravel and React, managing CI/CD pipelines 
          and project tasks efficiently. My expertise extends to state management, GraphQL, and collaborative Agile methodologies,
          honed through various roles, including at Clifford Technologies and Grafame Tech. I am adept at using tools like Git, Docker,
          and AWS to create optimized solutions tailored to client needs. Committed to continuous learning and teamwork, I strive to 
          bring innovative ideas to life, ensuring user-friendly and efficient web applications. Explore my work and connect with me 
          to discuss how I can contribute to your projects.
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    {/* <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section> */}


    {/* <!--
      - clients
    --> */}

    {/* <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-6-color.png"alt="client logo"/>
          </a>
        </li>

      </ul>

    </section> */}

  </article>
  )
}

export default About