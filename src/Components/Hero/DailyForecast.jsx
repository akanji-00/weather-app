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
              <p className="temp-number">{d.max}°</p>
              <p className="temp-number">{d.min}°</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
