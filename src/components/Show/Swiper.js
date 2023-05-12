import React from "react";
// Import Swiper React components
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Image, Box } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function SwiperItem(props) {
  const { options, triggle, items } = props;

  return (
    <Flex width={"280px"} height={"140px"} justifyContent={"center"}>
      <Swiper
        slidesPerView={1}
        modules={[Navigation]}
        navigation={true}
        onActiveIndexChange={(index) => {
          triggle(index.activeIndex + 1);
        }}
      >
        {options.map((item, index) => (
          <SwiperSlide key={item.id} virtualIndex={index}>
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
            >
              {items === "effect" ? (
                <Box
                  className="flex w-1/2 justify-center rounded-[40px] p-4 border-4 border-[#FE87BD]"
                  bgImage={item.src}
                  bgRepeat="no-repeat"
                  bgPos="center"
                  bgSize="cover"
                />
              ) : items === "bg" ? (
                <Box
                  className="flex w-1/2 justify-center rounded-[40px] p-4 border-4 border-[#FE87BD]"
                  bgImage={item.src}
                  bgRepeat="no-repeat"
                  bgPos="center"
                  bgSize="cover"
                />
              ) : (
                <div className="flex w-1/2 justify-center bg-[#C5C5C5] rounded-md p-4 border-4 border-[#FE87BD]">
                  <Image src={item.src} width="auto" />
                </div>
              )}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex >
  );
}
