import { useState } from "react";
import { geocodeCity } from "../api/geocoding";
import { getWeather } from "../api/weather";
import { formatHour, formatDay } from "../utility/weatherUtility";
import { getWeatherIcon } from "../utility/weatherIcons";

export function useWeather() {
  const [city, setCity] = useState("");
  const [unitSystem, setUnitSystem] = useState("metric");
  const [current, setCurrent] = useState(null);
  const [hourly, setHourly] = useState([]);
  const [daily, setDaily] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchWeather = async (searchCity) => {
    try {
      console.log("Searching:", searchCity);

      setLoading(true);
      setError(null);

      const location = await geocodeCity(searchCity);
      console.log("Location:", location);

      const data = await getWeather({
        latitude: location.latitude,
        location: location.longitude,
        unitSystem,
      });

      console.log("Weather data:", data);

      setCity(location.name);
      // setCurrent(data.current);
      // setHourly(data.hourly);
      // setDaily(data.daily);

      //CURRENT
      setCurrent({
        temp: Math.round(data.current_weather.temperature),
        wind: data.current_weather.windspeed,
        precipitation: data.current_weather.precipitaion,
        icon: getWeatherIcon(data.hourly.weathercode[i]),
        name: location.name,
        country: location.country,
      });

      //HOURLY
      setHourly(
        data.hourly.time.slice(0, 8).map((time, i) => ({
          time: formatHour(time),
          temp: Math.round(data.hourly.temperature_2m[i]),
          icon: getWeatherIcon(data.hourly.weathercode[i]),
        })),
      );

      //DAILY
      setDaily(
        data.daily.time.map((date, i) => ({
          day: formatDay(date),
          max: Math.round(data.daily.temperature_2m_max[i]),
          min: Math.round(data.daily.temperature_2m_min[i]),
          icon: getWeatherIcon(data.daily.weathercode[i]),
        })),
      );
    } catch (err) {
      console.log("Search failed", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    city,
    setCity,
    unitSystem,
    setUnitSystem,
    current,
    hourly,
    daily,
    loading,
    error,
    searchWeather,
  };
}
