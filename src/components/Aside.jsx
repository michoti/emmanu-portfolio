import { BsGithub } from "react-icons/bs";
import { FaDownload, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";

const Aside = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/src/CV.pdf';
    link.download = 'emmanuel-michoti-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <aside className="sidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src={"/images/avatar-1.png"}
              alt="Richard hanrick"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">
              Emmanuel Michoti
            </h1>

            <p className="title">Web developer</p>
            <div className="links">
              <a className="link">
                <FaLinkedin/>                
              </a>
              <a className="link">
                <BsGithub/>                
              </a>
              <a className="link">
                <FaSquareXTwitter/>                
              </a>
            </div>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <GiClawSlashes />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <GiMailbox/>
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:richard@example.com" className="contact-link">
                  emichoti2660@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+254705223948" className="contact-link">
                  +(254) 705223948
                </a>
              </div>
            </li>

            {/* <li className="contact-item">
              <div className="icon-box">
                <GiCalendar/>
               
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="1982-06-23">June 23, 1982</time>
              </div>
            </li> */}

            <li className="contact-item">
              <div className="icon-box">
                <FaLocationDot/>
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Nairobi, Kenya</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
        <div className="download-cv">
          <button 
           onClick={handleDownloadCV}
          className="btn"
          ><span><FaDownload/></span> Download cv</button>
        </div>
      </aside>
  )
}

export default Aside