import React, { PropsWithChildren } from "react";

const PageTemplate = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-full px-10">{children}</div>;
};

export default PageTemplate;
