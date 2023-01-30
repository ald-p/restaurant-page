

export const createLinkButton = (text, path) => {
  const buttonEl = document.createElement('a');
  buttonEl.classList.add('btn');
  buttonEl.setAttribute('href', path);
  buttonEl.setAttribute('role', 'button');
  buttonEl.textContent = text;

  return buttonEl;
}