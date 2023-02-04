import { createFormField } from "../../utilities/forms.utils";
import { createButton } from "../../utilities/buttons.utils";

const ContactForm = () => {
  const container = document.createElement('div');

  const heading = document.createElement('h3');
  heading.textContent = 'GET IN TOUCH';
  container.appendChild(heading);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
  }

  const form = document.createElement('form');
  form.onsubmit = handleSubmit;
  container.appendChild(form);

  const name = createFormField(
    'text', 
    'Name', 
    'name', 
    {required: true}
  );
  form.appendChild(name);

  const email = createFormField(
    'email', 
    'Email', 
    'email', 
    {required: true}
  );
  form.appendChild(email);

  const phone = createFormField(
    'tel', 
    'Phone', 
    'phone', 
    {required: true}
  );
  form.appendChild(phone);

  const message = createFormField(
    'text', 
    'Message', 
    'message', 
    {}
  );
  form.appendChild(message);

  const submitBtn = createButton(
    'SUBMIT', 
    {type: 'submit'}
  );
  form.appendChild(submitBtn);

  return container;
};

export default ContactForm;