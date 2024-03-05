import Image from "next/image";
import Container from "../Container";
import { footerRoutes } from "../../assets/data/routes";
import Link from "next/link";

const FooterCTA = ({ text }) => {
  return (
    <div className="">
      <h4 className="[font-family:'NHaasGroteskDSPro'] [word-spacing:0.1em] text-[38px] leading-[48px] [letter-spacing:0.02em] text-white font-bold">
        {text.map((line, index) => (
          <span key={index}>
            {index !== 0 && <br />}
            <span>{line}</span>
          </span>
        ))}
      </h4>

      <div className="mt-3 text-white flex gap-2.5 [font-family:'Neue_Haas_Grotesk_Display_Pro'] [&_a]:opacity-70 [&_a]:font-medium [&>*]:uppercase">
        <Link
          className="hover:opacity-100"
          href="mailto:abutahermuhammad@outlook.com"
        >
          Email
        </Link>
        <Link
          className="hover:opacity-100"
          target="_blank"
          href="https://www.linkedin.com/in/abutahermuhammad?utm_source=portfolio&utm_medium=portfolio"
        >
          Linkedin
        </Link>
      </div>
    </div>
  );
};

const FooterMenu = ({ links }) => {
  return (
    <ul className="p_menu p__im max-lg:hidden ">
      {links &&
        links.map(
          (
            link // Looping through footer menu list object.
          ) => (
            <li
              key={link._id}
              className="mt-3 me-[35px] last-of-type:me-0 inline-block text-white gap-2.5 [font-family:'Neue_Haas_Grotesk_Display_Pro']"
            >
              <Link
                className="font-medium uppercase hover:opacity-70"
                href={link.url}
              >
                {link.title}
              </Link>
            </li>
          )
        )}
    </ul>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="pt-[75px] pb-[35px] bg-[#000c19]">
        <Container className="p_content mb-[95px] flex justify-between">
          <div className="p__left w-1/2">
            <div className="p_img_wrapper w-[35px] h-auto mb-[20px]">
              <Image
                src={`/images/branding/logo.svg`}
                width={34.59}
                height={35}
                layout="responsive"
                alt="Logo"
              />
            </div>

            <FooterCTA text={["LET’S MAKE", "SOMETHING GREAT"]} />
          </div>

          <div className="p__right">
            <FooterMenu links={footerRoutes} />
          </div>
        </Container>

        <Container className="border-t border-[#ffffff1a]">
          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro'] text-white text-sm mt-2.5">
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
        </Container>
      </footer>
    </>
  );
};

export default Footer;
