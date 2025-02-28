import Link from "next/link";
import Container from "../Container";
import { SOCIAL_MEDIA } from "../../assets/data/links";

function HomeHero({
  title = ["Designer, developer", "and freethinker."],
  cvURL = "https://drive.google.com/file/d/1WZctwHtbSrtyLavPO4epSTORAwCDeF8k/view?usp=sharing"
}) {
    return (
      <section className="">
        <Container className="w-full max-w-screen-xl pt-[55px] pb-10 md:pt-[85px] md:pb-[100px] lg:pt-[105px] lg:pb-[80px] xl:pt-[130px] xl:pb-[70px]">
          <h1 className="font-black flex flex-col items-center text-center text-black uppercase text-[32px] leading-tight lg:leading-[86px] md:text-6xl lg:text-7xl">
            {title.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </h1>

          <div className="mt-2.5 flex gap-4 justify-center">
              {SOCIAL_MEDIA.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  title={social.name}
                  className="text-[#B2B5B7] hover:text-black"
                  target="_blank"
                >
                  {social.icon}
                </a>
              ))}
          </div>

          <div className="flex justify-center items-center max-xl:mt-20 xl:mt-[130px]">
            <Link
              href={cvURL}
              className="font-primary text-black font-bold text-sm underline"
              download
              target="_blank"
            >
              DOWNLOAD CV
            </Link>
          </div>
        </Container>
      </section>
    );
};

export default HomeHero;
