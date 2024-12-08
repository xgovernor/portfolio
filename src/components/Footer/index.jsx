import Image from "next/image";
import Container from "../Container";
// import { socialLinks } from "../../assets/data/routes";
import Link from "next/link";
import { SOCIAL_MEDIA } from "../../assets/data/links";


function Footer() {
  return (
    <>
      <footer className="pt-[60px] pb-[60px] bg-[#000c19]">
        <Container className=" mb-[130px] xl:px-0">

            <div className=" w-[35px] h-auto mb-[20px]">
              <Image
                src={`/images/branding/logo.svg`}
                width={34.59}
                height={35}
                alt="Logo"
              />
            </div>


            <p className="font-primary uppercase text-sm text-[#b9b9b9]">Let&apos;s make something great</p>
            <h4 className="mt-4 md:mt-6 font-primary [word-spacing:0.1em] text-2xl md:text-6xl [letter-spacing:0.02em] text-white font-bold hover:opacity-70">
              <Link href="mailto:abut1081@gmail.com">abut1081@gmail.com</Link>
            </h4>
        </Container>

        <Container className="flex flex-col gap-2 md:grid grid-cols-12 border-t border-[#ffffff1a] xl:px-0">
          <p className="col-span-4 font-primary text-[#b9b9b9] text-sm mt-5">
            © 2021-2024. Made with ❤️ at{" "}
            <Link
              className="hover:text-[#b9b9b9]"
              target="_blank"
              href="https://www.dot9.dev"
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
                      className="font-primary text-xs font-bold uppercase hover:opacity-70"
                      href={link.url}
                    >
                      {link.title}
                    </Link>
                  </li>
                )
              )}
          </ul>

          <ul className="mt-5 col-start-10 col-span-3 offset-1">
                  <li
                    className="font-primary text-xs font-bold uppercase text-[#b9b9b9] gap-2.5"
                  >
                      Shahajalal Uposhahar,
                  </li>
                  <li
                    className="font-primary text-xs font-bold uppercase text-[#b9b9b9] gap-2.5"
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
