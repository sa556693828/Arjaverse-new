import React, { useState } from "react";
// import Image from 'next/dist/client/image';
import { Center, Flex, Image, Box } from "@chakra-ui/react";
import Logo from "../../assets/images/Logo.png";
import HeaderButton from "./HeaderButton";
import NoSSRWrapper from "../NoSSRWrapper";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AiOutlineRight } from "react-icons/ai";
import LinearButton from "../Button/LinearButton/LinearButton";

export default function Desktop(props) {
  const { goPage, ifAddressHasNFT } = props;
  const [showGotoMint, setShowGotoMint] = useState(false);

  return (
    <>
      <Flex align="center" onClick={() => goPage("/")} cursor={"pointer"}>
        <Image
          src={Logo.src}
          width={{ base: "50px", sm: "60px", md: "auto" }}
          height={{ base: "40px", sm: "auto", md: "auto" }}
        />
        <Box
          className="text-[#FE87BD] font-extrabold text-2xl  md:w-auto leading-6"
        >
          Into The Arjaverse!

        </Box>
      </Flex>
      <Flex
        className="text-white"
        gap="4"
        justifyContent={"space-evenly"}
        display={{ base: "none", lg: "flex" }}
      >
        <button className="px-4 h-14 flex items-center justify-center	rounded-[26px] border-[3px] border-[#EC6F91] bg-[#FE87BD]  text-[32px] font-medium">
          Story
        </button>
        <button className="px-4 h-14 flex items-center justify-center rounded-[26px] border-[3px] border-[#EC6F91] bg-[#FE87BD]  text-[32px] font-medium">
          About
        </button>
        <button className="px-4 h-14	 flex items-center justify-center rounded-[26px] border-[3px] border-[#EC6F91] bg-[#FE87BD]  text-[32px] font-medium">
          Seals
        </button>
        <button className="px-4 h-14	 flex items-center justify-center rounded-[26px] border-[3px] border-[#EC6F91] bg-[#FE87BD]  text-[32px] font-medium">
          ShowRoom
        </button>
      </Flex>

      <div>


        <div className="hidden md:block" onMouseEnter={() => {
          setShowGotoMint(true);
        }}
          onMouseLeave={() => {
            setShowGotoMint(false);
          }}>
          <LinearButton text="Connect Wallet" />
        </div>

        {showGotoMint && (
          <button className="absolute w-56 h-16 text-2xl text-black bg-black	 font-medium ">
            Go to Mint
          </button>
        )}
      </div>

    </>
  );
}
