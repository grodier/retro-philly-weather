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
    <div className="min-h-screen flex flex-col relative">
      <audio autoPlay loop src={musicUrl} />
      <header className="pt-8 pb-2">
        <div className="container mx-auto flex">
          <div className="logo-expanded bg-white bg-gradient-to-b from-blue-800 to-blue-400 text-outline-3d-small text-white text-3xl font-bold rounded-2xl p-2 border-4 border-white inline-block">
            <div className="flex flex-col uppercase items-center">
              <span className="inline-block">Retro</span>
              <span className="inline-block">Philly</span>
              <span className="inline-block">Weather</span>
            </div>
          </div>
          <div className="px-8 inline-block">
            <div className="flex flex-col text-6xl tracking-tighter text-outline-3d text-yellow-400">
              <span>Current</span>
              <span>Conditions</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow container-bg container mx-auto px-10">
        <div className="py-2 flex min-h-full">
          <div className="w-full flex flex-col justify-around">
            <ConditionalDisplay value={currentConditions.text_description}>
              <div className="text-outline-3d-small text-white text-3xl">
                {currentConditions.text_description}
              </div>
            </ConditionalDisplay>
            <ConditionalDisplay value={currentConditions.temperature}>
              <div className="text-outline-3d-small text-white text-3xl">
                Temerature: {currentConditions.temperature}
              </div>
            </ConditionalDisplay>
            <ConditionalDisplay value={currentConditions.wind_speed}>
              <div className="text-outline-3d-small text-white text-3xl">
                Wind Speed: {currentConditions.wind_speed}
              </div>
            </ConditionalDisplay>
            <ConditionalDisplay value={currentConditions.wind_direction}>
              <div className="text-outline-3d-small text-white text-3xl">
                Wind Direction: {currentConditions.wind_direction}
              </div>
            </ConditionalDisplay>
            <ConditionalDisplay value={currentConditions.wind_gust}>
              <div className="text-outline-3d-small text-white text-3xl">
                Wind Gusts: {currentConditions.wind_gust}
              </div>
            </ConditionalDisplay>
          </div>
          <div className="w-full flex flex-col">
            <div className="text-3xl text-yellow-400 text-outline-3d-small">
              Philadelphia
            </div>
            <div className="flex flex-col justify-around pl-4 mt-4 space-y-3">
              <ConditionalDisplay value={currentConditions.dew_point}>
                <div className="text-outline-3d-small text-white text-3xl">
                  Dew Point: {currentConditions.dew_point}
                </div>
              </ConditionalDisplay>
              <ConditionalDisplay value={currentConditions.barometric_pressure}>
                <div className="text-outline-3d-small text-white text-3xl">
                  Barometric Pressure: {currentConditions.barometric_pressure}
                </div>
              </ConditionalDisplay>
              <ConditionalDisplay value={currentConditions.heat_index}>
                <div className="text-outline-3d-small text-white text-3xl">
                  Heat Index: {currentConditions.heat_index}
                </div>
              </ConditionalDisplay>
              <ConditionalDisplay value={currentConditions.wind_chill}>
                <div className="text-outline-3d-small text-white text-3xl">
                  Wind Chill: {currentConditions.wind_chill}
                </div>
              </ConditionalDisplay>
              <ConditionalDisplay value={currentConditions.visibility}>
                <div className="text-outline-3d-small text-white text-3xl">
                  Visibility: {currentConditions.visibility}
                </div>
              </ConditionalDisplay>
            </div>
          </div>
        </div>
      </main>
      <footer className="marquee-bg footer-border mt-auto text-outline text-white text-4xl py-1 h-24">
        <div className="marquee">
          <div className="marquee__inner">
            <p className="uppercase whitespace-nowrap">
              A site fueled by nostalgia and created with love by George Rodier
              - <a href="https://georgerodier.com">georgerodier.com</a>
            </p>
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
