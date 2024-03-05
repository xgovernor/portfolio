import { memo } from "react";
import Container from "../Container";
import Date from "../Date";
import Link from "next/link";

function SingleHeader({ data }) {
  return (
    <section className=" max-md:pt-10 max-lg:pb-10 md:max-lg:pt-[60px] lg:max-xl:pt-[80px] lg:max-xl:pb-[60px] xl:pt-[130px] xl:pb-[100px]">
      <Container className="max-w-[862px]">
        <p className="p_meta_cat [font-family:'NHaasGroteskDSPro'] font-bold text-black uppercase max-xl:b-2.5 max-xl:text-xs xl:text-sm">
          {data?.category?.map((item, i) => (
            <span key={item._id}>
              {i !== 0 ? <span> | </span> : ""}
              <Link
                className="text-[#000c19] [font-family:'NHaasGroteskDSPro'] cursor-pointer hover:text-[#717171]"
                href={`/article?category=${item.title.toLowerCase()?.split(" ").join("-")}`}
              >
                {item.title}{" "}
              </Link>
            </span>
          ))}
        </p>
        <h1 className="[font-family:'NHaasGroteskDSPro'] font-bold text-[#000c19] [overflow-wrap:break-all] [hyphens:manual] mb-2.5 max-md:text-[34px] max-md:leading-[38px]  md:max-lg:text-[48px] md:max-lg:leading-[58px] lg:max-xl:text-[58px] lg:max-xl:leading-[72px]  xl:text-[62px] xl:leading-[72px]">
          {data?.title}
        </h1>
        <p className="text-[#000c19b3] text-[14px] leading-[14px] [font-family:'Neue_Haas_Grotesk_Display_Pro']">
          {data.date._updatedAt ? "Updated " : ""}
          <Date
            dateString={
              data.date._updatedAt ? data.date._updatedAt : data.date._createAt
            }
          />
        </p>
      </Container>
    </section>
  );
}

export default memo(SingleHeader);
