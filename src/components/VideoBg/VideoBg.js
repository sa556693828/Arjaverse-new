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
      <div className="h-[20vh] sm:h-[40vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh]">
        <video controls width="100%" height="100%">
          <source src="/videos/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </NewBg>
  );
}
