import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { AccountContext } from "../Provider";
import NewBg from "../Background/NewBg";
import { Center, Flex, Image, Box } from "@chakra-ui/react";

export default function VideoBg() {
  const { ifAddressHasNFT } = useContext(AccountContext);
  const { address } = useAccount();
  const router = useRouter();
  const goPage = (page) => {
    router.push(page);
  };
  //h-[50vh]
  return (
    <NewBg>
      <Center className="h-[60vh]">
        <div className="w-full h-full">
          <video controls width="100%" height="100%">
            <source src="/videos/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Center>
    </NewBg>
  );
}
