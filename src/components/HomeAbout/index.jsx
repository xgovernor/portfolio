import Image from "next/image";
import Link from "next/link";
import IMG from "./../../assets/images/home-about.webp";
import Container from "../Container";

function HomeAbout() {
  return (
    <section className="w-full pb-10 lg:pb-[90px] xl:pb-[130px]">
      <Container className="xl:px-0">
        <Image
          className="w-full h-auto rounded-2xl"
          src={IMG}
          alt="An about section cover featuring modern tech"
          width={1088}
          height={556}
          priority
        />
      </Container>

      <Container className="mt-5 md:mt-10 max-md:px-[30px] md:max-lg:max-w-[570px] lg:max-xl:px-10">
        <article className="flex justify-between items-start max-lg:flex-col lg:mt-[50px]">
          {/* About Section Heading */}
          <header className="lg:w-full lg:max-w-[310px] xl:max-w-[320px]">
            <h4 className="font-bold text-xs leading-[14px] text-[#4e545b]">
              ABOUT ME
            </h4>
            <h2 className="text-[#000c19] font-black uppercase mt-2.5 text-[22px] leading-7 lg:mt-10 lg:text-[28px] lg:leading-[34px] xl:text-[34px] xl:leading-[38px]">
              Believe in <br />
              being different
            </h2>
          </header>

          {/* About Section Content */}
          <div className="max-lg:mt-2.5 lg:w-full lg:max-w-[562px]">
            <p className="font-sans text-justify text-[#1A1A1A] mb-2 text-[13px] leading-[160%]">
              Hi, I am a full-stack developer based in Bangladesh. I started my career in 2019 as a WordPress developer and since then I am working with Laravel, Node.js, and React, NextJS, etc.</p>
            <p className="font-sans text-justify text-[#1A1A1A] mb-2 text-[13px] leading-[160%]">I am experienced with technologies like PHP, JavaScript, and Typescript, Python, and MySQL, etc. These days, I primarily focus on MERN stack development.
            </p>
            <p className="font-sans text-justify text-[#1A1A1A] mb-[30px] text-[13px] leading-[160%] lg:mb-5">Isn&apos;t it
              fascinating to work with your favorite tools? Oh! I forgot—I love
              sharing my enthusiasm with others. Sometimes, I arrange concise
              workshops or boot camps to showcase unique approaches to solving
              problems.
            </p>

            {/* About Section Link */}
            <div className="flex flex-col gap-2 [word-spacing:4px]">
            <Link
              href={`/article`}
              className="font-primary text-[#000c19] font-bold text-xs underline"
              aria-label="Learn more about me"
            >
              READ ARTICLES
              </Link>
            <Link
              href={`/work`}
              className="font-primary text-[#000c19] font-bold text-xs underline"
              aria-label="Learn more about me"
            >
              CHECK PROJECTS
            </Link>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
};

export default HomeAbout;
