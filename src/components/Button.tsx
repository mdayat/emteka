import { type ComponentPropsWithRef, type ReactNode, forwardRef } from "react";

type ButtonSize = "small" | "medium";
type ButtonVariant = "primary" | "secondary" | "tertiary" | "ghost";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  size: ButtonSize;
  variant: ButtonVariant;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size,
      variant,
      leftIcon,
      rightIcon,
      className,
      disabled,
      type = "button",
      ...rest
    },
    ref
  ) => {
    const variantStyle = setVariantStyle(variant, size);

    const textSize = size === "small" ? "text-sm" : "text-base";
    const iconSize =
      size === "small" ? "[&_svg]:w-5 [&_svg]:h-5" : "[&_svg]:w-6 [&_svg]:h-6";

    const iconGap = size === "small" ? "gap-x-1.5" : "gap-x-2";
    const iconStyle =
      leftIcon || rightIcon
        ? `${iconSize} ${iconGap} flex justify-between item-center [&_svg]:shrink-0 [&_svg]:disabled:fill-neutral-200`
        : "block";

    return (
      <button
        aria-disabled={disabled}
        disabled={disabled}
        className={`${textSize} ${variantStyle} ${iconStyle} ${className} font-karla font-bold rounded-[40px]`}
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

function setVariantStyle(variant: ButtonVariant, size: ButtonSize): string {
  switch (variant) {
    case "primary": {
      const paddingSize = size === "small" ? "px-3" : "px-4";
      return `${paddingSize} btn-primary-1 py-2.5`;
    }

    case "secondary": {
      const paddingSize = size === "small" ? "px-2.5" : "px-3.5";
      return `${paddingSize} btn-secondary py-2`;
    }

    case "tertiary": {
      const paddingSize = size === "small" ? "px-3" : "px-4";
      return `${paddingSize} btn-tertiary py-2.5`;
    }

    case "ghost": {
      const paddingSize = size === "small" ? "px-3" : "px-4";
      return `${paddingSize} btn-ghost py-2.5`;
    }
  }
}
