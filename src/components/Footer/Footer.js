import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { AccountContext } from "../Provider";
import { Center, Flex, Image, Box } from "@chakra-ui/react";
import Wave from "../Background/Wave";
import ig from "../../assets/images/igIcon.png";
import op from "../../assets/images/opIcon.png";

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
      <Flex className="h-[40vh]" flexDirection="column" w="full">
        <Wave className="z-20" />

        <div className="wave-bot z-20 flex justify-center">
          <div className="w-3/4 flex justify-between items-start">
            <div className="strokeFooter" data-stroke="Follow us!">
              Follow us!
            </div>
            <div className="flex gap-10">
              <Image src={ig.src} w="100px" h="100px" />
              <Image src={op.src} w="100px" h="100px" />
            </div>
          </div>
        </div>
      </Flex>
    </Flex>
  );
}
