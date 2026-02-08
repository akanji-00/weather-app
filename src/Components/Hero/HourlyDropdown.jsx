import { useState } from "react";
import ForecastDropdown from "./ForecastDropdown";

import "./hero.css";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function HourlyDropdown() {
  const [day, setDay] = useState("Tuesday");

  return (
    <>
      <div className="hourly-forecast-header">
        <h2 className="temp-title">Hourly forecast</h2>
        <ForecastDropdown
          label="Select day"
          options={DAYS}
          value={day}
          onChange={setDay}
        />
      </div>
    </>
  );
}
