import clsx from "clsx";
import { memo } from "react";

function Container({ className, children, ...rest }) {
  return (
    <div
      className={clsx(
        "w-full max-w-[1128px] mx-auto max-md:px-5 md:max-lg:px-10 lg:max-xl:px-[60px] max-xl:border-box xl:[box-sizing:content-box]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default memo(Container);
