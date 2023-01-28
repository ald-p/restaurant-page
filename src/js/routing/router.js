import Home from '../pages/home';
import Menu from '../pages/menu';
import Contact from '../pages/contact';
import Reservations from '../pages/reservations';

const route = (e) => {
  e.preventDefault();
  window.history.pushState({}, "", e.target.href);
  handleLocation();
}

const routes = {
  "/": Home(),
  "/menu": Menu(),
  "/reservations": Reservations(),
  "/contact": Contact()
};

const handleLocation = () => {
  const path = window.location.pathname;
  const content = routes[path];
  document.getElementById('page-content').replaceChildren(content);
}

window.onpopstate = handleLocation;

export { route, handleLocation };