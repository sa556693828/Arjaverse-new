import React, { useState } from "react";
import { Flex, Image, Box } from "@chakra-ui/react";
import Logo from "../../assets/images/Logo.png";
import LinearButton from "../Button/LinearButton/LinearButton";

export default function Desktop(props) {
  const { goPage, ifAddressHasNFT } = props;
  const [showGotoMint, setShowGotoMint] = useState(false);
  const buttonStyle =
    "w-44 h-14 rounded-[26px] border-[3px] border-[#EC6F91] bg-[#FE87BD] text-3xl flex items-center justify-center hover:opacity-80";
  return (
    <>
      <Flex align="center" onClick={() => goPage("/")} cursor={"pointer"}>
        <Image
          src={Logo.src}
          paddingY="2"
          width={{ base: "50px", sm: "60px" }}
          height={{ base: "60px", sm: "70px" }}
        />
        <Box className="text-[#FE87BD] font-extrabold text-2xl md:w-auto leading-6">
          Into The Arjaverse!
        </Box>
      </Flex>
      <Flex
        className="text-white hidden lg:flex justify-center"
        gap="3"
        width="60%"
      >
        <a className={buttonStyle} href="/#story">
          Story
        </a>
        <a className={buttonStyle} href="/#about">
          About
        </a>
        <a className={buttonStyle} href="/#seals">
          Seals
        </a>
        <a className={buttonStyle} href="/#showroom">
          ShowRoom
        </a>
      </Flex>
      <div className="pl-3 hidden lg:block relative">
        <div
          className="border-8 border-b-0 border-white"
          onMouseEnter={() => {
            setShowGotoMint(true);
          }}
          onMouseLeave={() => {
            setShowGotoMint(false);
          }}
        >
          <LinearButton
            text="Connect Wallet"
            className="w-60 rounded-2xl shadow-xl"
          />
          {showGotoMint && (
            <button className="absolute border-8 border-t-0 right-0 border-white w-64 h-20 text-2xl rounded-3xl text-white font-medium z-40">
              Go to Mint
            </button>
          )}
        </div>
      </div>
    </>
  );
}
