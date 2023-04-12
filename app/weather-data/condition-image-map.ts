export function getDescriptionImage(
  weatherDescription: string,
  time_of_day?: "day" | "night"
): string {
  switch (weatherDescription.toLowerCase()) {
    case "sunny":
    case "clear":
    case "patchy frost":
    case "areas frost":
    case "frost":
    case "hot":
    case "cold":
    case "few clouds":
      return "/assets/Sunny.gif";
    case "mostly cloudy":
    case "partly sunny":
    case "partly clear":
    case "increasing clouds":
    case "becoming cloudy":
      return "/assets/Mostly-Cloudy.gif";
    case "mostly sunny":
    case "mostly clear":
    case "partly cloudy":
    case "fair":
    case "decreasing clouds":
    case "clearing":
    case "gradual clearing":
    case "clearing late":
    case "becoming sunny":
    case "patchy haze":
    case "areas haze":
    case "haze":
      return "/assets/Party-Cloudy.gif";
    case "cloudy":
    case "overcast":
    case "fog":
    case "patchy fog":
    case "dense fog":
    case "areas fog":
    case "patchy ice fog":
    case "areas ice fog":
    case "ice fog":
    case "patchy freezing fog":
    case "areas freezing fog":
    case "freezing fog":
    case "patchy smoke":
    case "areas smoke":
    case "smoke":
    case "patchy ash":
    case "areas ash":
    case "volcanic ash":
      return "/assets/Cloudy.gif";
    case "blowing snow":
      return "/assets/Blowing-Snow.gif";
    default:
      return "/assets/Sunny.gif";
  }
}
