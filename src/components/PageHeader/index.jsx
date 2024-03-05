import { memo } from "react";
import Container from "../Container";

function PageHeader({ data }) {
  return (
    <section className="w-full relative block bg-[#f6f6f6]">
      <Container className="max-md:min-h-[140px] max-md:h-auto max-md:px-[30px] max-md:pt-[50px] max-md:pb-[40px] md:max-xl:pt-[100px] md:max-lg:pb-[80px] md:max-lg:px-[92px] lg:max-xl:pb-[100px]  lg:max-xl:px-[150px] xl:max-w-[972px] xl:pt-[120px] xl:pb-[110px]">
        <div className="max-md:mb-2">
          <h4 className="uppercase text-[#000c19] opacity-[0.7] [font-family:'NHaasGroteskDSPro'] font-bold text-xs md:mb-2 lg:mb-2.5 xl:text-sm">
            {data.heading}
          </h4>
        </div>

        <div className="">
          <h1 className="[font-family:'NHaasGroteskDSPro'] font-bold text-[#000c19] text-left flex flex-col items-start uppercase text-[34px] leading-[42px] md:text-[48px] md:leading-[62px] lg:max-xl:w-[724px] lg:text-[58px] lg:leading-[72px] xl:text-[72px] xl:leading-[82px]">
            {data.subheading &&
              data.subheading?.map((line, i) => (
                <span className="" key={i}>
                  {line}
                </span>
              ))}
          </h1>
        </div>
      </Container>
    </section>
  );
}

export default memo(PageHeader);
