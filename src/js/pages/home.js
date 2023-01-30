import HomeLanding from "../../components/home/homepage-landing/homepage-landing";
import HomeContent from "../../components/home/home-content/home-content";

const Home = () => {
  const container = document.createElement('div');
  container.appendChild(HomeLanding());

  return container;
}

export default Home;