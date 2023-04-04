import { V2_MetaFunction, LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useState } from "react";
import WS4000 from "~/components/WS4000";
import { get_current_conditions } from "~/weather-data";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export async function loader(args: LoaderArgs) {
  const currect_conditions = await get_current_conditions();
  return json({
    currentConditions: currect_conditions,
  });
}

type OverlayProps = {
  children: React.ReactNode;
};

function Overlay({ children }: OverlayProps) {
  return <div>{children}</div>;
}

export default function Index() {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const weatherStarData = useLoaderData<typeof loader>();

  function onCloseOverlay() {
    setOverlayVisible(false);
  }

  return (
    <div style={{ fontFamily: "monospace, system-ui" }}>
      {overlayVisible ? (
        <Overlay>
          <button onClick={onCloseOverlay}>Start!</button>
        </Overlay>
      ) : (
        <WS4000 data={weatherStarData} />
      )}
    </div>
  );
}
