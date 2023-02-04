import { Loader } from "@googlemaps/js-api-loader";

export const createNewMap = () => {
  let map;

  const loader = new Loader({
    apiKey: 'AIzaSyCqxNQOJWkXnuyYB8XFMzcK5Y9U0k0O7-4',
    version: 'weekly'
  });

  loader.load().then(() => {
    map = new google.maps.Map(document.getElementById("map-canvas"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  });
};
