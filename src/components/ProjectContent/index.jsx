import BlockContent from '@sanity/block-content-to-react'
import { Suspense } from "react";
import { imageBuilder } from '../../utils/sanity';
import Image from 'next/image';
import Container from '../Container';
import IMG1 from "./../../assets/images/case-1.webp"
import IMG2 from "./../../assets/images/case-2.webp"
import IMG3 from "./../../assets/images/case-3.webp"
import IMG4 from "./../../assets/images/case-4.jpeg"
import IMG5 from "./../../assets/images/case-5.webp"
import IMG6 from "./../../assets/images/case-6.jpeg"

const CodeBlock = (props) => {
  return (
    <pre data-language={props.node.language}>
      <code>{props.node.code}</code>
    </pre>
  )
}

const TableBlock = (props) => {
  return (
    <div className="p_table">
      <table>
        {(props.node.rows).map((row, i) => (
          (row._type === "tableRow") && (
            <tr key={row?._key}>
              {(row.cells).map((cel, i) => (
                <td key={i + row._key}>{cel}</td>
              ))}
            </tr>
          )
        ))}
      </table>
    </div>
  )
}

const imageBlock = (props) => {
  const src = imageBuilder(props.node.asset).url();
  return (
        <figure className='p_1c_img'>
          <Image
            src={src}
            fill
            style={{
              objectFit: 'contain',
            }}
            alt={props.node.caption}
          />
          {props?.node?.caption && (
            <caption>{props.node.caption}</caption>
          )}
        </figure>
  )
}

const contentBlock = (props) => {}

const serializers = {
  types: {
    code: CodeBlock,
    sizeChart: TableBlock,
    image: imageBlock
  },
}

function ProjectContent({ content }) {
  return (
    <section className="">
      <Container className="max-w-full !px-0">
        {/* <figure className> */}
          <Image src={IMG1} alt=""/>
          <Image src={IMG2} alt=""/>
        {/* </figure> */}

        <div className="px-5 md:px-10 py-10 md:py-16 flex flex-col">
            <h6 className='text-[13px] mb-2'>The Making of the Simulator</h6>
            <h2 className='max-w-5xl text-5xl'>From Product Engineering to Interactive Experience</h2>

            <div className="relative w-full mt-7 flex max-md:flex-col justify-end gap-5 max-md:flex-wrap">
                <p className='w-full md:w-[calc((100%-60px)/4)] font-sans !text-[14px] !leading-[160%]'>Wishing to accurately represent the color combinations and degree of architectural
                projection, our digital department worked
                closely with the engineering team responsible
                for developing the product at Hydrel. Many tests
                were conducted to cover the full spectrum of the
                product’s technical capabilities and offer a
                realistic WebGL rendering, facilitating the
                integration of high-performing interactive 3D
                graphics.</p>

                <p className='w-full md:w-[calc((100%-60px)/4)] font-sans !text-[14px] !leading-[160%]'>Ultimately, the simulator allows us to explore
                three lighting configurations (thin, wide, lotus), a
                range of preset color combinations (interior and
                exterior of the “flame”) and 4 options of wall
                styles on which the lighting is projected. It’s also
                possible to select the camera distance (close,
                medium, far) to visualize the effects and their
                ratio on the selected wall</p>
            </div>
        </div>

        <Image className='w-full' src={IMG4} alt="" />
        <div className="px-5 md:px-10 py-10 md:py-16 flex flex-col">
            <h6 className='text-[13px] mb-2'>UX & UI Design</h6>
            <h2 className='max-w-5xl text-5xl'>A Seamless and Immersive Experience</h2>

            <div className="relative w-full mt-7 flex max-md:flex-col justify-end gap-5 max-md:flex-wrap">
                <p className='w-full md:w-[calc((100%-60px)/4)] font-sans !text-[14px] !leading-[160%]'>As part of a broader vision for the product’s promotion, the simulator is accessible through a dedicated page created by our team on Hydrel’s website.</p>

                <p className='w-full md:w-[calc((100%-60px)/4)] font-sans !text-[14px] !leading-[160%]'>Colorful and dynamic, it provides a glimpse of the technological experience offered by Flame, in addition to facilitating demonstrating the product’s capabilities and features at trade shows.</p>

                <p className='w-full md:w-[calc((100%-60px)/4)] font-sans !text-[14px] !leading-[160%]'>With incorporated parallax animations and an inspiring narrative journey, the product page creates the desired ambiance to contextualize the light fixture by emphasizing the architectural elements, large-scale real estate or structural scenes it illuminates.</p>
            </div>
        </div>

        <Image src={IMG3} alt="" />

        <div className="grid grid-cols-2">
          <Image src={IMG5} alt="" />
          <Image src={IMG6} alt="" />
        </div>
        <div className="px-5 md:px-10 py-10 md:py-16 flex flex-col">
            <h6 className='text-[13px] mb-2'>Abut Hydrel</h6>
            <h2 className='max-w-5xl text-5xl leading-[58px]'>Hydrel’s mission is clear: become the leading brand of outdoor architectural lighting by using optical precision technology and manufacturing the most reliable light fixtures on the global market.</h2>
        </div>
      </Container>

      <Container className="">
        {/* <Suspense fallback={<div>Loading</div>}>
          <BlockContent
            className="font-sans"
            blocks={content}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            serializers={serializers}
          />
        </Suspense> */}


        {/* <div className="p_2c_img">
            <div className="p_2c_left">
              <Image
                src={`/images/img1.jpg`}
                width={413}
                height={341.77}
                alt="sdf asdf"
                layout="responsive"
              />
            </div>
            <div className="p_2c_right">
              <Image
                src={`/images/img2.jpg`}
                width={413}
                height={341.77}
                alt="sdf asdf"
                layout="responsive"
              />
            </div>
          </div> */}

      </Container>
    </section>
  );
}

export default ProjectContent;
