import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./Page";

export default function Book() {

  const [size, setSize] = useState({ w: 350, h: 500 });

  useEffect(() => {
    const updateSize = () => {
      const isMobile = window.innerWidth < 768;

      const w = isMobile ? window.innerWidth * 0.98 : Math.min(window.innerWidth * 0.9, 350);
      const h = w * 1.42;
      setSize({ w, h });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <HTMLFlipBook
      width={size.w}
      height={size.h}
      size="fixed"
      maxShadowOpacity={0.5}
      showCover
      mobileScrollSupport
    >
      <Page number={1}>Couverture</Page>
      <Page number={2}>Page 1</Page>
      <Page number={3}>Page 2</Page>
      <Page number={4}>Page 3</Page>
      <Page number={5}>Dos</Page>
    </HTMLFlipBook>
  );
}
