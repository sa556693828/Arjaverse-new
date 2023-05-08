import React, { useContext } from "react";
import About from "../components/About/About";
import Title from "../components/Title/Title";
import VideoBg from "../components/VideoBg/VideoBg";

export default function Main() {
  return (
    <>
      <VideoBg />
      <Title />
      <About />
    </>
  );
}
