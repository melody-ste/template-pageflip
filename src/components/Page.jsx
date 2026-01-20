import { forwardRef } from "react";

// Each page MUST use forwardRef.
// react-pageflip relies on the DOM reference to correctly measure and position pages.

const Page = forwardRef(({ children, index, current }, ref) => {
  const visible = index === current || index === current + 1;

  return (
    // Root element of the page.
    // The ref MUST be attached here for react-pageflip to work
    <div ref={ref} className="page">
      <div className="page-content">
        {children}
      </div>

      {visible && (
        <div className="page-number">
          {index + 1}
        </div>
      )}
    </div>
  );
});

export default Page;
