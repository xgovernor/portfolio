import Link from "next/link";
import { truncate } from "../../../utils/string.utils";
import clsx from "clsx";
import { memo } from "react";
import Date from "../../Date";

function BlogCard({ className, date, url, title, excerpt, ...rest }) {
  return (
    <div
      className={clsx(
        "p_c__blogCard w-full flex flex-col justify-between border border-[#0000001f] hover:border-black max-lg:p-[25px] lg:p-[35px] xl:max-w-[526px] xl:min-h-[400px] xl:p-[45px]",
        className
      )}
      {...rest}
    >
      <div>
        <h4 className="uppercase [font-family:'NHaasGroteskDSPro'] font-bold text-[#000c19b3] max-md:mb-1.5 text-[12px] md:max-lg:mb-2 leading-[14px] lg:mb-2.5">
          <Date dateString={date || ""} />
        </h4>
        <Link href={url} className="">
          <h3 className="text-[#000c19] [font-family:'NHaasGroteskDSPro'] font-black hover:text-[#717171] max-lg:mb-[15px] max-lg:text-[22px] max-md:leading-[26px] max-lg:leading-7 lg:max-xl:mb-5 lg:max-xl:text-[24px] lg:max-xl:leading-[30px] xl:mb-[22px] xl:text-[30px] xl:leading-[38px]">
            {truncate(title, 85)}
          </h3>
        </Link>

        <p className="text-[#4d4d4dcc] [font-family:'Neue_Haas_Grotesk_Display_Pro'] text-[13px] max-lg:mb-[25px] max-xl:text-[14px] max-lg:leading-5 lg:mb-[35px] lg:max-xl:leading-[22px] xl:text-[15px] xl:leading-[24px]">
          {truncate(excerpt, 205)}
        </p>
      </div>

      <div>
        <Link
          href={url}
          className="[font-family:'NHaasGroteskDSPro'] underline text-[#000c19] font-bold text-3 leading-4 uppercase hover:text-[#717171]"
        >
          Read in details
        </Link>
      </div>
    </div>
  );
}

export default memo(BlogCard);
