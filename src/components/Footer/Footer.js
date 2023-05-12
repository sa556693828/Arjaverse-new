import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { AccountContext } from "../Provider";
import { Center, Flex, Image, Box } from "@chakra-ui/react";
import Wave from "../Background/Wave";

export default function Footer() {
  const { ifAddressHasNFT } = useContext(AccountContext);
  const { address } = useAccount();
  const router = useRouter();
  const goPage = (page) => {
    router.push(page);
  };
  return (
    <Flex
      justifyContent="start"
      position="relative"
      overflow="hidden"
      className="flex flex-col"
    >
      <div className="flex"></div>
      <Flex className="h-[40vh]" flexDirection="column" w="full">
        <Wave className="z-20" />
        <div className="wave-bot z-20" />
      </Flex>
    </Flex>
  );
}
