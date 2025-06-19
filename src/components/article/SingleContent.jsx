import Container from "../Container";
import BlockContent from "../BlockContent";

function SingleContent({ content }) {
  return (
    <section className="p_single_content">
      <Container className="p_container px-[30px] pt-10 md:px-[50px] md:pt-[60px] lg:w-[862px] lg:pt-[70px] lg:pb-[30px]">
        <BlockContent content={content} />
      </Container>
    </section>
  );
}

export default SingleContent;
