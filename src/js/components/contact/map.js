import { createNewMap } from "../../utilities/google-maps.utils";

const Map = () => {
  const mapEl = document.createElement('div');
  mapEl.style.height = '100%';
  mapEl.style.width = '100%';
  mapEl.style.position = 'absolute';

  const mapCanvas = document.createElement('div');
  mapCanvas.id = 'map-canvas';
  mapCanvas.style.height = '100%';
  mapEl.appendChild(mapCanvas);

  createNewMap();

  return mapEl;
};

export default Map;