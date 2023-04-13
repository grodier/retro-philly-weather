import { V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useState } from "react";
import WS4000 from "~/components/WS4000";
import { get_current_conditions } from "~/weather-data";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export async function loader() {
  const currect_conditions = await get_current_conditions();
  return json({
    currentConditions: currect_conditions,
  });
}

type OverlayProps = {
  children: React.ReactNode;
};

function Overlay({ children }: OverlayProps) {
  return <div className="grid h-screen place-items-center">{children}</div>;
}

export default function Index() {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const weatherStarData = useLoaderData<typeof loader>();

  function onCloseOverlay() {
    setOverlayVisible(false);
  }

  return (
    <div className="font-mono">
      <div
        className={`fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-70 z-10 ${
          overlayVisible ? "visible" : "hidden"
        }`}
      >
        <div className="h-full flex justify-center items-center">
          <div className="overflow-hidden rounded-lg bg-white shadow max-w-2xl">
            <div className="px-4 py-5 sm:p-6 flex flex-col">
              <p>
                Get ready to be transported back to the 90's where every 8
                minutes offered a glimpse into what the day had to hold!
              </p>
              <button
                className="logo bg-white bg-gradient-to-b from-blue-800 to-blue-400 hover:from-blue-900 hover:to-blue-500 active:from-blue-700 active:to-blue-300 text-outline-3d-small text-white text-3xl font-bold rounded-2xl p-2 border-4 border-white inline-block"
                onClick={onCloseOverlay}
              >
                <div className="flex flex-col uppercase items-center">Play</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={overlayVisible ? "blur" : ""}>
        <WS4000 currentConditions={{ ...weatherStarData.currentConditions }} />
      </div>
    </div>
  );
  /*
  return (
    <div className="font-mono">
      {overlayVisible ? (
        <Overlay>
          <button
            className="bg-white bg-gradient-to-b from-blue-700 to-blue-300 text-outline text-white text-xl rounded-2xl p-2 border-4 border-white shadow-2xl shadow-black hover:shadow-xl hover:shadow-black active:shadow-sm active:shadow-black"
            onClick={onCloseOverlay}
          >
            <p>Click for a Retro</p>
            <p>Philly Weather Experience</p>
          </button>
        </Overlay>
      ) : (
        <WS4000 currentConditions={{ ...weatherStarData.currentConditions }} />
      )}
    </div>
  );
  */
}
