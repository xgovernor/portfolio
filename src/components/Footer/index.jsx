import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import { SOCIAL_MEDIA } from "../../assets/data/links";


function Footer() {
  return (
    <>
      <footer className="bg-[#000c19] pt-[60px] pb-[60px]" id="contact">
        <Container className="mb-[130px] xl:px-0">
          <div className="mb-[20px] h-auto w-[96px]">
            <Image
              src={`/favicon-light.svg`}
              width={96}
              height={96}
              alt="Dot9 Logo"
            />
          </div>

          <p className="font-sans text-sm text-[#b9b9b9] uppercase">
            Let&apos;s make something great
          </p>
          <h4 className="mt-4 font-sans text-2xl font-bold [letter-spacing:0.02em] text-white [word-spacing:0.1em] hover:opacity-70 md:mt-6 md:text-6xl">
            <Link
              href="mailto:abut1081@gmail.com"
              aria-label="Email: abut1081@gmail.com"
            >
              abut1081@gmail.com
            </Link>
          </h4>
        </Container>

        <Container className="flex grid-cols-12 flex-col gap-2 border-t border-[#ffffff1a] md:grid xl:px-0">
          <p className="col-span-4 mt-5 font-serif text-sm font-medium text-[#b9b9b9]">
            © 2021-2024. Made with ❤️ at{" "}
            <Link
              href="https://www.dot9.dev"
              target="_blank"
              className="hover:text-white"
              aria-label="Visit Dot9 website"
            >
              Dot9
            </Link>
            .
          </p>

          <ul className="col-span-3 mt-5 grid grid-cols-2">
            {SOCIAL_MEDIA.map((link, i) => (
              <li key={i} className="gap-2.5 text-[#b9b9b9]">
                <Link
                  className="font-sans text-xs font-bold uppercase hover:opacity-70"
                  href={link.url}
                  aria-label={`Visit ${link.title}`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="offset-1 col-span-3 col-start-10 mt-5">
            <li className="gap-2.5 font-sans text-xs font-bold text-[#b9b9b9] uppercase">
              Shahajalal Uposhahar,
            </li>
            <li className="gap-2.5 font-sans text-xs font-bold text-[#b9b9b9] uppercase">
              Sylhet, Bangladesh
            </li>
          </ul>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
