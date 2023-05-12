import React from "react";
import { Flex } from "@chakra-ui/react";

export default function AboutBg(props) {
  return (
    <Flex
      // height="100%"
      w="100%"
      overflow="hidden"
      className="flex flex-col justify-center items-center"
    >
      {props.children}
    </Flex>
  );
}
