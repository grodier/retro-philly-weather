import React from "react";

type AudioState = "ENABLED" | "DISABLED";
type BlurState = "ENABLED" | "DISABLED";
type PlayerState = "IDLE" | "PLAYING";

type Settings = {
  player: PlayerState;
  audio: AudioState;
  blur: BlurState;
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
      localStorage.setItem("RPW_AUDIO", audioEnabled ? "DISABLED" : "ENABLED");
      return { ...state, audio: audioEnabled ? "DISABLED" : "ENABLED" };
    }
    case SettingsActions.TOGGLE_BLUR: {
      const updatedBlur = state.blur === "ENABLED" ? "DISABLED" : "ENABLED";
      localStorage.setItem("RPW_BLUR", updatedBlur);
      return { ...state, blur: updatedBlur };
    }
    case SettingsActions.START_PLAYER: {
      return { ...state, player: "PLAYING" };
    }
    default:
      return state;
  }
}

function settingsInitializer(defaultSettings: Settings): Settings {
  const { blur, player, audio } = defaultSettings;
  if (typeof localStorage === "undefined") {
    return defaultSettings;
  }

  const savedAudioState =
    (localStorage?.getItem("RPW_AUDIO") as AudioState) || audio;
  const savedBlurState =
    (localStorage?.getItem("RPW_BLUR") as BlurState) || blur;

  return {
    blur: savedBlurState,
    audio: savedAudioState,
    player,
  };
}

type SettingsProviderProps = {
  children: React.ReactNode;
};

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, dispatch] = React.useReducer(
    settingsReducer,
    {
      player: "IDLE",
      audio: "ENABLED",
      blur: "ENABLED",
    },
    settingsInitializer
  );

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
      <div
        className="h-full"
        style={{
          filter: settings.blur === "ENABLED" ? "blur(1px)" : "blur(0px)",
        }}
      >
        {children}
      </div>
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
