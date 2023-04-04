import { celcius_to_farenheit, pascal_to_inches_hg } from "./utils";

export async function get_current_conditions() {
  const response = await fetch(
    "https://api.weather.gov/stations/KPHL/observations/latest"
  );
  const data = await response.json();

  const temperature =
    data.properties.temperature.value &&
    celcius_to_farenheit(data.properties.temperature.value).toString();

  const dew_point =
    data.properties.dewpoint.value &&
    celcius_to_farenheit(data.properties.dewpoint.value).toString();

  const wind_speed: number = data.properties.windSpeed.value;
  const wind_direction: number = data.properties.windDirection.value;
  const wind_gust: undefined | string =
    data.properties.windGust.value && "GUSTY";
  const visibility = data.properties.visibility.value;
  const wind_chill = data.properties.windChill.value;
  const heat_index = data.properties.heatIndex.value;
  const barometric_pressure =
    data.properties.barometric_pressure.value &&
    pascal_to_inches_hg(data.properties.barometric_pressure.value).toString();
  const text_description = data.properties.textDescription;

  return {
    temperature,
    dew_point,
    wind_speed,
    wind_direction,
    wind_gust,
    text_description,
    barometric_pressure,
    heat_index,
    wind_chill,
    visibility,
  };
}
