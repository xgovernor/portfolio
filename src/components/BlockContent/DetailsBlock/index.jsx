import { memo } from "react";
import BlockContent from "..";

function DetailsBlock(props) {
  return (
    <div className="relative mx-auto w-full max-w-[710px]">
      <details>
        <summary className="cursor-pointer rounded-t pt-2 pb-2">
          <span className="font-medium text-[#000c19]">
            {props.node.summary}
          </span>
        </summary>
        <div
          className="overflow-x-auto px-[16px] pt-1 font-mono text-sm leading-6 [scrollbar-width:none]"
          data-language={props.node.language}
        >
          <BlockContent content={props.node.content} />
        </div>
      </details>
    </div>
  );
}

export default memo(DetailsBlock);
