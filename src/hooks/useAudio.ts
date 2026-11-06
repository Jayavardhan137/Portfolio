"use client";

// Silent audio stub - sound effects disabled until custom assets are provided
export function useAudio() {
  const isEnabled = false;
  const toggleSound = () => {};
  const playHover = () => {};
  const playClick = () => {};
  const playCinematicRise = () => {};

  return { isEnabled, toggleSound, playHover, playClick, playCinematicRise };
}
