import { createLinkButton } from "../../utilities/buttons.utils";

const HomeLanding = () => {
  const container = document.createElement('div');

  const heading = document.createElement('h1');
  heading.textContent = 'Food to break your fast.';
  container.appendChild(heading);

  const buttonGroup = document.createElement('div');
  const menuBtn = createLinkButton('SEE MENU', '/menu');
  const reservationsBtn = createLinkButton('RESERVATIONS', '/reservations');
  buttonGroup.appendChild(menuBtn);
  buttonGroup.appendChild(reservationsBtn);
  container.appendChild(buttonGroup);

  return container;
}

export default HomeLanding;
