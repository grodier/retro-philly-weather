import {
  celcius_to_farenheit,
  degress_to_compass_direction,
  kph_to_mph,
  meter_to_mile,
  pascal_to_inches_hg,
  createStringUnit,
} from "./utils";
import { getDescriptionImage } from "./condition-image-map";

export async function get_current_conditions() {
  const response = await fetch(
    "https://api.weather.gov/stations/KPHL/observations/latest"
  );
  const data = await response.json();

  const temperature: undefined | string =
    data.properties.temperature.value &&
    createStringUnit(celcius_to_farenheit(data.properties.temperature.value), {
      unit: "°",
    });

  const dew_point: undefined | string =
    data.properties.dewpoint.value &&
    createStringUnit(celcius_to_farenheit(data.properties.dewpoint.value), {
      unit: "°",
    });

  const wind_speed: undefined | string =
    data.properties.windSpeed.value &&
    createStringUnit(kph_to_mph(data.properties.windSpeed.value));

  const wind_direction: undefined | string =
    data.properties.windDirection.value &&
    degress_to_compass_direction(data.properties.windDirection.value);

  const wind_gust: undefined | string =
    data.properties.windGust.value &&
    createStringUnit(kph_to_mph(data.properties.windGust.value));

  const visibility: undefined | string =
    data.properties.visibility.value &&
    createStringUnit(meter_to_mile(data.properties.visibility.value), {
      unit: "mi.",
    });

  const wind_chill: undefined | string =
    data.properties.windChill.value &&
    createStringUnit(celcius_to_farenheit(data.properties.windChill.value), {
      unit: "°",
    });

  const heat_index: undefined | string =
    data.properties.heatIndex.value &&
    createStringUnit(celcius_to_farenheit(data.properties.heatIndex.value), {
      unit: "°",
    });

  const barometric_pressure: undefined | string =
    data.properties.barometricPressure.value &&
    createStringUnit(
      pascal_to_inches_hg(data.properties.barometricPressure.value),
      { fixed: 2 }
    );

  const text_description: undefined | string = data.properties.textDescription;

  const image_description: undefined | string =
    text_description && getDescriptionImage(text_description);

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
    image_description,
  };
}
