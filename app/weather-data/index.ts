import {
  celcius_to_farenheit,
  degress_to_compass_direction,
  kph_to_mph,
  meter_to_mile,
  pascal_to_inches_hg,
} from "./utils";

export async function get_current_conditions() {
  const response = await fetch(
    "https://api.weather.gov/stations/KPHL/observations/latest"
  );
  const data = await response.json();

  const temperature: undefined | string =
    data.properties.temperature.value &&
    celcius_to_farenheit(data.properties.temperature.value).toString();

  const dew_point: undefined | string =
    data.properties.dewpoint.value &&
    celcius_to_farenheit(data.properties.dewpoint.value).toString();

  const wind_speed: undefined | string =
    data.properties.windSpeed.value &&
    kph_to_mph(data.properties.windSpeed.value);

  const wind_direction: undefined | string =
    data.properties.windDirection.value &&
    degress_to_compass_direction(data.properties.windDirection.value);

  const wind_gust: undefined | string =
    data.properties.windGust.value &&
    kph_to_mph(data.properties.windGust.value);

  const visibility: undefined | string =
    data.properties.visibility.value &&
    meter_to_mile(data.properties.visibility.value);

  const wind_chill: undefined | string =
    data.properties.windChill.value &&
    celcius_to_farenheit(data.properties.windChill.value);

  const heat_index: undefined | string =
    data.properties.heatIndex.value &&
    celcius_to_farenheit(data.properties.heatIndex.value);

  const barometric_pressure: undefined | string =
    data.properties.barometricPressure.value &&
    pascal_to_inches_hg(data.properties.barometricPressure.value).toString();

  const text_description: undefined | string = data.properties.textDescription;

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
