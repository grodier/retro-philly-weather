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
}
