import ContactForm from '../components/contact/contact-form';
import ContactInfo from '../components/contact/contact-info';
import Map from '../components/contact/map';

const Contact = () => {
  const contactContent = document.createElement('div');

  const heading = document.createElement('h1');
  heading.textContent = 'CONTACT US';
  contactContent.appendChild(heading);

  contactContent.appendChild(ContactForm());
  contactContent.appendChild(ContactInfo());
  contactContent.appendChild(Map());

  return contactContent;
}

export default Contact;