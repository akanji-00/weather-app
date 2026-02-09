import React from "react";

export default function DailyForecast({ daily, unitSystem }) {
  if (!daily.length) return null;

  const todayIndex = 0;

  const orderedDaily = [
    ...daily.slice(todayIndex),
    ...daily.slice(0, todayIndex),
  ];

  return (
    <section className="weather__daily--forecast">
      <h2 className="temp-title">Daily forecast</h2>
      <div className="card-grid">
        {orderedDaily.map((d, i) => (
          <div key={i} className="card">
            <p className="temp-day">{d.day}</p>
            <img src={d.icon} className="temp-img" />
            <div className="temp-numbers">
              <p className="temp-number">
                {unitSystem === "imperial"
                  ? Math.round((d.max * 9) / 5 + 32)
                  : d.max}
                °
              </p>
              <p className="temp-number">
                {unitSystem === "imperial"
                  ? Math.round((d.min * 9) / 5 + 32)
                  : d.min}
                °
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
