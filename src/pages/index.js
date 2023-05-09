import React from "react";
import About from "../components/About/About";
import Title from "../components/Title/Title";
import VideoBg from "../components/VideoBg/VideoBg";
import Cards from "../components/Cards/Cards";
//TODO: add animation

export default function Main() {
  return (
    <>
      <VideoBg />
      <Title />
      <About />
      <Cards />
    </>
  );
}
