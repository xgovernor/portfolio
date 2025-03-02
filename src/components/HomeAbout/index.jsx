import Image from "next/image";
import Link from "next/link";
import IMG from "./../../assets/images/home-about.webp";
import Container from "../Container";
import WorkExperience from "./WorkExperience";

function HomeAbout() {
  return (
    <section className="w-full pb-10 lg:pb-[90px] xl:pb-[130px]" id="about">
      <Container className="xl:px-0">
        <Image
          className="w-full h-auto rounded-2xl"
          src={IMG}
          alt="An about section cover featuring modern tech"
          width={1088}
          height={556}
        />
      </Container>

      <Container className="mt-5 md:mt-10 max-md:px-[30px] md:max-lg:max-w-[570px] lg:max-xl:px-10">
        <article className="flex justify-between items-start max-lg:flex-col lg:mt-[50px]">

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
          <div className="space-y-7 max-lg:mt-2.5 lg:w-full lg:max-w-[562px]">
            <div>
              <p className="font-serif text-justify text-black mb-2 text-[15px] font-medium">
                Hi, I am a Software Developer based in Bangladesh; Currently, doing my B.Sc. in Computer Science & Engineering. I started my career in 2019 as a WordPress developer and since then I have been working with Laravel, Node.js, React, NextJS, etc.</p>
              <p className="font-serif text-justify text-[#1A1A1A] mb-2 text-[15px] leading-[160%]">I am experienced with technologies like PHP, JavaScript, and Typescript, Python, and MySQL, etc. These days, I primarily focus on MERN stack development.
              </p>
            </div>

            <WorkExperience />
{/*
            <p className="font-serif text-justify text-[#1A1A1A] mb-[30px] text-[13px] leading-[160%] lg:mb-5">So far I have had the experience of working with some amazing peoples from <Link className="font-bold font-sans underline" href="https://freelancerlabbd.com/" target="_blank">Freelancer Lab</Link>, <Link className="font-bold font-sans underline" href="https://www.linkedin.com/company/ferne-health/" target="_blank">Ferne Health</Link>. Currently experimenting with some interesting ideas like <Link className="font-bold font-sans underline" href="https://at-mah.vercel.app/projects/simbio" title="SIMBIO is a non-profit, web-based platform designed to revolutionize blood donation by connecting donors with patients in need in a seamless and efficient manner." target="_blank">SIOMBIO</Link>, <Link className="font-bold font-sans underline" href="https://at-mah.vercel.app/projects/wpl-toolkit" target="_blank">WPL Toolkit</Link> at <Link className="font-bold font-sans underline" href="https://dot9.dev" target="_blank">Dot9.dev</Link>.</p> */}

            {/* About Section Link */}
            <div className="flex flex-col gap-3">
              <Link
              href={`/blog`}
                className="w-fit font-medium font-serif rounded-full text-sm px-4 py-2 me-2 text-[#171717] hover:text-[#383838] hover:bg-[rgb(242,242,242)] border border-[#B2B5B7] hover:border-[#383838]"
              aria-label="Learn more about the articles I have written"
              >
                Read Articles
              </Link>
              <Link
              href={`/projects`}
                className="w-fit font-medium font-serif rounded-full text-sm px-4 py-2 me-2 text-[#FFF] bg-[#171717] hover:bg-[#383838] border border-[#171717] hover:border-[#383838]"
                aria-label="Learn more about the projects I have worked on"
              >
                Check projects
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
};

export default HomeAbout;
