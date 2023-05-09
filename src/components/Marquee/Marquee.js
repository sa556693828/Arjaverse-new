import React from "react";
import styles from "./Marquee.module.css";
import cha1 from "../../assets/images/cha1.png";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import LinearButton from "../Button/LinearButton/LinearButton";

export default function Marquee() {
  return (
    <div className="h-full overflow-hidden">
      <Box
        className="stroke w-full text-center"
        fontWeight={"semibold"}
        fontSize={{ base: "60px", sm: "60px", md: "80px" }}
        marginTop={{ base: "100px", sm: "70px", md: "70px" }}
        color="#FE878D"
        zIndex="3"
        data-stroke=" Let's Be Seal！"
      >
        Let's Be Seal！
      </Box>
      <div className="flex flex-col gap-10">
        <Box className={styles["marquee-text"]} pos="relative">
          <div className="flex">
            <div className="flex shadow-card rounded-[40px]">
              <Image width="200" height="200" src={cha1} />
            </div>
          </div>
        </Box>
        <Box className={styles["marquee-text2"]} pos="relative">
          <div className="flex">
            <div className="flex shadow-card rounded-[40px]">
              <Image width="200" height="200" src={cha1} />
            </div>
          </div>
        </Box>
        <div className="flex justify-center mt-4">
          <LinearButton
            text="View on Opensea"
            className="w-64 rounded-[42px]"
          />
        </div>
      </div>
    </div>
  );
}
