import React, { useState } from "react";
import { Flex, Image, Box } from "@chakra-ui/react";
import Logo from "../../assets/images/Logo.png";
import LinearButton from "../Button/LinearButton/LinearButton";

export default function Desktop(props) {
  const { goPage, ifAddressHasNFT } = props;
  const [showGotoMint, setShowGotoMint] = useState(false);
  const buttonStyle =
    "w-44 h-14 rounded-[26px] border-[3px] border-[#EC6F91] bg-[#FE87BD] text-3xl";
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
        <button className={buttonStyle}>Story</button>
        <button className={buttonStyle}>About</button>
        <button className={buttonStyle}>Seals</button>
        <button className={buttonStyle}>ShowRoom</button>
      </Flex>
      <div className="pl-3 hidden lg:block">
        <div
          onMouseEnter={() => {
            setShowGotoMint(true);
          }}
          onMouseLeave={() => {
            setShowGotoMint(false);
          }}
        >
          <LinearButton text="Connect Wallet" className="w-60 rounded-2xl" />

          {showGotoMint && (
            <button className="absolute w-56 h-56 text-2xl text-black bg-black font-medium z-40">
              Go to Mint
            </button>
          )}
        </div>
      </div>
    </>
  );
}
