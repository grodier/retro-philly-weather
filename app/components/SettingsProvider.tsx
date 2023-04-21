import React from "react";

type Settings = {
  player: "IDLE" | "PLAYING";
  audio: "ENABLED" | "DISABLED";
  blur: "ENABLED" | "DISABLED";
};

type SettingsContext = {
  settings: Settings;
  toggle_audio: () => void;
  toggle_blur: () => void;
  start_player: () => void;
};

enum SettingsActions {
  TOGGLE_AUDIO = "TOGGLE_AUDIO",
  TOGGLE_BLUR = "TOGGLE_BLUR",
  START_PLAYER = "START_PLAYER",
}

type SettingsActionType = {
  type: SettingsActions;
};

const SettingsContext = React.createContext<SettingsContext | undefined>(
  undefined
);

function settingsReducer(
  state: Settings,
  action: SettingsActionType
): Settings {
  switch (action.type) {
    case SettingsActions.TOGGLE_AUDIO: {
      const audioEnabled = state.audio === "ENABLED";
      return { ...state, audio: audioEnabled ? "DISABLED" : "ENABLED" };
    }
    case SettingsActions.TOGGLE_BLUR: {
      const blurEnabled = state.blur === "ENABLED";
      const blurVal = blurEnabled ? "0px" : "1px";
      document.documentElement.style.setProperty("--blur-val", blurVal);
      return { ...state, blur: blurEnabled ? "DISABLED" : "ENABLED" };
    }
    case SettingsActions.START_PLAYER: {
      return { ...state, player: "PLAYING" };
    }
    default:
      return state;
  }
}

type SettingsProviderProps = {
  children: React.ReactNode;
};

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, dispatch] = React.useReducer(settingsReducer, {
    player: "IDLE",
    audio: "ENABLED",
    blur: "ENABLED",
  });

  function toggle_audio() {
    dispatch({ type: SettingsActions.TOGGLE_AUDIO });
  }

  function toggle_blur() {
    dispatch({ type: SettingsActions.TOGGLE_BLUR });
  }

  function start_player() {
    dispatch({ type: SettingsActions.START_PLAYER });
  }

  const value = {
    settings,
    toggle_audio,
    toggle_blur,
    start_player,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const val = React.useContext(SettingsContext);
  if (val === undefined) {
    throw new Error(
      "useSettings must be used with a Settings Provider Context"
    );
  }
  return val;
}
