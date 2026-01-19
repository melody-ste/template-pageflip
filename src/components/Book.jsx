import { useEffect, useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./Page";

export default function Book() {

  const bookRef = useRef(null);
  const [size, setSize] = useState({ w: 350, h: 500 });

  useEffect(() => {
    const updateSize = () => {
    const isMobile = window.innerWidth < 768;

    const pageWidth = isMobile ? window.innerWidth * 0.98 : Math.min(window.innerWidth * 0.45, 420);

    const pageHeight = pageWidth * 1.42;

    setSize({ w: pageWidth, h: pageHeight });
  };


    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <div className="book-container">
        <HTMLFlipBook
          ref={bookRef}
          width={size.w}
          height={size.h}
          size="fixed"
          maxShadowOpacity={0.5}
          showCover
          mobileScrollSupport
          usePortrait={false} 
        >
          <Page number={1}>Couverture</Page>
          <Page number={2}>Page 1</Page>
          <Page number={3}>Page 2</Page>
          <Page number={4}>Page 3</Page>
          <Page number={5}>Dos</Page>
        </HTMLFlipBook>

        <div className="book-controls">
          <button onClick={() => bookRef.current.pageFlip().flipPrev()}>←</button>
          <button onClick={() => bookRef.current.pageFlip().flipNext()}>→</button>
        </div>
      </div>
    </>
    
  );
}
