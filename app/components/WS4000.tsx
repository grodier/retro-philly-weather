import musicUrl from "../assets/stardust.mp3";

type WS4000Props = {
  data: {
    currentConditions: {
      temperature: string;
      dew_point: string;
      wind_speed: number;
      wind_direction: number;
      wind_gust: any;
    };
  };
};

export default function WS4000({ data }: WS4000Props) {
  return (
    <div>
      <div>Temp: {data.currentConditions.temperature}</div>
      <div>Dew Point: {data.currentConditions.dew_point}</div>
      <div>Wind Gusts: {data.currentConditions.wind_gust}</div>
      <audio autoPlay loop src={musicUrl} />
    </div>
  );
}
