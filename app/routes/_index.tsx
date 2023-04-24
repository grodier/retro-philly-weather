import { V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { useRef } from "react";
import { useSettings } from "~/components/SettingsProvider";
import WS4000 from "~/components/WS4000";
import { get_current_conditions } from "~/weather-data";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Retro Philly Weather" }];
};

export async function loader() {
  const currect_conditions = await get_current_conditions();
  return json({
    currentConditions: currect_conditions,
  });
}

export default function Index() {
  const { settings, start_player } = useSettings();
  const audioRef = useRef<HTMLAudioElement>(null);
  const weatherStarData = useLoaderData<typeof loader>();

  function start_ws4000() {
    start_player();
    audioRef.current?.play();
  }

  return (
    <div className="font-mono">
      <div
        className={`fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-70 z-10 ${
          settings.player === "PLAYING" ? "hidden" : "visible"
        }`}
      >
        <div className="h-full flex justify-center items-center">
          <div className="overflow-hidden rounded-lg bg-white shadow max-w-2xl">
            <div className="px-4 py-5 sm:p-6 flex flex-col items-center space-y-8">
              <p className="text-center text-lg">
                Get ready to be transported back to the 90's where every 8
                minutes offered a glimpse into what the day had to hold!
              </p>
              <button
                className="logo max-w-fit bg-white bg-gradient-to-b from-blue-800 to-blue-400 hover:from-blue-900 hover:to-blue-500 active:from-blue-700 active:to-blue-300 text-outline-3d-small text-white text-3xl font-bold rounded-2xl p-2 border-4 border-white inline-block"
                onClick={start_ws4000}
              >
                <div className="flex flex-col uppercase items-center">Play</div>
              </button>
              <div className="flex flex-col items-center space-y-2">
                <p className="text-sm text-center text-gray-700">
                  (Note: For best retro experience consider using a laptop or
                  desktop. Use the settings to control audio and blur effect.)
                </p>
                <Link
                  className="font-semibold text-blue-800 hover:text-indigo-600 underline"
                  to="/settings"
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={settings.player === "PLAYING" ? "" : "blur"}>
        <WS4000
          audioRef={audioRef}
          sound={settings.player === "PLAYING" && settings.audio === "ENABLED"}
          currentConditions={{ ...weatherStarData.currentConditions }}
        />
      </div>
    </div>
  );
}
