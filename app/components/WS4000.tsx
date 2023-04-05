import musicUrl from "../assets/stardust.mp3";

type WS4000Props = {
  currentConditions: {
    temperature?: string;
    dew_point?: string;
    wind_speed?: string;
    wind_direction?: string;
    wind_gust?: string;
    text_description?: string;
    barometric_pressure?: string;
    heat_index?: string;
    wind_chill?: string;
    visibility?: string;
  };
};

export default function WS4000({ currentConditions }: WS4000Props) {
  return (
    <div>
      <ConditionalDisplay value={currentConditions.temperature}>
        <div className="text-outline text-white text-lg">
          Temp: {currentConditions.temperature}
        </div>
      </ConditionalDisplay>
      <ConditionalDisplay value={currentConditions.wind_gust}>
        <div className="text-outline text-white text-lg">
          Wind Gusts: {currentConditions.wind_gust}
        </div>
      </ConditionalDisplay>
      <ConditionalDisplay value={currentConditions.dew_point}>
        <div className="text-outline text-white text-lg">
          Dew Point: {currentConditions.dew_point}
        </div>
      </ConditionalDisplay>

      <audio autoPlay loop src={musicUrl} />
    </div>
  );
}

type ConditionalDisplayProps = {
  value: unknown;
  children: React.ReactNode;
};

function ConditionalDisplay({ value, children }: ConditionalDisplayProps) {
  return value ? <>{children}</> : null;
}
