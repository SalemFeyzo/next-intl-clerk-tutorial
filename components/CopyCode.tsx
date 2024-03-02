"use client";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy, ClipboardCheck } from "lucide-react";

interface ICopyCode {
  pre: React.ClassAttributes<HTMLPreElement> &
    React.HTMLAttributes<HTMLPreElement> &
    any;
}

export default function CopyCode({ pre }: ICopyCode) {
  const [copied, setCopied] = useState(false);

  const codeChunk = pre.node.children[0].children[0].value;

  const language = pre.children[0]?.props.className.replace(/language-/g, "");

  return (
    <div className="relative overflow-x-hidden">
      <button
        className="right-3 top-7 absolute z-40 mr-2 mt-5"
        data-tip="Copy Code"
      >
        <CopyToClipboard
          text={codeChunk}
          onCopy={async () => {
            setCopied(true);
            await new Promise((resolve) => setTimeout(resolve, 500));
            setCopied(false);
          }}
        >
          {!copied ? (
            <Copy className="relative h-5 w-5 cursor-pointer text-gray-400 hover:text-blue-600" />
          ) : (
            <ClipboardCheck className="h-5 w-5 text-green-400" />
          )}
        </CopyToClipboard>
      </button>
      <span
        style={{
          bottom: 0,
          right: 0,
        }}
        className="absolute z-40 mb-5 mr-1 rounded-lg bg-base-content/40 p-1 text-xs uppercase text-base-300 backdrop-blur-sm"
      >
        {language}
      </span>
      <pre {...pre}></pre>
    </div>
  );
}
