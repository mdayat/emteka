import { type ComponentPropsWithRef, type ReactNode, forwardRef } from "react";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  size: "small" | "medium";
  variety: "primary" | "secondary" | "tertiary" | "ghost";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size,
      variety,
      leftIcon,
      rightIcon,
      className,
      disabled,
      type = "button",
      ...rest
    },
    ref
  ) => {
    const sizeStyle = size === "small" ? "text-sm px-3" : "text-base px-4";

    const iconSize =
      size === "small" ? "[&_svg]:w-5 [&_svg]:h-5" : "[&_svg]:w-6 [&_svg]:h-6";
    const iconGap = size === "small" ? "gap-x-1.5" : "gap-x-2";
    const iconStyle =
      leftIcon || rightIcon
        ? `${iconSize} ${iconGap} flex justify-between item-center [&_svg]:shrink-0 [&_svg]:fill-neutral-0 [&_svg]:disabled:fill-neutral-200`
        : "block";

    let varietyStyle = "";
    switch (variety) {
      case "primary":
        varietyStyle = "btn-primary-1";
        break;
      case "secondary":
        varietyStyle = "btn-secondary";
        break;
      case "tertiary":
        varietyStyle = "btn-tertiary";
        break;
      case "ghost":
        varietyStyle = "btn-ghost";
        break;
    }

    return (
      <button
        aria-disabled={disabled}
        disabled={disabled}
        className={`${sizeStyle} ${varietyStyle} ${className} ${iconStyle} font-karla font-bold rounded-[40px] py-2.5`}
        ref={ref}
        type={type}
        {...rest}
      >
        {leftIcon ? leftIcon : <></>}
        Button
        {rightIcon ? rightIcon : <></>}
      </button>
    );
  }
);

Button.displayName = "Button";
