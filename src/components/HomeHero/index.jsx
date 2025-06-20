import Link from "next/link";
import Container from "../Container";
import { SOCIAL_MEDIA } from "../../assets/data/links";

function HomeHero({
  cvURL = "https://drive.google.com/file/d/1tFy9tBWntPE0hhPFde8tLjCrR6CzGdzs/view?usp=drive_link"
}) {
    return (
      <section>
        <Container className="w-full max-w-screen-xl pt-[55px] pb-10 md:pt-[85px] md:pb-[100px] lg:pt-[105px] lg:pb-[80px] xl:pt-[130px] xl:pb-[65px]">
          <h1 className="flex flex-col items-center text-center text-[32px] leading-tight font-black text-black uppercase md:text-6xl lg:text-[80px] lg:leading-[92px]">
            <span>Designer, developer</span>
            <span>and freethinker.</span>
          </h1>

          <div className="mt-2.5 flex justify-center gap-4">
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

          <div className="flex items-center justify-center max-xl:mt-20 xl:mt-[120px]">
            <Link
              href={cvURL}
              className="me-2 mb-2 rounded-full border border-[#B2B5B7] px-5 py-2.5 font-serif text-sm font-medium text-[#000c19] hover:text-[#313131]"
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
