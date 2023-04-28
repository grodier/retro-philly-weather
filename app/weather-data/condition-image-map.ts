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
      return time_of_day === "night"
        ? "/assets/Clear.gif"
        : "/assets/Sunny.gif";

    case "mostly cloudy":
    case "partly sunny":
    case "partly clear":
    case "increasing clouds":
    case "becoming cloudy":
      return time_of_day === "night"
        ? "/assets/Partly-Clear.gif"
        : "/assets/Mostly-Cloudy.gif";

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
      return time_of_day === "night"
        ? "/assets/Mostly-Clear.gif"
        : "/assets/Partly-Cloudy.gif";

    case "cloudy":
    case "overcast":
      return "/assets/Cloudy.gif";

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
      return "/assets/Fog.gif";

    case "blowing snow":
      return "/assets/Blowing-Snow.gif";

    case "windy":
    case "breezy":
    case "blustery":
    case "water spouts":
    case "blowing dust":
    case "blowing sand":
      return "/assets/Windy.gif";

    case "ice crystals":
    case "areas ice crystals":
    case "patchy ice crystals":
    case "sleet":
    case "slight chance sleet":
    case "chance sleet":
    case "sleet likely ":
      return "/assets/Sleet.gif";

    case "freezing spray":
    case "freezing rain":
    case "slight chance freezing rain":
    case "chance freezing rain":
    case "freezing rain likely":
    case "freezing drizzle":
    case "freezing drizzle likely":
    case "chance freezing drizzle":
    case "slight chance freezing drizzle":
    case "slight chance rain/freezing rain":
    case "chance rain/freezing rain":
    case "rain/freezing rain likely":
    case "rain/freezing rain":
      return "/assets/Freezing-Rain.gif";

    case "slight Chance Rain Showers":
    case "chance Rain Showers":
    case "slight Chance Rain":
    case "chance Rain":
      return "/assets/Scattered-Showers.gif";

    case "showers":
    case "showers likely":
    case "rain showers likely":
    case "rain showers":
    case "slight chance drizzle":
    case "chance drizzle":
    case "drizzle likely":
    case "light drizzle":
    case "light drizzle fog":
    case "drizzle":
    case "drizzle fog":
    case "light rain":
    case "light rain fog":
    case "light rain fog/mist":
    case "lt rain":
    case "lt rain fog":
    case "lt rain, fog":
    case "drizzle patchy fog":
    case "rain and fog/mist":
      return "/assets/Shower.gif";

    case "rain likely":
    case "rain":
    case "heavy rain":
      return "/assets/Rain.gif";

    case "isolated snow":
    case "slight chance snow showers":
    case "chance snow showers":
    case "slight chance flurries":
    case "flurries likely":
    case "flurries":
    case "slight chance snow":
    case "scattered flurries":
      return "/assets/Scattered-Snow-Showers.gif";

    case "snow showers likely":
    case "snow showers":
    case "chance flurries":
    case "chance snow":
    case "light snow":
    case "lt snow":
    case "light snow fog/mist":
    case "lt snow, fog":
      return "/assets/Light-Snow.gif";

    case "snow likely":
    case "snow":
    case "blizzard":
      return "/assets/Heavy-Snow.gif";

    case "rain/snow":
    case "slight chance rain/snow":
    case "chance rain/snow":
    case "rain/snow likely":
      return "/assets/Rain-Snow.gif";

    case "slight chance wintry mix":
    case "chance wintry mix":
    case "wintry mix likely":
    case "wintry mix":
      return "/assets/Wintry-Mix.gif";

    case "slight chance rain/sleet":
    case "chance rain/sleet":
    case "rain/sleet likely":
    case "rain/sleet":
    case "slight chance snow/sleet":
    case "chance snow/sleet":
    case "snow/sleet likely":
    case "snow/sleet":
      return "/assets/Freezing-Rain-Sleet.gif";

    case "isolated thunderstorms":
    case "thunderstorms likely":
    case "thunderstorms":
    case "severe tstms":
      return "/assets/Thunderstorm.gif";

    case "slight chance thunderstorms":
    case "chance thunderstorms":
      return "/assets/Scatterd-Tstorms.gif";

    default:
      return "/assets/Sunny.gif";
  }
}
