import React from "react";

const Container = ({ children }) => {
  return (
    <div className="md:flex flex-col justify-center md:h-screen items-center">
      <div className="bg-[#F3F6F7] md:shadow-xl md:w-[38rem] w-full md:rounded-3xl h-screen md:h-min p-6 px-8 flex flex-col gap-8">
        {children}
      </div>
    </div>
  );
};

export default Container;
