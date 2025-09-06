import { SectionTitle } from "./section-title"
import { ContactForm } from "./contact-form"
import { LinkedInIcon } from "./icons/linkedin-icon"

const ContactSection = () => {
  return (
    <div className="contact-section">
      <SectionTitle title="Contact Me" />
      <div className="contact-info">
        <p>Email: enocholuwumi@example.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/enoch-oluwumi-62aa34382/" target="_blank" rel="noopener noreferrer">
            Connect with me
          </a>
        </p>
        <LinkedInIcon />
      </div>
      <ContactForm />
    </div>
  )
}

export default ContactSection
