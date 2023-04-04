import musicUrl from "../assets/stardust.mp3";

type WS4000Props = {
  currentConditions: {
    temperature: string;
    dew_point: string;
    wind_speed: number;
    wind_direction: number;
    wind_gust?: string;
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
