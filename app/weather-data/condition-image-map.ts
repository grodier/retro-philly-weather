import blowingSnowUrl from "../assets/currentConditions/Blowing-Snow.gif";
import clearUrl from "../assets/currentConditions/Clear.gif";
import cloudyUrl from "../assets/currentConditions/Cloudy.gif";
import freezingRainSleetUrl from "../assets/currentConditions/Freezing-Rain-Sleet.gif";
import mostlyCloudyUrl from "../assets/currentConditions/Mostly-Cloudy.gif";

export function getDescriptionImage(weatherDescription: string): string {
  return mostlyCloudyUrl;
}
