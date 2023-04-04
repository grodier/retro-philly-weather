import musicUrl from "../assets/stardust.mp3";

type WS4000Props = {
  data: {
    currentConditions: {
      temperature: string;
    };
  };
};
export default function WS4000({ data }: WS4000Props) {
  return (
    <div>
      <div>Temp: {data.currentConditions.temperature}</div>
      <audio autoPlay loop src={musicUrl} />
    </div>
  );
}
