import Link from "next/link";
import { truncate } from "../../../utils/string.utils";
import clsx from "clsx";
import { memo } from "react";
import Date from "../../Date";

function BlogCard({ className, date, url, title, excerpt, ...rest }) {
  return (
    <div
      className={clsx(
        "p_c__blogCard flex flex-col justify-between border border-[#0000001f] hover:border-black",
        className
      )}
      {...rest}
    >
      <div>
        <h4 className="uppercase [font-family:'NHaasGroteskDSPro'] font-bold text-[#000c19b3] max-md:mb-1.5 text-[12px] md:max-lg:mb-2 leading-[14px] lg:mb-2.5">
          <Date dateString={date || ""} />
        </h4>
        <Link href={url} className="p__title__link">
          <h3 className="p__title text-[#000c19] [font-family:'NHaasGroteskDSPro'] font-black hover:text-[#717171]">
            {truncate(title, 85)}
          </h3>
        </Link>

        <p className="p__excerpt text-[#4d4d4dcc] [font-family:'Neue_Haas_Grotesk_Display_Pro'] text-[13px]">
          {truncate(excerpt, 205)}
        </p>
      </div>

      <div>
        <Link
          href={url}
          className="p__readmore [font-family:'NHaasGroteskDSPro'] underline text-[#000c19] font-bold text-3 leading-4 uppercase hover:text-[#717171]"
        >
          Read in details
        </Link>
      </div>
    </div>
  );
}

export default memo(BlogCard);
