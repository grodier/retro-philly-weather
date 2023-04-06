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
    <div className="min-h-screen">
      <audio autoPlay loop src={musicUrl} />
      <header></header>
      <main>
        <ConditionalDisplay value={currentConditions.text_description}>
          <div className="text-outline text-white text-4xl">
            {currentConditions.text_description}
          </div>
        </ConditionalDisplay>
        <ConditionalDisplay value={currentConditions.temperature}>
          <div className="text-outline text-white text-lg">
            Temerature: {currentConditions.temperature}
          </div>
        </ConditionalDisplay>
        <ConditionalDisplay value={currentConditions.dew_point}>
          <div className="text-outline text-white text-lg">
            Dew Point: {currentConditions.dew_point}
          </div>
        </ConditionalDisplay>
        <ConditionalDisplay value={currentConditions.wind_speed}>
          <div className="text-outline text-white text-lg">
            Wind Speed: {currentConditions.wind_speed}
          </div>
        </ConditionalDisplay>
        <ConditionalDisplay value={currentConditions.wind_direction}>
          <div className="text-outline text-white text-lg">
            Wind Direction: {currentConditions.wind_direction}
          </div>
        </ConditionalDisplay>
        <ConditionalDisplay value={currentConditions.wind_gust}>
          <div className="text-outline text-white text-lg">
            Wind Gusts: {currentConditions.wind_gust}
          </div>
        </ConditionalDisplay>
        <ConditionalDisplay value={currentConditions.barometric_pressure}>
          <div className="text-outline text-white text-lg">
            Barometric Pressure: {currentConditions.barometric_pressure}
          </div>
        </ConditionalDisplay>
        <ConditionalDisplay value={currentConditions.heat_index}>
          <div className="text-outline text-white text-lg">
            Heat Index: {currentConditions.heat_index}
          </div>
        </ConditionalDisplay>
        <ConditionalDisplay value={currentConditions.wind_chill}>
          <div className="text-outline text-white text-lg">
            Wind Chill: {currentConditions.wind_chill}
          </div>
        </ConditionalDisplay>
        <ConditionalDisplay value={currentConditions.visibility}>
          <div className="text-outline text-white text-lg">
            Visibility: {currentConditions.visibility}
          </div>
        </ConditionalDisplay>
      </main>
      <footer className="sticky top-[100vh] marquee-bg text-outline text-white text-4xl py-1 h-20">
        <div className="marquee">
          <div className="marquee__inner">
            <p>Marquee</p>
          </div>
        </div>
      </footer>
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
