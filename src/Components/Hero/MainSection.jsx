import HourlyForecast from "./HourlyForecast";

import SunIcon from "../../assets/images/icon-sunny.webp";
import DrizzleIcon from "../../assets/images/icon-drizzle.webp";
import FogIcon from "../../assets/images/icon-fog.webp";
import OvercastIcon from "../../assets/images/icon-overcast.webp";
import PartCloudIcon from "../../assets/images/icon-partly-cloudy.webp";
import RainIcon from "../../assets/images/icon-rain.webp";
import StormIcon from "../../assets/images/icon-storm.webp";
import SnowIcon from "../../assets/images/icon-snow.webp";

export default function MainSection({ current, loading }) {
  if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;
  if (!current) return null;

  // const date = new Date(current.time).toLocaleDateString(undefined, {
  //   weekday: "long",
  //   month: "long",
  //   day: "numeric",
  //   year: "numeric",
  // });
  return (
    <main className="main__section">
      <section className="hero__section">
        <div className="weather__box">
          <div className="weather__box--text">
            <p className="text-country">
              {current.name}, {current.country}
            </p>
            <p className="text-date">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="weather__box--detail">
            <img src={current.icon} />
            <p className="text-temp">{current.temp}</p>
          </div>
        </div>
      </section>

      <section className="weather__tiles">
        <div className="card-grid">
          <div className="card">
            <p className="temp-state">Feels like</p>
            <p className="temp-number">{current.temp}</p>
          </div>
          <div className="card">
            <p className="temp-state">Humidity</p>
            <p className="temp-number">64</p>
          </div>
          <div className="card">
            <p className="temp-state">Wind</p>
            <p className="temp-number">64</p>
          </div>
          <div className="card">
            <p className="temp-state">Precipitation</p>
            <p className="temp-number">64</p>
          </div>
        </div>
      </section>
      <section className="weather__daily--forecast">
        <h2 className="temp-title">Daily forecast</h2>
        <div className="card-grid">
          <div className="card">
            <p className="temp-day">Tue</p>
            <img src={DrizzleIcon} className="temp-img" />
            <div className="temp-numbers">
              <p className="temp-number">64</p>
              <p className="temp-number">64</p>
            </div>
          </div>
          <div className="card">
            <p className="temp-day">Wed</p>
            <img src={RainIcon} className="temp-img" />
            <div className="temp-numbers">
              <p className="temp-number">64</p>
              <p className="temp-number">64</p>
            </div>
          </div>
          <div className="card">
            <p className="temp-day">Thur</p>
            <img src={StormIcon} className="temp-img" />
            <div className="temp-numbers">
              <p className="temp-number">64</p>
              <p className="temp-number">64</p>
            </div>
          </div>
          <div className="card">
            <p className="temp-day">Fri</p>
            <img src={FogIcon} className="temp-img" />
            <div className="temp-numbers">
              <p className="temp-number">64</p>
              <p className="temp-number">64</p>
            </div>
          </div>
          <div className="card">
            <p className="temp-day">Sat</p>
            <img src={OvercastIcon} className="temp-img" />
            <div className="temp-numbers">
              <p className="temp-number">64</p>
              <p className="temp-number">64</p>
            </div>
          </div>
          <div className="card">
            <p className="temp-day">Sun</p>
            <img src={PartCloudIcon} className="temp-img" />
            <div className="temp-numbers">
              <p className="temp-number">64</p>
              <p className="temp-number">64</p>
            </div>
          </div>
          <div className="card">
            <p className="temp-day">Mon</p>
            <img src={SunIcon} className="temp-img" />
            <div className="temp-numbers">
              <p className="temp-number">64</p>
              <p className="temp-number">64</p>
            </div>
          </div>
        </div>
      </section>

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
