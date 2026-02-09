export default function WeatherTiles({ current, unitSystem }) {
  if (!current) return null;

  const displayTemp =
    unitSystem === "imperial"
      ? Math.round((current.temp * 9) / 5 + 32)
      : current.temp;

  const displayPrecip =
    unitSystem === "imperial"
      ? (current.precipitation * 0.0393701).toFixed(0)
      : current.precipitation;

  const displayWind =
    unitSystem === "imperial"
      ? (current.wind * 0.621371).toFixed(0)
      : current.wind.toFixed(0);
  return (
    <section className="weather__tiles">
      <div className="card-grid">
        <div className="card">
          <p className="temp-state">Feels like</p>
          <p className="temp-number">{displayTemp}°</p>
        </div>
        <div className="card">
          <p className="temp-state">Humidity</p>
          <p className="temp-number">{current.humidity}%</p>
        </div>
        <div className="card">
          <p className="temp-state">Wind</p>
          <p className="temp-number">
            {displayWind}
            {unitSystem === "imperial" ? " mph" : " km/h"}
          </p>
        </div>
        <div className="card">
          <p className="temp-state">Precipitation</p>
          <p className="temp-number">
            {displayPrecip}
            {unitSystem === "imperial" ? " in" : " mm"}
          </p>
        </div>
      </div>
    </section>
  );
}
