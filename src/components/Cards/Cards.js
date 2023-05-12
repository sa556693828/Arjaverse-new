import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import cha1 from "../../assets/images/cha1.png";
import cha2 from "../../assets/images/cha2.png";
import cha3 from "../../assets/images/cha3.png";
import { useDeviceDetect } from "../../lib/media-query";

export default function Cards() {
  const { isTabletOrMobile } = useDeviceDetect();

  return (
    <div className="w-full">
      <Box className="w-full flex justify-center">
        <Box
          className="strokeTitle"
          fontWeight={"semibold"}
          fontSize={{ base: "60px", sm: "60px", md: "80px" }}
          marginTop={{ base: "100px", sm: "70px", md: "70px" }}
          color="#FE878D"
          zIndex="3"
          data-stroke="Characters"
        >
          Characters
        </Box>
      </Box>
      <Box className="grid grid-cols-3 gap-4 md:gap-14 w-11/12 md:w-4/5 mx-auto mt-8">
        <div
          className="rounded-2xl md:rounded-[40px] bg-white/60 flex flex-col justify-between"
          data-aos-delay={isTabletOrMobile ? 0 : 300}
          data-aos="flip-left"
        >
          <div className="flex flex-1 items-center justify-center">
            <Image width="650" height="500" src={cha1} />
          </div>
          <div className="cardText bg-[#FE87BD] text-white text-xs md:text-5xl text-center py-8 rounded-b-2xl md:rounded-b-[40px]">
            Chubby Seal
          </div>
        </div>
        <div
          className="rounded-2xl md:rounded-[40px] bg-white/60 flex flex-col justify-between"
          data-aos-delay={isTabletOrMobile ? 0 : 600}
          data-aos="flip-left"
        >
          <div className="flex flex-1 items-center justify-center">
            <Image width="650" height="650" src={cha2} />
          </div>
          <div className="bg-[#FE87BD] text-white text-xs md:text-5xl text-center py-8 rounded-b-2xl md:rounded-b-[40px]">
            Seal Arja
          </div>
        </div>
        <div
          className="rounded-2xl md:rounded-[40px] bg-white/60 flex flex-col justify-between"
          data-aos-delay={isTabletOrMobile ? 0 : 900}
          data-aos="flip-left"
        >
          <div className="flex flex-1 items-center justify-center">
            <Image width="650" height="500" src={cha3} />
          </div>
          <div className="bg-[#FE87BD] text-white text-xs md:text-5xl text-center py-8 rounded-b-2xl md:rounded-b-[40px]">
            Arjaverse
          </div>
        </div>
      </Box>
    </div>
  );
}
