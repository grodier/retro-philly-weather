import { celcius_to_farenheit } from "./utils";

export async function get_current_conditions() {
  const response = await fetch(
    "https://api.weather.gov/stations/KPHL/observations/latest"
  );
  const data = await response.json();
  const temperature = celcius_to_farenheit(
    data.properties.temperature.value
  ).toString();
  const dew_point = celcius_to_farenheit(
    data.properties.dewpoint.value
  ).toString();
  const wind_speed: number = data.properties.windSpeed.value;
  const wind_direction: number = data.properties.windDirection.value;
  const wind_gust: undefined | string =
    data.properties.windGust.value && "GUSTY";

  return {
    temperature,
    dew_point,
    wind_speed,
    wind_direction,
    wind_gust,
  };
}
