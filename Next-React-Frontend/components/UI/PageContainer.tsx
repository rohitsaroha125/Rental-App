import React from "react";

const PageContainer: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className="flex flex-col w-full h-full items-center overflow-x-hidden">
      {props.children}
    </div>
  );
};

export default PageContainer;
