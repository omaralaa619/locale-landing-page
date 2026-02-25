import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`px-5 md:px-8 lg:px-12 xl:px-20 mx-auto max-w-[1400px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
