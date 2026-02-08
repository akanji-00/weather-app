import React from "react";

export default function HourlyForecast({ hourly }) {
  return (
    <>
      <div className="card-grid">
        {hourly.map((h, i) => (
          <div key={i} className="hour-card">
            <div className="temp-time">
              <img src={h.icon} className="temp-img" />
              <p className="temp-time--digit">{h.time}</p>
            </div>
            <p className="temp-number">{h.temp}</p>
          </div>
        ))}
      </div>
    </>
  );
}

{
  /* <div className="hour-card">
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
        </div> */
}
