import HeroTab from "./HeroTab";
import WeatherTiles from "./WeatherTiles";
import DailyForecast from "./DailyForecast";
import HourlyDropdown from "./HourlyDropdown";
import HourlyForecast from "./HourlyForecast";

import SunIcon from "../../assets/images/icon-sunny.webp";
import DrizzleIcon from "../../assets/images/icon-drizzle.webp";
import FogIcon from "../../assets/images/icon-fog.webp";
import OvercastIcon from "../../assets/images/icon-overcast.webp";
import PartCloudIcon from "../../assets/images/icon-partly-cloudy.webp";
import RainIcon from "../../assets/images/icon-rain.webp";
import StormIcon from "../../assets/images/icon-storm.webp";
import SnowIcon from "../../assets/images/icon-snow.webp";

export default function MainSection({
  current,
  loading,
  daily,
  hourly,
  unitSystem,
}) {
  if (!current) return null;
  // const date = new Date(current.time).toLocaleDateString(undefined, {
  //   weekday: "long",
  //   month: "long",
  //   day: "numeric",
  //   year: "numeric",
  // });
  return (
    <main className="main__section">
      <HeroTab loading={loading} current={current} unitSystem={unitSystem} />

      <WeatherTiles current={current} />
      <DailyForecast daily={daily} />

      <section className="weather__hourly--forecast">
        <HourlyDropdown />
        <HourlyForecast hourly={hourly} />
      </section>
    </main>
  );
}
