
import { Suspense } from "react";
import Container from '../Container';
import BlockContent from "../BlockContent";


function SingleContent({ content }) {
  return (
    <section className="p_single_content">
      <Container className="p_container">
        <Suspense fallback={<div>Loading</div>}>
          <BlockContent content={content} />
        </Suspense>
      </Container>
    </section>
  );
}

export default SingleContent;
