import React from "react";
import { Flex, Image } from "@chakra-ui/react";

export default function ContentBg(props) {
  return (
    <Flex justifyContent="center" position="relative">
      {props.children}
    </Flex>
  );
}
