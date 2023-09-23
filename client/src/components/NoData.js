import React, { useState } from "react";
import SimpleModal from "./SimpleModal";
import Button from "./button";

const NoData = ({ title, button, image, getData }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" flex flex-col flex-wrap mt-8 items-center gap-7 justify-center">
      <img className=" h-44" src={image} alt="No data" />
      <p className=" text-center uppercase font-semibold opacity-60 tracking-wider text-lg">
        {title}
      </p>
      {button && <Button handleClick={() => setIsOpen(true)} title="Add" />}
      <SimpleModal getData={getData} isOpen={isOpen} closeModal={setIsOpen} />
    </div>
  );
};

export default NoData;
