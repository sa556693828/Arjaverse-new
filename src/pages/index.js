import React, { useContext, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Background from "../components/Background/Background";
import WaveButton from "../components/Button/WaveButton/WaveButton";
import { useAccount } from "wagmi";
import NoSSRWrapper from "../components/NoSSRWrapper";
import { AccountContext } from "../components/Provider"
import About from "../components/About/About";
import Title from "../components/Title/Title";
import VideoBg from "../components/VideoBg/VideoBg";
import Cards from "../components/Cards/Cards";
//TODO: add animation

export default function Main() {


  const { ifAddressHasNFT } = useContext(AccountContext);
  const { address } = useAccount();
  const router = useRouter();
  const goPage = (page) => {
    router.push(page);
  };

  return (
    <>
      <VideoBg />
      <Title />

      <div>
        <About />
        <Cards />

      </div>



    </>
  );
}
