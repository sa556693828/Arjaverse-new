import React from "react";
import { Flex, Box, Center } from "@chakra-ui/react";
import AboutBg from "../Background/AboutBg";

export default function About() {
  return (
    <AboutBg>
      <Box
        fontWeight={"semibold"}
        zIndex="3"
        w="full"
        className="flex justify-center"
        mx="24"
      >
        <div className="flex flex-col relative  rounded-3xl bg-[#FE87BD] p-10 h-fit text-3xl text-center gap-4">
          <div
            className="stroke"
            data-stroke="A planet with many seals - Arjaverse was born!"
          >
            A planet with many seals - Arjaverse was born!
          </div>
          <div
            className="stroke"
            data-stroke="75% covered by water, ice, and gems,"
          >
            75% covered by water, ice, and gems,
          </div>
          <div
            className="stroke"
            data-stroke="and its appearance retains the earth and unknown creatures!"
          >
            and its appearance retains the earth and unknown creatures!
          </div>
        </div>
      </Box>
      <div className="">ssssss</div>
    </AboutBg>
  );
}
