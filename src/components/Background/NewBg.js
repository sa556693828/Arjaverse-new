import React from "react";
import { Flex } from "@chakra-ui/react";
import bg from "../../assets/images/newBg.png";
import Wave from "./Wave";

export default function NewBg(props) {
  return (
    <Flex
      justifyContent="start"
      position="relative"
      overflow="hidden"
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      bgImage={bg.src}
      className="flex flex-col"
    >
      <div>{props.children}</div>
      <Flex className="h-[40vh]" flexDirection="column" w="full">
        <Wave className="z-20" />
        <div className="wave-bot z-20" />
      </Flex>
    </Flex>
  );
}
