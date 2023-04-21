import { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useSettings } from "~/components/SettingsProvider";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Settings" }];
};

export default function Settings() {
  const { settings, toggle_audio, toggle_blur } = useSettings();
  return (
    <div className="font-mono">
      <div
        className={
          "fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-70 z-10"
        }
      >
        <div className="h-full flex justify-center items-center">
          <div className="overflow-hidden rounded-lg bg-white shadow max-w-2xl">
            <div className="px-4 py-5 sm:p-6 flex flex-col items-center space-y-8">
              <h1 className="text-center font-bold text-3xl">Settings</h1>

              <fieldset className="border-b border-t border-gray-200">
                <legend className="sr-only">Settings</legend>
                <div className="divide-y divide-gray-200">
                  <div className="relative flex items-start pb-4 pt-3.5">
                    <div className="min-w-0 flex-1 text-sm leading-6">
                      <label
                        htmlFor="audio"
                        className="font-medium text-gray-900"
                      >
                        Audio
                      </label>
                      <p id="audio-description" className="text-gray-500">
                        Enables audio on WS4000 player
                      </p>
                    </div>
                    <div className="ml-3 flex h-6 items-center">
                      <input
                        id="audio"
                        aria-describedby="audio-description"
                        name="audio"
                        type="checkbox"
                        checked={settings.audio === "ENABLED"}
                        onChange={toggle_audio}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                  </div>
                  <div className="relative flex items-start pb-4 pt-3.5">
                    <div className="min-w-0 flex-1 text-sm leading-6">
                      <label
                        htmlFor="blur"
                        className="font-medium text-gray-900"
                      >
                        Blur
                      </label>
                      <p id="blur-description" className="text-gray-500">
                        Enables a blur effect on the site to give it an
                        old-school feel
                      </p>
                    </div>
                    <div className="ml-3 flex h-6 items-center">
                      <input
                        id="blur"
                        aria-describedby="blur-description"
                        name="blur"
                        type="checkbox"
                        checked={settings.blur === "ENABLED"}
                        onChange={toggle_blur}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
              <Link to="/">Done</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
