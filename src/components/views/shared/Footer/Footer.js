import Image from "next/image";
import Container from "./../../../components/Container";
import { footerRoutes } from "./../../../../assets/data/routes";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import FooterCTA from "./FooterCTA/FooterCTA";
import FooterMenu from "./FooterMenu/FooterMenu";

const Footer = () => {
  return (
    <>
      <footer>
        <Container className="p_content">
          <div className="p__left">
            <div className="p_img_wrapper">
              <Image
                src={`/images/branding/logo.svg`}
                width={34.59}
                height={35}
                layout="responsive"
                alt="Logo"
              />
            </div>

            {/**
             * Footer CTA Component
             *
             * This component take text lines as argument.
             * Argument is a JavaScript array. Every line
             * of text is an element of this array.
             */}
            <FooterCTA text={["LET’S MAKE", "SOMETHING GREAT"]} />
          </div>

          <div className="p__right">
            <ul className="p_menu p__im">
              {/**
               * Footer Menu Component
               *
               * This is the mene location in the footer section.
               */}
              <FooterMenu links={footerRoutes} />
            </ul>
          </div>
        </Container>

        {/**
         * Copyright singleArticleHeader
         *
         * This the last component of a page.
         * Here written about the copyright.
         */}
        <FooterCopyright text="© 2021 - 2022. All right reserved by author." />
      </footer>
    </>
  );
};

export default Footer;
