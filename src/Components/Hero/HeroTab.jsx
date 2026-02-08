import React from "react";

export default function HeroTab({ loading, current }) {
  if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;
  if (!current) return null;
  return (
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
          <p className="text-temp">{current.temp}°</p>
        </div>
      </div>
    </section>
  );
}
