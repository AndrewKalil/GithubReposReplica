import React, { PropsWithChildren } from "react";

const PageTemplate = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-full lg:px-10 px-2">{children}</div>;
};

export default PageTemplate;
