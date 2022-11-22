import PropTypes from "prop-types";
import Container from "../components/Container";
import S from "./PageHeader.module.sass";

export default function PageHeader({ data }) {
  return (
    <>
      <section className={S.__pageHeader}>
        <Container className={S.__content}>
          <div className={S.__heading}>
            <h4 className={S.__title}>{data.heading}</h4>
          </div>

          <div className={S.__subHeading}>
            <h1 className={S.__subTitle}>
              {data.subheading &&
                data.subheading?.map((line, i) => (
                  <span className={S.__line} key={i}>
                    {line}
                  </span>
                ))}
            </h1>
          </div>
        </Container>
      </section>
    </>
  );
}

PageHeader.propTypes = {
  data: PropTypes.object.isRequired,
};
