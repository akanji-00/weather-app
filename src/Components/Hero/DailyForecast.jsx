import React from "react";

export default function DailyForecast({ daily }) {
  if (!daily.length) return null;
  return (
    <section className="weather__daily--forecast">
      <h2 className="temp-title">Daily forecast</h2>
      <div className="card-grid">
        {daily.map((d, i) => (
          <div key={i} className="card">
            <p className="temp-day">{d.day}</p>
            <img src={d.icon} className="temp-img" />
            <div className="temp-numbers">
              <p className="temp-number">{d.max}</p>
              <p className="temp-number">{d.min}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

{
  /* <div className="card">
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
        </div> */
}
