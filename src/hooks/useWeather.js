import { useState } from "react";
import { geocodeCity } from "../api/geocoding";
import { getWeather } from "../api/weather";
import { formatHour, formatDay } from "../utility/weatherUtility";
import { getWeatherIcon } from "../utility/weatherIcons";

import { rotateFromToday } from "../utility/rotateDays";

export function useWeather() {
  const [city, setCity] = useState("");
  const [unitSystem, setUnitSystem] = useState("metric");
  const [current, setCurrent] = useState(null);
  // const [currentDetails, setCurrentDetails] = useState(null);
  const [hourly, setHourly] = useState([]);
  const [daily, setDaily] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const isImperial = unitSystem === "imperial";

  // const convertTemp = (c) => {
  //   isImperial ? (c * 9) / 5 + 32 : c;
  // };

  // const convertWind = (kmh) => {
  //   isImperial ? kmh / 1.609 : kmh;
  // };

  // const convertPrecip = (mm) => {
  //   isImperial ? mm / 25.4 : mm;
  // };

  // const displayDetails = currentDetails && {
  //   humidity: currentDetails.humidity,
  //   precipitation: convertPrecip(currentDetails.precipitation),
  // };

  // function extractCurrentFromHourly(data) {
  //   const now = data.current_weather.time;

  //   const index = data.hourly.time.indexOf(now);

  //   if (index === -1) return null;

  //   return {
  //     humidity: data.hourly.relativehumidity_2m[index],
  //     precipitation: data.hourly.precipitation[index],
  //   };
  // }

  const searchWeather = async (searchCity) => {
    try {
      console.log("Searching:", searchCity);

      setLoading(true);
      setError(null);

      const location = await geocodeCity(searchCity);
      console.log("Location:", location);

      const data = await getWeather({
        latitude: location.latitude,
        longitude: location.longitude,
        unitSystem,
      });

      console.log("Weather data:", data);

      if (!data.current_weather) {
        console.error("current_weather missing:", data);
        return;
      }

      const now = new Date();
      const currentHourIndex = data.hourly.time.findIndex(
        (t) => new Date(t).getHours() === now.getHours(),
      );

      // DAILY DATA
      // const rotatedDaily = rotateFromToday({
      //   time: data.daily.time,
      //   max: data.daily.temperature_2m_max,
      //   min: data.daily.temperature_2m_min,
      // });

      //CURRENT
      setCurrent({
        temp: Math.round(data.current_weather.temperature),
        humidity: data.hourly.relativehumidity_2m[currentHourIndex],
        precipitation: data.hourly.precipitation[currentHourIndex],
        wind: data.current_weather.windspeed,
        // currentDetails,
        icon: getWeatherIcon(data.current_weather.weathercode),
        name: location.name,
        country: location.country,
      });

      const nowHour = new Date();
      const currentHourISO = nowHour.toISOString().slice(0, 13);

      const startIndex = data.hourly.time.findIndex((time) =>
        time.startsWith(currentHourISO),
      );

      //HOURLY;
      setHourly(
        data.hourly.time.slice(startIndex, startIndex + 8).map((time, i) => ({
          time: formatHour(time),
          temp: Math.round(data.hourly.temperature_2m[startIndex + i]),
          humidity: data.hourly.relativehumidity_2m[startIndex + i],
          precipitation: data.hourly.precipitation[startIndex + i],
          icon: getWeatherIcon(data.hourly.weathercode[startIndex + i]),
          dayIndex: new Date(time).getDay(),
        })),
      );

      //DAILY
      setDaily(
        data.daily.time.map((date, i) => ({
          day: formatDay(date),
          // rotatedDaily,
          min: Math.round(data.daily.temperature_2m_min[i]),
          max: Math.round(data.daily.temperature_2m_max[i]),
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
    // currentDetails,
    hourly,
    daily,
    loading,
    error,
    searchWeather,
  };
}
