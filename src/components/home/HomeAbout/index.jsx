import Image from "next/image";
import Link from "next/link";
import IMG from "./../../../assets/images/about.webp";
import Container from "../../components/Container";
import { memo } from "react";

const HomeAbout = ({}) => {
  return (
    <section className="lg:max-xl:[padding:0_0_90px] xl:[padding:0_0_130px]">
      <Container className="max-md:p-0 md:max-xl:py-0 xl:w-full">
        <div className="relative block overflow-hidden [box-shadow:0_0_-100px_rgb(0_0_0_/_10%)]">
          <Image
            className="-z-[3]"
            src={`/images/home-about.jpg`}
            // src={IMG}
            alt="about"
            width={1088}
            height={556}
            layout="responsive"
          />
        </div>
      </Container>

      <Container className="max-md:py-10 max-md:px-[30px] md:max-lg:min-w-[513px] md:max-lg:max-w-[830px] md:max-lg:pt-[50px] md:max-lg:px-[130px] md:max-lg:pb-[80px] lg:max-xl:py-0">
        <div className="flex justify-between items-start max-lg:flex-col lg:max-xl:mt-[50px] xl:mt-[60px]">
          <div className="lg:w-full lg:max-xl:max-w-[310px] xl:max-w-[320px]">
            <h4 className="[font-family:'NHaasGroteskDSPro'] font-bold text-[12px] leading-[14px] text-[#4e545b]">
              ABOUT ME
            </h4>
            <h3 className="[font-family:'NHaasGroteskDSPro'] text-black uppercase max-lg:mt-2.5 max-lg:text-[22px] max-lg:leading-7 lg:mt-10 lg:max-xl:text-[28px] lg:max-xl:leading-[34px] xl:text-[34px] xl:leading-[38px]">
              Believe in <br />
              being different
            </h3>
          </div>

          <div className="max-lg:mt-5 lg:w-full lg:max-w-[562px]">
            <div className="">
              <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro'] [letter-spacing: 0.04em] text-justify text-[rgba(0,0,0,0.8)] max-lg:mb-[30px] max-lg:text-[14px] max-lg:leading-5 lg:mb-5 lg:max-xl:text-[13px] lg:leading-[22px] xl:text-[14px]">
                Anyone who knows me knows that I&apos;m a tech nerd who loves
                the internet. Or rather the possibilities that open up to us
                today. How I used to play with WordPress has become muscle
                memory today. This is one among many. These days, I primarily
                focus on MERN stack development. Isn&apos;t it fascinating to
                play with our favorite things? Oh! I forgot, I love to share my
                enthusiasm with others. , Sometimes, I arrange concise
                workshops/boot camps to help them see how uniquely different
                ways you could see a problem and find paths to solve it.
              </p>

              <Link
                href={`/about`}
                className="text-black font-bold text-xs [font-family:'NHaasGroteskDSPro'] underline"
              >
                MORE ABOUT ME
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default memo(HomeAbout);
