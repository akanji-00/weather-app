export default function WeatherTiles({ current }) {
  if (!current) return null;
  return (
    <section className="weather__tiles">
      <div className="card-grid">
        <div className="card">
          <p className="temp-state">Feels like</p>
          <p className="temp-number">{current.temp}°</p>
        </div>
        <div className="card">
          <p className="temp-state">Humidity</p>
          <p className="temp-number">--</p>
        </div>
        <div className="card">
          <p className="temp-state">Wind</p>
          <p className="temp-number">{current.wind}</p>
        </div>
        <div className="card">
          <p className="temp-state">Precipitation</p>
          <p className="temp-number">--</p>
        </div>
      </div>
    </section>
  );
}
