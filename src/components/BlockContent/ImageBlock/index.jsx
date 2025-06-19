import Image from "next/image";
import { memo } from "react";
import { imageBuilder } from "../../../utils/sanity";

function ImageBlock(props) {
  const src = imageBuilder(props.node.asset).url();

  return (
    <figure className="relative mb-2 h-auto w-full last:mb-0">
      <Image
        className="h-auto w-full object-contain"
        src={src}
        width={1920}
        height={1080}
        alt={props.node.caption}
      />
      {props?.node?.caption && <figcaption>{props.node.caption}</figcaption>}
    </figure>
  );
}

export default memo(ImageBlock);
