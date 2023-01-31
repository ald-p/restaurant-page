import { setMultipleAttributes } from "./elements.utils";

export const createLinkButton = (text, path) => {
  let buttonEl = document.createElement('a');
  buttonEl.classList.add('btn');
  buttonEl.textContent = text;
  buttonEl = setMultipleAttributes({href: path, role: 'button'}, buttonEl);
  
  return buttonEl;
}

export const createButton = (text, {...otherAttributes}) => {
  let btn = document.createElement('button');
  btn.textContent = text;
  btn = setMultipleAttributes({...otherAttributes}, btn);

  return btn;
}