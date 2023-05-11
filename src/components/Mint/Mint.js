import React from "react";
import { Box } from "@chakra-ui/react";
import pic from "../../assets/images/mintPic.png";
import pic2 from "../../assets/images/mintPic2.png";
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
              className="w-2/5 absolute left-[30%] top-5 z-50"
            />
          </div>

          <Box
            className={`${styles["marquee-text"]}`}
            pos="relative"
            zIndex="10"
          >
            <div
              className={styles["stroke"]}
              data-stroke="AWWAWAWAWWAWAWAWWAWAWAWAW"
            >
              AWWAWAWAWWAWAWAWWAWAWAWAW
            </div>

            <div
              className={styles["stroke"]}
              data-stroke="AAWWAWAAWWAWAAWWAWAAWWAWWWAW"
            >
              AAWWAWAAWWAWAAWWAWAAWWAWWWAW
            </div>
            <div
              className={styles["stroke"]}
              data-stroke="AWWAWAWWAWAWWAWAWWAWWWAW"
            >
              AWWAWAWWAWAWWAWAWWAWWWAW
            </div>
          </Box>
        </div>
        <div className="w-3/4 flex items-center justify-end z-40 relative">
          <img src={pic.src} alt="" className="absolute w-1/2 md:w-8/12" />
          <img src={pic2.src} className="absolute w-1/2 md:static md:w-8/12" alt="" />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="w-1/2 flex justify-center">
          <LinearButton
            text="Go to Mint"
            className="w-64 rounded-[42px] text-white"
          />
        </div>
      </div>
    </div>
  );
}
