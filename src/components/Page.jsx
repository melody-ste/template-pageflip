import { forwardRef } from "react";

const Page = forwardRef(({ children, number }, ref) => {
  return (
    <div ref={ref} className="page">
      <div className="page-content">
        {children}
      </div>
      <span className="page-number">{number}</span>
    </div>
  );
});

export default Page;
