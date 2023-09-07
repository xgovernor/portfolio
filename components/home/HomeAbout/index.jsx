import Image from "next/image";
import Link from "next/link";
import S from "./HomeAbout.module.sass";
import IMG from "./../../../assets/images/about.webp";
import Container from "../../components/Container";
import { memo } from "react";

const HomeAbout = ({}) => {
  return (
    <section className={S.__section}>
      <Container className={S.__headerContainer}>
        <div className={S.__imageWrapper}>
          <Image
            className={S.__image}
            // src={`/images/home-about.jpg`}
            src={IMG}
            alt="about"
            width={1088}
            height={556}
          />
        </div>
      </Container>

      <Container className={S.__bodyContainer}>
        <div className={S.__description}>
          <div className={S.__left}>
            <h4 className={S.__subHeading}>ABOUT ME</h4>
            <h3 className={S.__heading}>
              Believe in <br />
              being different
            </h3>
          </div>

          <div className={S.__right}>
            <div className={S.__rightContent}>
              <p className={S.__body}>
                Anyone who knows me knows that I&apos;m a tech nerd who loves
                the internet. Or rather the possibilities that open up to us
                today. How I used to play with WordPress has become muscle
                memory today. This is one among many. These days, I primarily
                focus on MERN stack development. Isn&apos;t it fascinating to
                play with our favorite things? Oh! I forgot, I love to share my
                enthusiasm with others. , Sometimes, I arrange concise
                workshops/boot camps to help them see how uniquely different
                ways you could see a problem and find paths to solve it.
              </p>

              <Link href={`/about`} className={S.__link}>
                KNOW MORE
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default memo(HomeAbout);
