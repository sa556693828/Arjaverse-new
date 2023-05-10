import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";

const LinearButton = ({ text, className }) => {
  return (
    <button
      className={`${className} px-4 h-14 bg-gradient-to-r from-[#FE87BD] to-[#79A0EB] flex items-center text-2xl font-medium hover:opacity-80`}
    >
      <div className="flex flex-1 text-center justify-center">{text}</div>
      <ArrowForwardIcon />
    </button>
  );
};

export default LinearButton;
