import React from "react";
import { Box } from "@chakra-ui/react";
import pic from "../../assets/images/mintPic.png";
import pic2 from "../../assets/images/pic2.gif";
import text from "../../assets/images/mintText.png";
import styles from "./Mint.module.css";
import LinearButton from "../Button/LinearButton/LinearButton";

export default function Mint() {
  return (
    <div>
      <div className="h-full w-full flex justify-end my-10 relative">
        <div className="w-1/4 flex flex-col items-end">
          <div className="h-1/2">
            <img
              src={text.src}
              alt=""
              className="w-2/5 absolute left-[10%] top-5 z-30"
            />
          </div>

          <Box
            className={`${styles["marquee-text"]}`}
            pos="relative"
            zIndex="10"
          >
            <div
              className={styles["strokeX"]}
              data-stroke="AWWAWAWAWWAWAWAWWAWAWAWAW"
            >
              AWWAWAWAWWAWAWAWWAWAWAWAW
            </div>
            <div
              className={styles["strokeX"]}
              data-stroke="AAWWAWAAWWAWAAWWAWAAWWAWWWAW"
            >
              AAWWAWAAWWAWAAWWAWAAWWAWWWAW
            </div>
            <div
              className={styles["strokeX"]}
              data-stroke="AWWAWAWWAWAWWAWAWWAWWWAW"
            >
              AWWAWAWWAWAWWAWAWWAWWWAW
            </div>
          </Box>
        </div>
        <div className="w-3/4 flex justify-end z-20">
          <img src={pic.src} className="absolute w-3/4 h-full  lg:w-[75%]" />
          <img
            src={pic2.src}
            alt=""
            className="w-full h-full lg:w-[100%] rounded-l-[40px] xl:rounded-l-[70px]"
          />
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-end">
        <div className="w-1/2 flex md:justify-center">
          <LinearButton
            text="Go to Mint"
            className="w-64 rounded-[42px] text-white"
          />
        </div>
      </div>
    </div>
  );
}
