import Link from "next/link";
import Container from "../Container";
import { SOCIAL_MEDIA } from "../../assets/data/links";

function HomeHero({
  cvURL = "https://drive.google.com/file/d/1tFy9tBWntPE0hhPFde8tLjCrR6CzGdzs/view?usp=drive_link"
}) {
    return (
      <section>
        <Container className="w-full max-w-screen-xl pt-[55px] pb-10 md:pt-[85px] md:pb-[100px] lg:pt-[105px] lg:pb-[80px] xl:pt-[130px] xl:pb-[65px]">
          <h1 className="font-black flex flex-col items-center text-center text-black uppercase text-[32px] leading-tight lg:leading-[86px] md:text-6xl lg:text-7xl">
              <span>Designer, developer</span>
              <span>and freethinker.</span>
          </h1>

          <div className="mt-2.5 flex gap-4 justify-center">
              {SOCIAL_MEDIA.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  title={social.name}
                  area-label={`${social.name} profile`}
                  className="text-[#B2B5B7] hover:text-black"
                  target="_blank"
                >
                  {social.icon}
                </a>
              ))}
          </div>

          <div className="flex justify-center items-center max-xl:mt-20 xl:mt-[120px]">
            <Link
              href={cvURL}
              className="font-medium font-serif rounded-full text-sm px-5 py-2.5 me-2 mb-2 border-[#B2B5B7] border text-[#000c19] hover:text-[#313131]"
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
