import ForecastDropdown from "./ForecastDropdown";

import "./hero.css";

export default function HourlyDropdown({ day, setDay, days }) {
  return (
    <>
      <div className="hourly-forecast-header">
        <h2 className="temp-title">Hourly forecast</h2>
        <ForecastDropdown
          label="Select day"
          options={days}
          value={day}
          onChange={setDay}
        />
      </div>
    </>
  );
}
