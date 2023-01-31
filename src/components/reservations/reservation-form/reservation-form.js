import { createFormField, createTimeDataList } from "../../../js/utilities/forms.utils";
import { setMultipleAttributes, createDataList } from "../../../js/utilities/elements.utils";
import { createButton } from "../../../js/utilities/buttons.utils";

const ReservationForm = () => {
  const container = document.createElement('div');
  
  const heading = document.createElement('h3');
  heading.textContent = 'BOOK A TABLE';
  container.appendChild(heading);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
  }

  const form = document.createElement('form');
  form.onsubmit = handleSubmit;
  container.appendChild(form);

  const date = createFormField(
    'date', 
    'Date:', 
    'date', 
    {required: true, min: `${new Date().toISOString().split('T')[0]}`}
  );
  form.appendChild(date);

  const time = createFormField(
    'time', 
    'Time:', 
    'time', 
    {required: true, list: "timeData"}
  );
  form.appendChild(time);

  form.appendChild(createTimeDataList(9,20,'timeData'));

  const partySize = createFormField(
    'number', 
    'Party Size:', 
    'party-size', 
    {min: "0", max: "10", required: true, list: 'party-size-data'}
  );
  form.appendChild(partySize);

  form.appendChild(createDataList([...Array(11).keys()], 'party-size-data'));

  const phoneNumber = createFormField(
    'tel',
    'Phone Number:',
    'phone-num',
    {pattern: "[0-9]{10}", required: true}
  );
  form.appendChild(phoneNumber);

  const submitBtn = createButton(
    'RESERVE', 
    {type: 'submit'}
  );
  form.appendChild(submitBtn);

  return container;
}

export default ReservationForm;

