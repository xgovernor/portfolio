import { memo } from "react";
import Container from "../Container";

function PageHeader({heading, subheading }) {
  return (
    <section>
      <Container className="max-md:flex max-md:h-auto max-md:min-h-[60vh] max-md:flex-col max-md:justify-end max-md:px-[30px] max-md:pt-24 max-md:pb-[40px] md:max-xl:pt-[100px] md:max-lg:px-[92px] md:max-lg:pb-[80px] lg:pb-[100px] lg:max-xl:px-[150px] xl:max-w-[972px] xl:pt-[120px]">
        <h4 className="text-xs font-bold text-[#000c19] uppercase opacity-[0.7] md:mb-2 lg:mb-2.5 xl:text-sm">
          {heading}
        </h4>

        <h1 className="flex flex-col items-start text-left text-[34px] leading-10 font-black -tracking-[0.0015em] text-[#000c19] uppercase [word-spacing:4px] md:text-[42px] md:leading-[48px] lg:text-[52px] lg:leading-[62px] lg:max-xl:w-[724px] xl:text-[68px] xl:leading-[68px]">
          {subheading?.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </h1>
      </Container>
    </section>
  );
}

export default PageHeader;
