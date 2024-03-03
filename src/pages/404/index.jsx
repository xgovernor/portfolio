import { memo } from "react";
import Container from "../../components/components/Container";
import Layout from "../../components/Layout";
import S from "./404.module.css";
import Meta from "../../components/Meta";

function Error404() {
  return (
    <>
      <Meta title="404" />
      <Layout>
        <div className={S.__404}>
          <Container className={S.__container}>
            <p className={S.__line}>
              <b>&apos;File not found&apos;</b>,
            </p>
            <p className={S.__line}>How dare they say!</p>
            <p className={S.__line}>I am here,</p>
            <p className={S.__line}>Just out of the way.</p>
            <br />
            <p className={S.__line}>How was i found?</p>
            <p className={S.__line}>A typo? A mistake?</p>
            <p className={S.__line}>Or were you snooping!</p>
            <br />
            <p className={S.__line}>Nonetheless we meet at last.</p>
            <p className={S.__line}>I am fount - hip hip hooray!</p>
            <p className={S.__line}>
              <b>&apos;File no found!&apos;</b> I loath that page!
            </p>
          </Container>

          <h1 className={S.__eCode}>404!</h1>
        </div>
      </Layout>
    </>
  );
}

export default memo(Error404);
