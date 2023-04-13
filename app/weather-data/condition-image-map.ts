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

    case "Windy":
    case "Breezy":
    case "Blustery":
    case "Water Spouts":
    case "Blowing Dust":
    case "Blowing Sand":
      return "/assets/Windy.gif";

    case "Ice Crystals":
    case "Areas Ice Crystals":
    case "Patchy Ice Crystals":
    case "Sleet":
    case "Slight Chance Sleet":
    case "Chance Sleet":
    case "Sleet Likely ":
      return "/assets/Sleet.gif";

    case "Freezing Spray":
    case "Freezing Rain":
    case "Slight Chance Freezing Rain":
    case "Chance Freezing Rain":
    case "Freezing Rain Likely":
    case "Freezing Drizzle":
    case "Freezing Drizzle Likely":
    case "Chance Freezing Drizzle":
    case "Slight Chance Freezing Drizzle":
    case "Slight Chance Rain/Freezing Rain":
    case "Chance Rain/Freezing Rain":
    case "Rain/Freezing Rain Likely":
    case "Rain/Freezing Rain":
      return "/assets/Freezing-Rain.gif";

    case "Slight Chance Rain Showers":
    case "Chance Rain Showers":
    case "Slight Chance Rain":
    case "Chance Rain":
      return "/assets/Scattered-Showers.gif";

    case "Showers":
    case "Showers Likely":
    case "Rain Showers Likely":
    case "Rain Showers":
    case "Slight Chance Drizzle":
    case "Chance Drizzle":
    case "Drizzle Likely":
    case "Light Drizzle":
    case "Light Drizzle Fog":
    case "Drizzle":
    case "Drizzle Fog":
    case "Light Rain":
    case "Light Rain Fog":
    case "Light Rain Fog/Mist":
    case "Lt Rain":
    case "Lt Rain Fog":
    case "Lt Rain, Fog":
    case "Drizzle Patchy Fog":
      return "/assets/Shower.gif";

    case "Rain Likely":
    case "Rain":
    case "Heavy Rain":
      return "/assets/Rain.gif";

    case "Isolated Snow":
    case "Slight Chance Snow Showers":
    case "Chance Snow Showers":
    case "Slight Chance Flurries":
    case "Flurries Likely":
    case "Flurries":
    case "Slight Chance Snow":
    case "Scattered Flurries":
      return "/assets/Scattered-Snow-Showers.gif";

    case "Snow Showers Likely":
    case "Snow Showers":
    case "Chance Flurries":
    case "Chance Snow":
    case "Light Snow":
    case "Lt Snow":
    case "Light Snow Fog/Mist":
    case "Lt Snow, Fog":
      return "/assets/Light-Snow.gif";

    case "Snow Likely":
    case "Snow":
    case "Blizzard":
      return "/assets/Heavy-Snow.gif";

    case "Rain/Snow":
    case "Slight Chance Rain/Snow":
    case "Chance Rain/Snow":
    case "Rain/Snow Likely":
      return "/assets/Rain-Snow.gif";

    case "Slight Chance Wintry Mix":
    case "Chance Wintry Mix":
    case "Wintry Mix Likely":
    case "Wintry Mix":
      return "/assets/Wintry-Mix.gif";

    case "Slight Chance Rain/Sleet":
    case "Chance Rain/Sleet":
    case "Rain/Sleet Likely":
    case "Rain/Sleet":
    case "Slight Chance Snow/Sleet":
    case "Chance Snow/Sleet":
    case "Snow/Sleet Likely":
    case "Snow/Sleet":
      return "/assets/Freezing-Rain-Sleet.gif";

    case "Isolated Thunderstorms":
    case "Thunderstorms Likely":
    case "Thunderstorms":
    case "Severe Tstms":
      return "/assets/Thunderstorm.gif";

    case "Slight Chance Thunderstorms":
    case "Chance Thunderstorms":
      return "/assets/Scatterd-Tstorms.gif";

    default:
      return "/assets/Sunny.gif";
  }
}
