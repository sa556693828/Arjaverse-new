import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import cloud1 from "../../assets/arja.png";

const Cards = () => {
  return (
    <>
      <Box className="w-full bg-black flex justify-center">
        <Box
          className="titles"
          fontWeight={"semibold"}
          fontSize={{ base: "60px", sm: "60px", md: "120px" }}
          marginTop={{ base: "100px", sm: "70px", md: "70px" }}
          lineHeight={{ base: "70px", sm: "70px", md: "100px" }}
          color="#425673"
          zIndex="3"
        >
          Chracters
        </Box>
      </Box>
      <Box className="grid grid-cols-3 gap-4 md:gap-14 w-11/12 md:w-4/5 mx-auto my-8">
        <div className="rounded-2xl md:rounded-[40px] bg-black">
          <Image width="1000" height="1000" src={cloud1} />
          <div className="bg-[#FE87BD] text-xs md:text-5xl text-center py-8 rounded-b-2xl md:rounded-b-[40px]">
            Chubby Seal
          </div>
        </div>
        <div className="rounded-2xl md:rounded-[40px] bg-black">
          <Image width="1000" height="1000" src={cloud1} />
          <div className="bg-[#FE87BD] text-xs md:text-5xl text-center py-8 rounded-b-2xl md:rounded-b-[40px]">
            Chubby Seal
          </div>
        </div>
        <div className="rounded-2xl md:rounded-[40px] bg-black">
          <Image width="1000" height="1000" src={cloud1} />
          <div className="bg-[#FE87BD] text-xs md:text-5xl text-center py-8 rounded-b-2xl md:rounded-b-[40px]">
            Chubby Seal
          </div>
        </div>
      </Box>
    </>
  );
};

export default Cards;
