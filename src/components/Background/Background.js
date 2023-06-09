import React from "react";
// 背景
import { Flex, Image, Box } from "@chakra-ui/react";
// import arja from "../../assets/svg/arja.png";
import arja from "../../assets/arja.png";
// import arja from "../../assets/svg/arja.png";
import cloud1 from "../../assets/images/clouds/0.png";
import cloud2 from "../../assets/images/clouds/1.png";
import seagull1 from "../../assets/images/seagull/4.png";
import seagull2 from "../../assets/images/seagull/1.png";

export default function Background(props) {
  return (
    <>
      <Flex
        className="dashboard"
        height={{ base: "400px", sm: "500px", md: "500px" }}
        minHeight={{ base: "35vh" }}
        position="relative"
        textAlign="center"
        overflow="hidden"
        color="white"
        justifyContent="center"
        alignItems="center"
        background="linear-gradient(180deg,rgba(154, 208, 243, 1) 0%,#81CDF3 100%)"
        flexDirection="column"
      >
        {/* cloud 1 */}
        <Image
          src={cloud1.src}
          position="absolute"
          width={{ base: "100px", sm: "100px", md: "auto" }}
          left="0"
          top={{ base: "30px", sm: "30px", md: "300px" }}
          zIndex="2"
        />
        {/* cloud 2 */}
        <Image
          src={cloud2.src}
          position="absolute"
          width={{ base: "200px", sm: "200px", md: "auto" }}
          right={{ base: "-10%", sm: "-10%", md: "10%" }}
          top={{ base: "180px", sm: "180px", md: "200px" }}
          zIndex="2"
        />

        <Image
          src={seagull2.src}
          position="absolute"
          right="100px"
          top="100px"
          display={{ base: "none", sm: "none", md: "block" }}
        />
        <Image
          width="200px"
          src={seagull2.src}
          position="absolute"
          right="100px"
          top="150px"
          display={{ base: "none", sm: "none", md: "block" }}
        />
        {props.children}
        {/* sun */}
        <Flex
          alignItems="center"
          justifyContent="center"
          width={{ base: "300px", sm: "300px", md: "436px" }}
          height={{ base: "300px", sm: "300px", md: "436px" }}
          backgroundColor="rgba(255, 229, 201, .4)"
          borderRadius="50%"
          position="absolute"
          left="10%"
          top="53px"
          zIndex="1"
        >
          <Flex
            width={{ base: "250px", sm: "250px", md: "372px" }}
            height={{ base: "250px", sm: "250px", md: "372px" }}
            borderRadius="50%"
            backgroundColor="rgba(255, 229, 201, 1)"
          />
          <Image
            width={{ base: "100px", sm: "120px", md: "120px" }}
            src={seagull1.src}
            position="absolute"
            left={{ base: "200px", sm: "150px", md: "150px" }}
            top={{ base: "-20px", sm: "50px", md: "50px" }}
          />
          <Image
            width={{ base: "120px", sm: "180px", md: "180px" }}
            src={seagull1.src}
            position="absolute"
            left={{ base: "200px", sm: "40px", md: "40px" }}
            top={{ base: "10px", sm: "110px", md: "110px" }}
          />
        </Flex>
      </Flex>
    </>
  );
}
