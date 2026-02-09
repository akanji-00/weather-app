import { useState, useEffect } from "react";
import HourlyDropdown from "./HourlyDropdown";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function HourlyForecast({ hourly, unitSystem }) {
  const [day, setDay] = useState(null);

  useEffect(() => {
    const todayIndex = new Date().getDay();
    setDay(DAYS[todayIndex]);
  }, []);

  if (!hourly || !day) return null;

  const selectedDayIndex = DAYS.indexOf(day);

  const filteredHourly = hourly.filter((h) => h.dayIndex === selectedDayIndex);
  // const hourIndex = 0;

  // const orderedHour = [
  //   ...hourly.slice(hourIndex),
  //   ...hourly.slice(0, hourIndex),
  // ];

  return (
    <>
      <HourlyDropdown day={day} setDay={setDay} days={DAYS} />

      <div className="card-grid">
        {filteredHourly.map((h, i) => (
          <div key={i} className="hour-card">
            <div className="temp-time">
              <img src={h.icon} className="temp-img" />
              <p className="temp-time--digit">{h.time}</p>
            </div>
            <p className="temp-number">
              {unitSystem === "imperial"
                ? Math.round((h.temp * 9) / 5 + 32)
                : h.temp}
              °
            </p>
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
