import type { Dispatch, SetStateAction } from "react";

interface ToggleProps {
  switched: boolean;
  setSwitched: Dispatch<SetStateAction<boolean>>;
  label: string;
  disabled?: boolean;
}

export function Toggle({
  disabled = false,
  switched,
  setSwitched,
  label,
}: ToggleProps) {
  const buttonColor = setButtonColor(switched, disabled);

  const rectColor = disabled ? "bg-neutral-200" : "bg-neutral-50";
  const rectPosition = switched ? "translate-x-[18px]" : "translate-x-0.5";

  function onToggle() {
    switched ? setSwitched(false) : setSwitched(true);
  }

  return (
    <button
      aria-disabled={disabled}
      disabled={disabled}
      onClick={onToggle}
      className={`${buttonColor} rounded-full w-9 h-5`}
      type="button"
    >
      <span className="sr-only">{label}</span>
      <span
        className={`${rectColor} ${rectPosition} block transition-all duration-250 rounded-full w-4 h-4`}
      ></span>
    </button>
  );
}

function setButtonColor(switched: boolean, disabled: boolean) {
  if (switched) {
    return disabled ? "bg-secondary-500" : "bg-secondary-300";
  } else {
    return "bg-neutral-300";
  }
}
