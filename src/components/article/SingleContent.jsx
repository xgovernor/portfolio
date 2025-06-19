import Container from "../Container";
import BlockContent from "../BlockContent";

function SingleContent({ content }) {
  return (
    <section className="p_single_content">
      <Container className="p_container">
        <BlockContent content={content} />
      </Container>
    </section>
  );
}

export default SingleContent;
