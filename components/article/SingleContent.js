// Core Components
import Image from "next/image";
import BlockContent from '@sanity/block-content-to-react'
import { memo } from "react";
// import markdownStyles from './../../styles/markdown.style.css'

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}

function SingleContent({content}) {
  return (
    <>
      <section className="p_single_content">
        <div className="p_container_single">
          {/* <BlockContent blocks={content} projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID} dataset={process.env.NEXT_PUBLIC_SANITY_DATASET} className={markdownStyles.markdown} /> */}
          <BlockContent blocks={content} projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID} dataset={process.env.NEXT_PUBLIC_SANITY_DATASET} serializers={serializers} />

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

          {/* <pre>
            <code>
              &lt;!DOCTYPE&gt;
              <br />
              &lt;html&gt;
              <br />
              {"    "}&lt;title&gt;Page title&lt;/title&gt;
              {"    "}
              <br />
              {"    "}
              <br />
              {"    "}&lt;script&gt;
              {"    "}
              <br />
              {"        "}function hello() {`{}`}
              <br />
              <br />
              {"        "}const hi = () =&gt; hello()
              {"    "}
              <br />
              {"    "}&lt;/script&gt;
              <br />
              <br />
              &lt;/html&gt;
              <br />
            </code>
          </pre> */}


          {/* <div className="p_1c_img">
            <Image
              src={`/images/img3.jpg`}
              width={862}
              height={344.3}
              alt="sdf asdf"
              layout="responsive"
            />
          </div> */}
        </div>
      </section>
    </>
  );
}

export default memo(SingleContent);
