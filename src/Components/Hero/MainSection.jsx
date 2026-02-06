import WeatherIcon from "../../assets/images/icon-sunny.webp";

export default function MainSection() {
  return (
    <main className="main__section">
      <section className="hero__section">
        <div className="weather__box">
          <div className="weather__box--text">
            <p className="text-country">Berlin, Germany</p>
            <p className="text-date">Tuesday, Aug 5, 2025</p>
          </div>
          <div className="weather__box--detail">
            <img src={WeatherIcon} />
            <p className="text-temp">20</p>
          </div>
        </div>
      </section>

      <section className="weather__tiles">Weather Tiles</section>
      <section className="weather__daily--forecast">
        Weather Daily Forecast
      </section>
      <section className="weather__hourly--forecast">
        Weather Hourly Forecast
      </section>
    </main>
  );
}
