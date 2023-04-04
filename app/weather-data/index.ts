import { celcius_to_farenheit } from "./utils";

export async function get_current_conditions() {
  const response = await fetch(
    "https://api.weather.gov/stations/KPHL/observations/latest"
  );
  const data = await response.json();
  return {
    temperature: celcius_to_farenheit(
      data.properties.temperature.value
    ).toString(),
  };
}
