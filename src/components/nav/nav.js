import { route }from "../../js/routing/router";

const Nav = () => {
  const navContainer = document.createElement('div');
  navContainer.classList.add('nav-container');
  
  const navLinksContainer = document.createElement('ul');

  const homeLink = createNavLink('HOME', '/');
  navLinksContainer.appendChild(homeLink);

  const menuLink = createNavLink('MENU', '/menu');
  navLinksContainer.appendChild(menuLink);

  const contactLink = createNavLink('CONTACT', '/contact');
  navLinksContainer.appendChild(contactLink);

  navContainer.appendChild(navLinksContainer);

  document.getElementById('nav').appendChild(navContainer);
}

const createNavLink = (linkText, path) => {
  const navLinkItem = document.createElement('li');
  const linkEl = document.createElement('a');
  linkEl.href = path;
  linkEl.onclick = route;
  linkEl.textContent = linkText;
  navLinkItem.appendChild(linkEl);
  return navLinkItem;
}

export default Nav;