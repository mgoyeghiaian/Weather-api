import {
  default as clear,
  default as unknown,
} from "../weather-icons/clear.svg";
import drizzle from "../weather-icons/drizzle.svg";
import fog from "../weather-icons/fog.svg";
import mostlycloudy from "../weather-icons/mostlycloudy.svg";
import partlycloudy from "../weather-icons/partlycloudy.svg";
import rain from "../weather-icons/rain.svg";
import snow from "../weather-icons/snow.svg";
import storm from "../weather-icons/storm.svg";
const getImage = (id) => {
  let source = 0;
  if (id <= 300) {
    source = storm;
  } else if (id > 300 && id <= 499) {
    source = drizzle;
  } else if (id > 500 && id <= 599) {
    source = rain;
  } else if (id > 600 && id <= 699) {
    source = snow;
  } else if (id > 700 && id <= 799) {
    source = fog;
  } else if (id === 800) {
    source = clear;
  } else if (id === 801) {
    source = partlycloudy;
  } else if (id > 800 && id <= 805) {
    source = mostlycloudy;
  } else {
    source = unknown;
  }
  return source;
};

export default getImage;
