import React from "react";

export default function HeroTab({ loading, current, unitSystem }) {
  if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;
  if (!current) return null;

  const displayTemp =
    unitSystem === "imperial"
      ? Math.round((current.temp * 9) / 5 + 32)
      : current.temp;
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
          <p className="text-temp">{displayTemp}°</p>
        </div>
      </div>
    </section>
  );
}
