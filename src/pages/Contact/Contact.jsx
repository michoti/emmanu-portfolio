import { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const validate = () => {
    const errors = {};

    if (!formData.fullname) {
      errors.fullname = 'FullName is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    } else if (formData.message.length < 3) {
      errors.message = 'Message must be at least one word';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      // Perform form submission (e.g., send data to server)
    } else {
      setIsSubmitted(false);
    }
  }

  
  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" onSubmit={handleSubmit}>

          <div className="input-wrapper">
            <input 
              type="text" 
              name="fullname"
              value={formData.fullname}
              onChange={handleChange} 
              className="form-input" 
              placeholder="Full name" 
              required 
            />

            <input 
               type="email" 
               name="email"
               value={formData.email}
               onChange={handleChange} 
               className="form-input" 
               placeholder="Email address" 
               required 
              />
          </div>

          <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange} 
              className="form-input" 
              placeholder="Your Message" 
              required 
            ></textarea>

          <button className="form-btn" type="submit">
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>

        </form>

      </section>

    </section>
  );
};

export default Contact;
