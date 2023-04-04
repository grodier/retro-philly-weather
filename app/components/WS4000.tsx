import musicUrl from "../assets/stardust.mp3";

type WS4000Props = {
  currentConditions: {
    temperature?: any;
    dew_point?: any;
    wind_speed?: number;
    wind_direction?: number;
    wind_gust?: string | undefined;
    text_description?: any;
    barometric_pressure?: any;
    heat_index?: any;
    wind_chill?: any;
    visibility?: any;
  };
};

export default function WS4000({ currentConditions }: WS4000Props) {
  return (
    <div>
      <div>Temp: {currentConditions.temperature}</div>
      <div>Dew Point: {currentConditions.dew_point}</div>
      {currentConditions.wind_gust && (
        <div>Wind Gusts: {currentConditions.wind_gust}</div>
      )}
      <audio autoPlay loop src={musicUrl} />
    </div>
  );
}
