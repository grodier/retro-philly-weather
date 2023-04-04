import type { V2_MetaFunction } from "@remix-run/node";
import React, { useState } from "react";
import WS4000 from "~/components/WS4000";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

type OverlayProps = {
  children: React.ReactNode;
};

function Overlay({ children }: OverlayProps) {
  return <div>{children}</div>;
}

export default function Index() {
  const [overlayVisible, setOverlayVisible] = useState(true);

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
        <WS4000 />
      )}
    </div>
  );
}
