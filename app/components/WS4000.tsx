import musicUrl from "../assets/stardust.mp3";
import { useLocalDate } from "./LocalDate";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";

type WS4000Props = {
  sound: boolean;
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
    image_description?: string;
    humidity?: string;
  };
};

export default function WS4000({ sound, currentConditions }: WS4000Props) {
  const date = useLocalDate();

  return (
    <div className="min-h-screen flex flex-col relative">
      <Link to="/settings">
        <span className="sr-only">Settings</span>
        <Cog8ToothIcon className="h-14 lg:h-16 w-14 lg:w-16 p-2 text-gray-400 hover:text-gray-300 absolute top-0 right-0" />
      </Link>
      <audio autoPlay muted={!sound} loop src={musicUrl} />
      <header className="mt-10 pt-8 pb-2 px-4 sm:px-8">
        <div className="container mx-auto flex flex-wrap-reverse sm:flex-nowrap">
          <div className="logo-expanded bg-white bg-gradient-to-b from-blue-800 to-blue-400 text-outline-3d-small text-white text-xl sm:text-2xl lg:text-3xl font-bold rounded-2xl p-2 border-2 sm:border-4 border-white inline-block">
            <div className="flex flex-col justify-center uppercase items-center">
              <span className="inline-block">Retro</span>
              <span className="inline-block">Philly</span>
              <span className="inline-block">Weather</span>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="px-6 sm:px-8 inline-block">
              <div className="flex flex-col text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-outline-3d text-yellow-400">
                <span>Current</span>
                <span>Conditions</span>
              </div>
            </div>
            <div className="flex-grow flex flex-col justify-end">
              <div className="text-outline-3d-small text-white text-xl sm:text-2xl lg:text-3xl text-right">
                {date.time}
              </div>
              <div className="text-outline-3d-small text-white text-xl sm:text-2xl lg:text-3xl text-right">
                {date.abbreviatedDate}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex-grow px-6 sm:px-8 flex flex-col">
        <main className="flex-grow flex flex-col min-h-full container-bg container mx-auto px-10">
          <div className="py-2 flex-grow flex min-h-full flex-col md:flex-row">
            <div className="w-full flex flex-col items-center space-y-6">
              <ConditionalDisplay value={currentConditions.temperature}>
                <div className="text-outline-3d-small text-white text-5xl sm:text-6xl xl:text-7xl text-center">
                  {currentConditions.temperature}
                </div>
              </ConditionalDisplay>
              <ConditionalDisplay value={currentConditions.text_description}>
                <div className="text-outline-3d-small text-white text-3xl sm:text-4xl xl:text-5xl text-center">
                  {currentConditions.text_description}
                </div>
              </ConditionalDisplay>
              <ConditionalDisplay value={currentConditions.image_description}>
                <img
                  className="w-1/2"
                  src={currentConditions.image_description}
                  alt={currentConditions.text_description}
                />
              </ConditionalDisplay>

              <ConditionalDisplay
                value={
                  currentConditions.wind_speed &&
                  currentConditions.wind_direction
                }
              >
                <div className="text-outline-3d-small text-white text-3xl sm:text-4xl xl:text-5xl text-center">
                  {`Wind: ${currentConditions.wind_direction} ${currentConditions.wind_speed}`}
                </div>
              </ConditionalDisplay>

              <ConditionalDisplay value={currentConditions.wind_gust}>
                <div className="text-outline-3d-small text-white text-3xl sm:text-4xl xl:text-5xl">
                  Wind Gusts: {currentConditions.wind_gust}
                </div>
              </ConditionalDisplay>
            </div>
            <div className="w-full flex flex-col mt-8 sm:mt-10 md:mt-0">
              <div className="text-3xl sm:text-4xltext-4xl xl:text-5xl text-yellow-400 text-outline-3d-small">
                Philadelphia
              </div>
              <div className="flex flex-col justify-around pl-5 mt-6 space-y-6">
                <ConditionalDisplay value={currentConditions.humidity}>
                  <div className="text-outline-3d-small text-white text-3xl sm:text-4xl xl:text-5xl">
                    Humidity: {currentConditions.humidity}
                  </div>
                </ConditionalDisplay>
                <ConditionalDisplay value={currentConditions.dew_point}>
                  <div className="text-outline-3d-small text-white text-3xl sm:text-4xl xl:text-5xl">
                    Dew Point: {currentConditions.dew_point}
                  </div>
                </ConditionalDisplay>
                <ConditionalDisplay
                  value={currentConditions.barometric_pressure}
                >
                  <div className="text-outline-3d-small text-white text-3xl sm:text-4xl xl:text-5xl">
                    Pressure: {currentConditions.barometric_pressure}
                  </div>
                </ConditionalDisplay>
                <ConditionalDisplay value={currentConditions.heat_index}>
                  <div className="text-outline-3d-small text-white text-3xl sm:text-4xl xl:text-5xl">
                    Heat Index: {currentConditions.heat_index}
                  </div>
                </ConditionalDisplay>
                <ConditionalDisplay value={currentConditions.wind_chill}>
                  <div className="text-outline-3d-small text-white text-3xl sm:text-4xl xl:text-5xl">
                    Wind Chill: {currentConditions.wind_chill}
                  </div>
                </ConditionalDisplay>
                <ConditionalDisplay value={currentConditions.visibility}>
                  <div className="text-outline-3d-small text-white text-3xl sm:text-4xl xl:text-5xl">
                    Visibility: {currentConditions.visibility}
                  </div>
                </ConditionalDisplay>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="marquee-bg footer-border mt-auto text-outline text-white text-3xl sm:text-4xl py-1 h-24">
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
