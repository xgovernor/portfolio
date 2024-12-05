import clsx from "clsx";
import { memo } from "react";

function Container({ className,size = "lg", children, ...rest }) {
  return (
    <div
      className={clsx(
        "w-full mx-auto px-5 box-border",
        size === "sm" && "max-w-[762px]",
        size === "md" && "max-w-[862px]",
        size === "lg" && "max-w-[1168px]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default memo(Container);
