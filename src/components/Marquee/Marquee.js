import React, { useEffect } from "react";
import styles from "./Marquee.module.css";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import LinearButton from "../Button/LinearButton/LinearButton";
import Pic from "./Pic/Pic";

export default function Marquee() {
  const { data } = Pic();
  const firstHalf = data.slice(0, data.length / 2);
  const secondHalf = data.slice(data.length / 2);

  return (
    <div className="h-full overflow-hidden" id="seals">
      <Box
        className="strokeLet w-full text-center"
        fontWeight={"semibold"}
        fontSize={{ base: "60px", sm: "60px", md: "80px" }}
        marginTop={{ base: "100px", sm: "70px", md: "70px" }}
        color="#FE878D"
        zIndex="3"
        data-stroke="Let's Be Seal！"
      >
        Let's Be Seal！
      </Box>

      <div className="flex flex-col gap-10">
        <Box className={styles["marquee-text"]} pos="relative">
          <div className="flex gap-3 w-[1000vw]">
            {firstHalf.map((item, index) => {
              return <Image width="200" height="200" src={item} key={index} />;
            })}
          </div>
        </Box>
        <Box className={styles["marquee-text2"]} pos="relative">
          <div className="flex gap-3 w-[1000vw]">
            {secondHalf.map((item, index) => {
              return <Image width="200" height="200" src={item} key={index} />;
            })}
          </div>
        </Box>
        <div className="flex justify-center mt-4">
          <LinearButton
            text="View on Opensea"
            className="w-64 rounded-[42px] text-white"
          />
        </div>
      </div>
    </div>
  );
}
