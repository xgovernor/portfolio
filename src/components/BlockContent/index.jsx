import Block from '@sanity/block-content-to-react'
import CodeBlock from "./CodeBlock";
import TableBlock from "./TableBlock";
import ImageBlock from "./ImageBlock";
import DualImageBlock from "./DualImageBlock";
import ProjectContentBlock from "./ProjectContentBlock";

const serializers = {
  types: {
    code: CodeBlock,
    sizeChart: TableBlock,
    image: ImageBlock,
    projectContent: ProjectContentBlock,
    dualImage: DualImageBlock,
  },
};

function BlockContent({ content }) {
  return (
    <Block
        className="font-serif"
        blocks={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        serializers={serializers}
    />
  )
}

export default BlockContent
