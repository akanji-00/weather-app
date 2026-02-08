import HeroTab from "./HeroTab";
import WeatherTiles from "./WeatherTiles";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

import SunIcon from "../../assets/images/icon-sunny.webp";
import DrizzleIcon from "../../assets/images/icon-drizzle.webp";
import FogIcon from "../../assets/images/icon-fog.webp";
import OvercastIcon from "../../assets/images/icon-overcast.webp";
import PartCloudIcon from "../../assets/images/icon-partly-cloudy.webp";
import RainIcon from "../../assets/images/icon-rain.webp";
import StormIcon from "../../assets/images/icon-storm.webp";
import SnowIcon from "../../assets/images/icon-snow.webp";

export default function MainSection({ current, loading, daily }) {
  if (!current) return null;
  // const date = new Date(current.time).toLocaleDateString(undefined, {
  //   weekday: "long",
  //   month: "long",
  //   day: "numeric",
  //   year: "numeric",
  // });
  return (
    <main className="main__section">
      <HeroTab loading={loading} current={current} />

      <WeatherTiles current={current} />
      <DailyForecast daily={daily} />

      <section className="weather__hourly--forecast">
        <HourlyForecast />

        <div className="card-grid">
          <div className="hour-card">
            <div className="temp-time">
              <img src={PartCloudIcon} className="temp-img" />
              <p className="temp-time--digit">3 PM</p>
            </div>
            <p className="temp-number">64</p>
          </div>
          <div className="hour-card">
            <div className="temp-time">
              <img src={SunIcon} className="temp-img" />
              <p className="temp-time--digit">4 PM</p>
            </div>
            <p className="temp-number">64</p>
          </div>
          <div className="hour-card">
            <div className="temp-time">
              <img src={DrizzleIcon} className="temp-img" />
              <p className="temp-time--digit">5 PM</p>
            </div>
            <p className="temp-number">64</p>
          </div>
          <div className="hour-card">
            <div className="temp-time">
              <img src={RainIcon} className="temp-img" />
              <p className="temp-time--digit">6 PM</p>
            </div>
            <p className="temp-number">64</p>
          </div>
          <div className="hour-card">
            <div className="temp-time">
              <img src={OvercastIcon} className="temp-img" />
              <p className="temp-time--digit">7 PM</p>
            </div>
            <p className="temp-number">64</p>
          </div>
          <div className="hour-card">
            <div className="temp-time">
              <img src={FogIcon} className="temp-img" />
              <p className="temp-time--digit">8 PM</p>
            </div>
            <p className="temp-number">64</p>
          </div>
          <div className="hour-card">
            <div className="temp-time">
              <img src={SnowIcon} className="temp-img" />
              <p className="temp-time--digit">9 PM</p>
            </div>
            <p className="temp-number">64</p>
          </div>
          <div className="hour-card">
            <div className="temp-time">
              <img src={StormIcon} className="temp-img" />
              <p className="temp-time--digit">10 PM</p>
            </div>
            <p className="temp-number">64</p>
          </div>
        </div>
      </section>
    </main>
  );
}
