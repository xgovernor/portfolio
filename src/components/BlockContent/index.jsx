import Block from '@sanity/block-content-to-react'
import { imageBuilder } from '../../utils/sanity';
import Image from 'next/image';


function CodeBlock(props) {
  return (
    <pre data-language={props.node.language}>
      <code>{props.node.code}</code>
    </pre>
  )
}

function TableBlock(props) {
  return (
    <div className="p_table">
      <table>
        <tbody>
        {(props.node.rows).map((row, i) => (
          (row._type === "tableRow") && (
            <tr key={row?._key}>
              {(row.cells).map((cel, i) => (
                <td key={i + row._key}>{cel}</td>
              ))}
            </tr>
          )
        ))}
        </tbody>
      </table>
    </div>
  )
}

function imageBlock(props) {
  const src = imageBuilder(props.node.asset).url();
  return (
        <figure className="relative w-full h-auto mb-2 last:mb-0">
          <Image
            className='object-contain w-full h-auto'
            src={src}
            width={1920}
            height={1080}
            alt={props.node.caption}
          />
          {props?.node?.caption && (
            <caption>{props.node.caption}</caption>
          )}
        </figure>
  )
}

function projectContentBlock(props) {
  return (
    <div className="px-5 md:px-10 py-10 md:py-16 flex flex-col">
      {props.node.subheading && <h6 className='text-[13px] mb-2'>{props.node.subheading}</h6>}
      {props.node.heading && <h2 className='max-w-5xl text-5xl'>{props.node.heading}</h2>}

      {props.node.paragraphs && props.node.paragraphs.length > 0 && <div className="relative w-full mt-7 flex max-md:flex-col justify-end gap-5 max-md:flex-wrap">
        {props.node.paragraphs && props.node.paragraphs.map((paragraph, i) => (
          <p key={i} className='w-full md:w-[calc((100%-60px)/4)] font-serif !text-[14px] !leading-[160%]'>{paragraph}</p>
        ))}
      </div>}
  </div>
  )
}

function dualImageBlock(props) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Image src={imageBuilder(props.node.image1).url()} width={910} height={1080} alt="" />
      <Image src={imageBuilder(props.node.image2).url()} width={910} height={1080} alt="" />
    </div>
  )
}

const serializers = {
  types: {
    code: CodeBlock,
    sizeChart: TableBlock,
    image: imageBlock,
    projectContent: projectContentBlock,
    dualImage: dualImageBlock
  },
}

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
