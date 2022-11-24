import Link from "next/link";
import Container from "../../../../components/components/Container";
import S from "./HomeHero.module.sass";

const HomeHero = ({ title, cvURL }) => {
  return (
    <>
      <section className={S.__section}>
        <Container className={S.__container}>
          <h1 className={S.__title}>
            {title.map((line, index) => (
              <span key={index}>
                <span>{line}</span>
                {index !== title.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className={S.__downloadButton}>
            <Link href={cvURL}>
              <a className="p__btn" target="_blank">
                DOWNLOAD CV
              </a>
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
};

export default HomeHero;
