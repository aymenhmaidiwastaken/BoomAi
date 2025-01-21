import React, { useEffect, useState } from "react";
import ClipboardJS from "clipboard";

const useClipboard = (configurations) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const clipboards = configurations.map(({ buttonClass, contentRef }) => {
      const clipboard = new ClipboardJS(buttonClass, {
        target: () => contentRef.current,
      });

      clipboard.on("success", () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
        setTimeout(() => setIsCopied(false), 1000);
        const textArea = document.createElement("textarea");
        textArea.value = contentRef.current.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      });

      return clipboard;
    });

    return () => {
      clipboards.forEach((clipboard) => clipboard.destroy());
    };
  }, [configurations]);

  return { isCopied };
};

export default useClipboard;
