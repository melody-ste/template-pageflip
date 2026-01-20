import { forwardRef } from "react";

const Page = forwardRef(({ children, index, current }, ref) => {
  const visible = index === current || index === current + 1;

  return (
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
