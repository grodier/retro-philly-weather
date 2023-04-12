export function celcius_to_farenheit(degreesCelcius: number): number {
  return degreesCelcius * 1.8 + 32;
}

export function pascal_to_inches_hg(pascals: number): number {
  return pascals / 3386;
}

export function degress_to_compass_direction(degrees: number): string {
  const compassDirs = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const sector = Math.floor(degrees / 22.5 + 0.5);
  return compassDirs[sector % 16];
}

export function kph_to_mph(kilometers_per_hour: number): number {
  return kilometers_per_hour / 1.609;
}

export function meter_to_mile(meter: number): number {
  return meter / 1609;
}

type StringUnitOpts = {
  unit?: string;
  fixed?: number;
};
export function createStringUnit(
  value: number,
  { unit, fixed }: StringUnitOpts = {}
): string {
  return `${value.toFixed(fixed)}${unit || ""}`;
}
