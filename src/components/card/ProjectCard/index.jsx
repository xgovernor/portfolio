import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { arrayToString } from "../../../utils/string.utils";
import clsx from "clsx";
import Container from "../../components/Container";

const ProjectCard = ({
  className,
  category,
  thumbnail,
  title,
  excerpt,
  technologies,
  url,
  ...rest
}) => {
  const img = thumbnail ? thumbnail : "/images/placeholder.png";

  return (
    <div
      className={clsx(
        "p_projectCard lg:[&:nth-child(even)>div]:flex-row-reverse",
        className
      )}
      {...rest}
    >
      {/* <Container className="p_projectCard__container flex justify-between items-center max-md:py-0 max-md:px-[30px] xl:w-[1088px]"> */}
      <Container className="p_projectCard__container flex justify-between items-center max-lg:flex-col-reverse max-md:gap-5 max-lg:gap-8 max-md:py-0 max-md:px-[30px]">
        <div className="p_projectCard__content w-full h-auto max-w-[439px]">
          <div className="w-full max-md:flex max-md:justify-between max-md:flex-row-reverse max-md:items-center">
            <h4 className=" uppercase [font-family:'NHaasGroteskDSPro'] font-bold text-[12px] leading-[14px]">
              {category}
            </h4>
            <h2 className="p_projectCard__title md:mt-2.5 text-black [font-family:'NHaasGroteskDSPro'] uppercase max-md:mt-0 max-md:text-[18px] max-md:leading-[22px] md:text-[28px] md:leading-8 lg:text-[32px] lg:leading-[38px]  xl:text-[34px] xl:leading-[38px]">
              {title}
            </h2>
          </div>
          <p className="text-justify mt-3 [font-family:'Neue_Haas_Grotesk_Display_Pro'] [letter-spacing: 0.04em] text-[rgba(0,0,0,0.8)] mb-2 max-lg:text-[14px] max-lg:leading-5 lg:max-xl:text-[13px] lg:leading-[22px] xl:text-[15px]">
            {excerpt}
          </p>
          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro'] [letter-spacing: 0.04em] text-[rgba(0,0,0,0.8)] mb-4 max-lg:text-[14px] max-lg:leading-5 lg:max-xl:text-[13px] lg:leading-[22px] xl:text-[15px]">
            <strong>Technologies: </strong>
            {arrayToString(technologies)}.
          </p>

          {url ? (
            <Link
              href={url}
              className="text-black hover:opacity-80 uppercase font-bold text-xs [font-family:'NHaasGroteskDSPro'] underline"
              target="_blank"
            >
              Visit Website
            </Link>
          ) : (
            <p className="font-bold text-xs [font-family:'NHaasGroteskDSPro'] uppercase">
              Coming soon
            </p>
          )}
        </div>

        <div className="p_projectCard__thumbnail w-full h-auto  max-lg:max-w-[585px] max-lg:max-h-[338px] lg:max-w-[378px] lg:max-h-[218px] xl:max-w-[562px] xl:max-h-[316px]">
          <div className="p_projectCard__image w-inherit max-w-[inherit] h-[inherit] max-h-[inherit]">
            <Image
              src={img}
              alt={title}
              width={562}
              height={323}
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default memo(ProjectCard);
