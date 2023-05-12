import React from "react";
import { Box } from "@chakra-ui/react";
import AboutBg from "../Background/AboutBg";
import Cards from "../Cards/Cards";

export default function About() {
  return (
    <AboutBg>
      <div id="about" />
      <Box
        fontWeight={"semibold"}
        zIndex="3"
        w="full"
        className="flex justify-center"
        mx="24"
      >
        <div className="flex flex-col relative rounded-3xl bg-[#FE87BD] p-10 h-fit text-4xl font-bold text-center gap-4 mx-2">
          <div
            className="strokeAbout"
            data-stroke="A planet with many seals - Arjaverse was born!"
          >
            A planet with many seals - Arjaverse was born!
          </div>
          <div
            className="strokeAbout"
            data-stroke="75% covered by water, ice, and gems,"
          >
            75% covered by water, ice, and gems,
          </div>
          <div
            className="strokeAbout"
            data-stroke="and its appearance retains the earth and unknown creatures!"
          >
            and its appearance retains the earth and unknown creatures!
          </div>
        </div>
      </Box>
    </AboutBg>
  );
}
