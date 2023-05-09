import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";

const LinearButton = ({ text }) => {
  return (
    <button className="w-60 px-2 h-14 bg-gradient-to-r from-[#FE87BD] to-[#79A0EB] flex items-center  justify-center text-2xl font-medium gap-2	rounded-[14px]">
      {text}
      <ArrowForwardIcon />
    </button>
  );
};

export default LinearButton;

export default LinearButton