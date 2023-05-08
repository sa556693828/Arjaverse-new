import React from "react";
import { Flex } from "@chakra-ui/react";
import bg from "../../assets/images/newBg2.png";
import Wave from "./Wave";

export default function AboutBg(props) {
  return (
    <Flex
      height="100%"
      w="100%"
      position="absolute"
      overflow="hidden"
      background="linear-gradient(180deg,#81CDF3 0%,#F2D0EE 100%)"
      //   bgRepeat="no-repeat"
      //   bgPos="center"
      //   bgSize="cover"
      //   bgImage={bg.src}
    >
      {props.children}
    </Flex>
  );
}
