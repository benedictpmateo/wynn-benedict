import { useEffect, useState } from "react";

function useDirection() {
  const [dir, setDir] = useState(
    () => document.documentElement.getAttribute("dir") || "ltr"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newDir = document.documentElement.getAttribute("dir") || "ltr";
      setDir((prevDir) => {
        return newDir !== prevDir ? newDir : prevDir;
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    return () => observer.disconnect();
  }, []);

  return dir;
}

export default useDirection;
