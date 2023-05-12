import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import sun from "../../assets/images/sun.png";

export default function ContentBg(props) {
  return (
    <Flex
      justifyContent="center"
      position="relative"
      bgImage={sun.src}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      {props.children}
    </Flex>
  );
}
