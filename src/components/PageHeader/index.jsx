import { memo } from "react";
import Container from "../Container";

function PageHeader({heading, subheading }) {
  return (
    <section className="">
       <Container className="max-md:min-h-[60vh] max-md:h-auto max-md:flex max-md:flex-col max-md:justify-end max-md:px-[30px] max-md:pt-24 max-md:pb-[40px] md:max-xl:pt-[100px] md:max-lg:pb-[80px] md:max-lg:px-[92px] lg:pb-[100px]  lg:max-xl:px-[150px] xl:max-w-[972px] xl:pt-[120px]">
          <h4 className="uppercase text-[#000c19] opacity-[0.7]  font-bold text-xs md:mb-2 lg:mb-2.5 xl:text-sm">
            {heading}
          </h4>

          <h1 className=" font-black -tracking-[0.0015em] [word-spacing:4px] text-[#000c19] text-left flex flex-col items-start uppercase text-[34px] leading-10 md:text-[42px] md:leading-[48px] lg:max-xl:w-[724px] lg:text-[52px] lg:leading-[62px] xl:text-[68px] xl:leading-[76px]">
            {subheading?.map((line, i) => (
                <span className="" key={i}>
                  {line}
                </span>
              ))}
          </h1>
      </Container>
    </section>
  );
}

export default PageHeader;
