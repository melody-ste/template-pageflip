import { useEffect, useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./Page";

export default function Book() {
  // Reference to the FlipBook instance, used to control navigation (next / prev page)
  const bookRef = useRef(null); 
  // Current page size (single page width & height), these values are passed directly to react-pageflip
  const [size, setSize] = useState({ w: 350, h: 500 });
  // Mobile breakpoint state : true  → mobile (1 page, portrait mode) / false → desktop (2 pages, landscape mode)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // Current flipped page index, used for UI logic (page numbers, visibility, etc.)
  const [currentPage, setCurrentPage] = useState(0);
  // Utility function to keep values inside a safe range, prevents the book from becoming too large or too small
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  // Mobile detection, listens to window resize and updates the mobile state
  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Resize, runs whenever the mobile / desktop mode changes
  useEffect(() => {
    const rawWidth = isMobile ? window.innerWidth * 0.85 : window.innerWidth * 0.45;
    const pageWidth = clamp(rawWidth, 280, 400);

    const pageHeight = pageWidth * 1.42;

    setSize({ w: pageWidth, h: pageHeight });
  }, [isMobile]);

  return (
    <>
      <div className="book-container">
        <HTMLFlipBook
         // changing the key forces a full remount, this is required with react-pageflip
          key={isMobile ? "mobile" : "desktop"}
          // ref gives access to pageFlip() API
          ref={bookRef}
          width={size.w}
          height={size.h}
          size="fixed"
          // Visual settings
          maxShadowOpacity={0.5}
          showCover
          mobileScrollSupport
          // Portrait mode on mobile (1 page) Landscape mode on desktop (2 pages)
          usePortrait={isMobile} 
          // track the current page index
          onFlip={(e) => setCurrentPage(e.data)}
        >
          <Page index={0} current={currentPage}>Couverture</Page>
          <Page index={1} current={currentPage}>Page 1</Page>
          <Page index={2} current={currentPage}>Page 2</Page>
          <Page index={3} current={currentPage}>Page 3</Page>
          <Page index={4} current={currentPage}>Dos</Page>
        </HTMLFlipBook>

        <div className="book-controls">
          <button onClick={() => bookRef.current.pageFlip().flipPrev()}>←</button>
          <button onClick={() => bookRef.current.pageFlip().flipNext()}>→</button>
        </div>
      </div>
    </>
    
  );
}
