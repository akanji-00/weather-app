import Sun from "../assets/images/icon-sunny.webp";
import PartlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import Overcast from "../assets/images/icon-overcast.webp";
import Fog from "../assets/images/icon-fog.webp";
import Drizzle from "../assets/images/icon-drizzle.webp";
import Rain from "../assets/images/icon-rain.webp";
import Snow from "../assets/images/icon-snow.webp";
import Storm from "../assets/images/icon-storm.webp";

export function getWeatherIcon(code) {
  //Sun
  if (code === 0) return Sun;

  //Partly-cloudy
  if (code === 1 || code === 2) return PartlyCloudy;

  //Overcast
  if (code === 3) return Overcast;

  //Fog
  if (code === 45 || code === 48) return Fog;

  //Drizzle
  if (code === 51 || code === 53 || code === 55 || code === 56 || code === 57)
    return Drizzle;

  //Rain
  if (
    code === 61 ||
    code === 63 ||
    code === 65 ||
    code === 66 ||
    code === 67 ||
    code === 80 ||
    code === 81 ||
    code === 82
  )
    return Rain;

  //Snow
  if (
    code === 71 ||
    code === 73 ||
    code === 75 ||
    code === 77 ||
    code === 85 ||
    code === 86
  )
    return Snow;

  //Storm
  if (code === 95 || code === 96 || code === 99) return Storm;

  //Fallback
  return Sun;
}
