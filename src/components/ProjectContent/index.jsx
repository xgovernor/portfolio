import { Suspense } from "react";
import Container from '../Container';
import BlockContent from "../BlockContent";

function ProjectContent({ content }) {
  return (
    <section>
      <Container className="relative max-w-full !px-0">
        <Suspense fallback={<div>Loading</div>}>
          <BlockContent content={content} />
        </Suspense>
      </Container>
    </section>
  );
}

export default ProjectContent;
