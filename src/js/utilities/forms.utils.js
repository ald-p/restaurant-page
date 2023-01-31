import { setMultipleAttributes, createDataList } from "./elements.utils";

export const createFormField = (type, label, id, {...otherAttributes} ) => {
  const fieldContainer = document.createElement('div');
  
  const labelEl = document.createElement('label');
  labelEl.setAttribute('for', id);
  labelEl.textContent = label;
  fieldContainer.appendChild(labelEl);

  let inputEl = document.createElement('input');
  inputEl.setAttribute('type', type);
  inputEl.id = id;
  inputEl = setMultipleAttributes({...otherAttributes}, inputEl);
  
  fieldContainer.appendChild(inputEl);

  return fieldContainer;
}

export const createTimeDataList = (min, max, id) => {
  const minutes = ['00', '30'];
  let timeList = [];
  for (let hour = min; hour <= max; hour++) {
    minutes.forEach( minute => {
      hour < 10 ? timeList.push(`0${hour}:${minute}`) : timeList.push(`${hour}:${minute}`);
    })
  }
  
  const dataListEl = createDataList(timeList, id);

  return dataListEl;
}



