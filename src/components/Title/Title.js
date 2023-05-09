import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Background from "../Background/Background";

export default function Title() {
  return (
    <Background>
      <Box
        className="titles"
        fontWeight={"semibold"}
        fontSize={{ base: "60px", sm: "60px", md: "120px" }}
        marginTop={{ base: "100px", sm: "70px", md: "70px" }}
        lineHeight={{ base: "70px", sm: "70px", md: "100px" }}
        color="#425673"
        zIndex="3"
      >
        <div className="strokeText" data-stroke={`Into The`}>
          <div className="strokeText2" data-stroke={`Into The`} id="title">
            Into The
          </div>
        </div>
      </Box>
      <Box
        className="titles"
        fontWeight={"semibold"}
        fontSize={{ base: "60px", sm: "60px", md: "120px" }}
        marginTop={{ base: "43px", sm: "40px", md: "40px" }}
        lineHeight={{ base: "70px", sm: "70px", md: "100px" }}
        color="#425673"
        zIndex="3"
      >
        <div className="strokeText" data-stroke="Arjaverse!">
          <div className="strokeText2" data-stroke="Arjaverse!" id="title">
            Arjaverse!
          </div>
        </div>
      </Box>
    </Background>
  );
}
