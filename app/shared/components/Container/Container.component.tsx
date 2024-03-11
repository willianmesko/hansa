import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container w-[90vw] md:w-[50vw] p-2 mt-6 rounded-xl border-slate-200 m-auto  border-1">
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Container;
