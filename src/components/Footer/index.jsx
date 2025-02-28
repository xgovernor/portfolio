import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import { SOCIAL_MEDIA } from "../../assets/data/links";


function Footer() {
  return (
    <>
      <footer className="pt-[60px] pb-[60px] bg-[#000c19]" id="contact">
        <Container className=" mb-[130px] xl:px-0">

            <div className=" w-[35px] h-auto mb-[20px]">
              <Image
                src={`/images/branding/logo.svg`}
                width={34.59}
                height={35}
                alt="Dot9 Logo"
              />
            </div>


            <p className="font-sans uppercase text-sm text-[#b9b9b9]">Let&apos;s make something great</p>
            <h4 className="mt-4 md:mt-6 font-sans [word-spacing:0.1em] text-2xl md:text-6xl [letter-spacing:0.02em] text-white font-bold hover:opacity-70">
              <Link
            href="mailto:abut1081@gmail.com"
            aria-label="Email: abut1081@gmail.com"
          >
            abut1081@gmail.com
          </Link>
            </h4>
        </Container>

        <Container className="flex flex-col gap-2 md:grid grid-cols-12 border-t border-[#ffffff1a] xl:px-0">
          <p className="col-span-4 font-sans text-[#b9b9b9] text-sm mt-5">
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

          <ul className="mt-5 col-span-3 grid grid-cols-2">
            {SOCIAL_MEDIA.map(
                ( link, i ) => (
                  <li
                    key={i}
                    className="text-[#b9b9b9] gap-2.5"
                  >
                    <Link
                      className="font-sans text-xs font-bold uppercase hover:opacity-70"
                      href={link.url}
                  aria-label={`Visit ${link.title}`}
                    >
                      {link.title}
                    </Link>
                  </li>
                )
              )}
          </ul>

          <ul className="mt-5 col-start-10 col-span-3 offset-1">
                  <li
                    className="font-sans text-xs font-bold uppercase text-[#b9b9b9] gap-2.5"
                  >
                      Shahajalal Uposhahar,
                  </li>
                  <li
                    className="font-sans text-xs font-bold uppercase text-[#b9b9b9] gap-2.5"
                  >
                      Sylhet, Bangladesh
                  </li>
          </ul>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
