import { memo } from "react";

function CodeBlock(props) {
  return (
    <div className="relative mx-auto w-full max-w-[710px] text-[#e0e0e0]">
      <div className="rounded-t border-b border-[#1f1f1f] bg-[#0b0b0c] px-6 pt-3 pb-2">
        <span className="text-sm font-medium capitalize">
          {props.node.language}
        </span>
      </div>
      <pre
        className="overflow-x-auto rounded-b bg-[#0b0b0c] px-6 pt-3 pb-5 font-mono text-sm leading-6 [scrollbar-width:none]"
        data-language={props.node.language}
      >
        <code className="font-mono">{props.node.code}</code>
      </pre>
    </div>
  );
}

export default memo(CodeBlock);
