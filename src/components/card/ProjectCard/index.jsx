import Image from "next/image";
import Link from "next/link";
import { arrayToString } from "../../../utils/string.utils";
import clsx from "clsx";

const ProjectCard = ({
  className,
  category,
  thumbnail,
  title,
  excerpt,
  technologies,
  url,
  slug,
  ...rest
}) => {
  const img = thumbnail ? thumbnail : "/images/placeholder.png";

  return (
    <div
      className={clsx(
        "lg:[&:nth-child(even)>div]:flex-row-reverse",
        className
      )}
      {...rest}
    >
      <div className="flex justify-between items-center max-lg:flex-col-reverse gap-5 md:max-lg:gap-8">
        <div className="w-full h-auto max-w-[439px]">

          <div className="w-full max-md:flex max-md:justify-between max-md:flex-row-reverse max-md:items-center">
            <h4 className=" uppercase  font-bold text-[12px] leading-[14px]">
              {category}
            </h4>
            <h2 className="text-black text-lg leading-[22px] md:mt-2.5 md:text-[28px] md:leading-8 lg:text-[32px] lg:leading-[38px]  xl:text-[34px] xl:leading-[38px]">
              <Link href={`/project/${slug}`} className="hover:text-[#717171]">
                {title}
              </Link>
            </h2>
          </div>

          <p className="text-justify mt-3 font-sans text-[rgba(0,0,0,0.8)] mb-2 max-lg:text-[14px] max-lg:leading-5 lg:max-xl:text-[13px] lg:leading-[22px] xl:text-[15px]">
            {excerpt}
          </p>

          {technologies && <p className="font-sans mt-4 text-[rgba(0,0,0,0.8)] mb-4 max-lg:text-[14px] max-lg:leading-5 lg:text-[13px] lg:leading-[22px] xl:text-[15px]">
            <strong>Technologies: </strong>
            {arrayToString(technologies)}.
          </p>}

          {url ? (
            <Link
              href={url}
              className="font-primary text-black hover:opacity-80 uppercase font-bold text-xs  underline"
              target="_blank"
            >
              Visit Website
            </Link>
          ) : (
            <p className="font-primary font-bold text-xs  uppercase">
              Coming soon
            </p>
          )}
        </div>

        <div className=" max-lg:max-w-[585px] max-lg:max-h-[338px] lg:max-w-[378px] lg:max-h-[218px] xl:max-w-[562px] xl:max-h-[316px]">
          <Image
            className="rounded-xl"
              src={img}
              alt={title}
              width={562}
              height={323}
              loading="lazy"
            />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
