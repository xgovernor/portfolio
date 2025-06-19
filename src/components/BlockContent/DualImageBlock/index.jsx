import Image from "next/image";
import { memo } from "react";
import { imageBuilder } from "../../../utils/sanity";

function DualImageBlock(props) {
  const { image1, image2 } = props?.node || {};
  if (!image1 || !image2) {
    return null;
  }

  return (
    <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
      {[image1, image2].map((image, index) => {
        return (
          <figure className="relative" key={index}>
            <Image
              className="h-auto w-full object-contain"
              src={imageBuilder(image).url()}
              width={910}
              height={1080}
              alt={image.alt || ""}
            />
            <figcaption className="absolute right-0 bottom-0 left-0 bg-white/45 px-2.5 py-1 text-xs italic">
              {image.caption || ""}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

export default memo(DualImageBlock);
