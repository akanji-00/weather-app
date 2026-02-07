export async function getWeather({ latitude, longitude, unitSystem }) {
  // Prevent the request if coordinates are missing or invalid
  if (latitude === undefined || longitude === undefined) {
    throw new Error("Latitude and longitude are required to fetch weather.");
  }
  // const tempUnit = unitSystem === "imperial" ? "fahrenheit" : "celsius";
  // const windUnit = unitSystem === "imperial" ? "mph" : "kmh";
  // const precipitationUnit = unitSystem === "imperial" ? "inch" : "mm";

  // if (!latitude || !longitude) {
  //   throw new Error("Missing coordinates");
  // }
  const isImperial = unitSystem === "imperial";

  // const units =
  //   unitSystem === "imperial"
  //     ? {
  //         temperature_unit: "fahrenheit",
  //         wind_speed_unit: "mph",
  //         precipitaion_unit: "inch",
  //       }
  //     : {
  //         temperature_unit: "celsius",
  //         wind_speed_unit: "kmh",
  //         precipitaion_unit: "mm",
  //       };

  // const params = new URLSearchParams({
  //   latitude,
  //   longitude,
  //   current: "temperature_2m,weather_code",
  //   hourly: "temperature_2m,precipitation,wind_speed_10m",
  //   daily: "weather_code,temperature_2m_max,temperature_2m_min",
  //   ...units,
  // });
  const url = `https://api.open-meteo.com/v1/forecast
    ?latitude=${latitude}
    &longitude=${longitude}
    &current_weather=true
    &hourly=temperature_2m,precipitation,weathercode,windspeed_10m
    &daily=temperature_2m_max,temperature_2m_min,weathercode
    &temperature_unit=${isImperial ? "fahrenheit" : "celsius"}
    &windspeed_unit=${isImperial ? "mph" : "kmh"}
    &precipitation_unit=${isImperial ? "inch" : "mm"}
    &timezone=auto
  `.replace(/\s/g, "");

  // const url = `https://api.open-meteo.com/v1/forecast?${params}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Weather fetch failed failed");
  }

  return res.json();
}
