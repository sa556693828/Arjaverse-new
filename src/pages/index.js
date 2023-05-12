import React from "react";
import { Box } from "@chakra-ui/react";
import About from "../components/About/About";
import Title from "../components/Title/Title";
import VideoBg from "../components/VideoBg/VideoBg";
import Cards from "../components/Cards/Cards";
import ShowPage from "./show";
import Marquee from "../components/Marquee/Marquee";
import Mint from "../components/Mint/Mint";
import Footer from "../components/Footer/Footer";
//TODO: add animation

export default function Main() {
  return (
    <div className="w-full">
      <VideoBg />
      <Title />
      <Box background="linear-gradient(180deg, #81CDF3 0%, #CEE2D6 43.74%)">
        <About />
        <Cards />
        <Marquee />
        <Mint />
        <ShowPage />
        <Footer />
      </Box>
    </div>
  );
}
