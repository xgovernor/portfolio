import Link from "next/link";
import { truncate } from "../../../utils/string.utils";
import clsx from "clsx";
import { memo } from "react";
import Date from "../../Date";

function BlogCard({
  className,
  date,
  url,
  title,
  excerpt,
  isExternal = false, // Option to specify if the link is external
  ...rest
}) {
  return (
    <article
      className={clsx(
        "w-full max-w-[526px] flex flex-col justify-between border border-[#0000001f] hover:border-black p-[25px] lg:p-[35px] xl:max-w-[526px] xl:min-h-[400px] xl:p-[45px]",
        className
      )}
      {...rest}
      role="region"
      aria-labelledby="blog-card-title"
    >
      <header>
        <h4
          id="blog-card-date"
          className="uppercase font-bold text-[#000c19b3] mb-2 text-[12px] leading-[14px] lg:mb-2.5"
        >
          <Date dateString={date || ""} />
        </h4>
        <Link
          href={url}
          aria-labelledby="blog-card-title"
          rel={isExternal ? "noopener noreferrer" : undefined}
          target={isExternal ? "_blank" : undefined}
        >
          <h3
            id="blog-card-title"
            className="text-[#000c19] font-black hover:text-[#717171] mb-[15px] text-[22px] leading-[26px] md:leading-7 lg:mb-4 lg:text-[24px] lg:leading-8 xl:text-3xl xl:leading-10"
          >
            {truncate(title, 85)}
          </h3>
        </Link>
      </header>
      <p
        className="text-[#4d4d4dcc] font-sans text-xs mb-[25px] max-xl:text-[14px] max-lg:leading-5 lg:mb-[35px] lg:max-xl:leading-[22px] xl:text-[15px] xl:leading-[24px]"
        aria-label="Blog excerpt"
      >
        {truncate(excerpt, 205)}
      </p>
      <footer>
        <Link
          href={url}
          aria-label={`Read more about ${title}`}
          rel={isExternal ? "noopener noreferrer" : undefined}
          target={isExternal ? "_blank" : undefined}
          className="font-primary text-[#000c19] underline font-bold text-sm leading-4 uppercase hover:text-[#717171]"
        >
          Read more
        </Link>
      </footer>
    </article>
  );
}

export default memo(BlogCard);
