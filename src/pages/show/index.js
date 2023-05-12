import React, { useState } from "react";
import {
  Grid,
  Image,
  Box,
  Flex,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import ContentBg from "../../components/Background/ContentBg";
import SwiperItem from "../../components/Show/Swiper";
import ShowImage from "../../components/Show/ShowImage";
import {
  bodys,
  bodysSlide,
  balls,
  eyes,
  eyesSlide,
  backgrounds,
  decorationsSlide,
  decorations,
  effects,
  effectsSlide,
} from "../../components/PicArray/PicArray";

export default function ShowPage() {
  const [bodyId, setBodyId] = useState(1);
  const [ballId, setBallId] = useState(1);
  const [eyeId, setEyeId] = useState(1);
  const [backgroundId, setBackgroundId] = useState(1);
  const [decorationId, setDecorationId] = useState(1);
  const [effectId, setEffectId] = useState(1);

  const setB = (ID) => {
    setBodyId(ID);
  };

  return (
    <>
      <Box
        width={"100%"}
        className=" top-6 md:top-16 text-center strokeTitle"
        justifyContent={"center"}
        data-stroke="Show Room"
      >
        Show Room
      </Box>
      <ContentBg seal={false}>
        <div id="showroom" />
        <Flex
          width={"100%"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          color={"#425673"}
          fontWeight={700}
          fontSize={"40px"}
          marginTop={{ base: "20px", sm: "20px", md: "50px" }}
          marginBottom={"50px"}
          flexDirection={"column"}
        >
          <Box
            fontSize={"16px"}
            backgroundColor="rgba(42,56,73,.6)"
            color="white"
            padding="10px"
            borderRadius="10px"
            marginTop={"10px"}
          >
            Select items to show your type
          </Box>
          {/* 電腦版 */}
          <Box
            width={"100%"}
            color={"black"}
            marginTop={"20px"}
            display={{ base: "none", md: "none", lg: "none", xl: "block" }}
          >
            <Grid
              gridTemplateColumns={{
                base: "1fr auto 1fr",
              }}
              gridTemplateRows={{
                base: "1fr auto 1fr",
              }}
              gridTemplateAreas={{
                base: `'body1 showResult body4' 'body2 showResult body5' 'body3 showResult body6'`,
              }}
              gap={4}
            >
              <Flex
                gridArea="body1"
                justifyContent={"center"}
                textAlign="center"
              >
                <Flex
                  flexDirection="column"
                  fontSize="30px"
                  textColor="#FE87BD"
                >
                  Body {bodyId}
                  <SwiperItem options={bodysSlide} triggle={setBodyId} />
                </Flex>
              </Flex>
              <Flex
                gridArea="body2"
                justifyContent={"center"}
                textAlign="center"
              >
                <Flex
                  flexDirection="column"
                  fontSize="30px"
                  textColor="#FE87BD"
                >
                  Ball {ballId}
                  <SwiperItem options={balls} triggle={setBallId} />
                </Flex>
              </Flex>
              <Flex
                gridArea="body3"
                justifyContent={"center"}
                textAlign="center"
              >
                <Flex
                  flexDirection="column"
                  fontSize="30px"
                  textColor="#FE87BD"
                >
                  Eyes {eyeId}
                  <SwiperItem options={eyesSlide} triggle={setEyeId} />
                </Flex>
              </Flex>
              <Flex
                gridArea="body4"
                justifyContent={"center"}
                textAlign="center"
              >
                <Flex
                  flexDirection="column"
                  fontSize="30px"
                  textColor="#FE87BD"
                >
                  Background {backgroundId}
                  <SwiperItem
                    options={backgrounds}
                    triggle={setBackgroundId}
                    items="bg"
                  />
                </Flex>
              </Flex>
              <Flex
                gridArea="body5"
                justifyContent={"center"}
                textAlign="center"
              >
                <Flex
                  flexDirection="column"
                  fontSize="30px"
                  textColor="#FE87BD"
                >
                  Decoration {decorationId}
                  <SwiperItem
                    options={decorationsSlide}
                    triggle={setDecorationId}
                  />
                </Flex>
              </Flex>
              <Flex
                gridArea="body6"
                justifyContent={"center"}
                textAlign="center"
              >
                <Flex
                  flexDirection="column"
                  fontSize="30px"
                  textColor="#FE87BD"
                >
                  Effects {effectId}
                  <SwiperItem
                    options={effectsSlide}
                    triggle={setEffectId}
                    items="effect"
                  />
                </Flex>
              </Flex>
              <Flex
                gridArea="showResult"
                justifyContent={"center"}
                textAlign="center"
              >
                <ShowImage
                  bodyImgSrc={bodys[bodyId - 1].src}
                  ballImgSrc={balls[ballId - 1].src}
                  decorationImgSrc={decorations[decorationId - 1].src}
                  eyeImgSrc={eyes[eyeId - 1].src}
                  effectImgSrc={effects[effectId - 1].src}
                  bgImgSrc={backgrounds[backgroundId - 1].src}
                />
              </Flex>
            </Grid>
          </Box>
          {/* 手機版 */}
          <Flex
            display={{
              base: "flex",
              sm: "flex",
              md: "flex",
              lg: "flex",
              xl: "none",
            }}
            flexDirection={"column"}
            marginTop={{ base: "20px", sm: "20px", lg: "50px" }}
            alignItems="center"
            width="100%"
            padding="20px 10px"
          >
            <ShowImage
              bodyImgSrc={bodys[bodyId - 1].src}
              ballImgSrc={balls[ballId - 1].src}
              decorationImgSrc={decorations[decorationId - 1].src}
              eyeImgSrc={eyes[eyeId - 1].src}
              effectImgSrc={effects[effectId - 1].src}
              bgImgSrc={backgrounds[backgroundId - 1].src}
            />
            <Tabs
              width={"100%"}
              marginTop={"20px"}
              colorScheme="white"
              variant="colorful"
              color={"white"}
              backgroundColor="rgba(57,57,57,.6)"
              borderRadius={"10px"}
            >
              <TabList justifyContent={"center"} width="100%" padding={"8px 0"}>
                <Tab fontSize={"16px"} flex="1">
                  身體
                </Tab>
                <Tab fontSize={"16px"} flex="1">
                  球
                </Tab>
                <Tab fontSize={"16px"} flex="1">
                  眼睛
                </Tab>
                <Tab fontSize={"16px"} flex="1">
                  背景
                </Tab>
                <Tab fontSize={"16px"} flex="1">
                  配件
                </Tab>
                <Tab fontSize={"16px"} flex="1">
                  特效
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Flex
                    width={"auto"}
                    flexWrap={"wrap"}
                    justifyContent="flex-start"
                  >
                    {bodys.map((i, index) => (
                      <Image
                        key={index}
                        src={i.src}
                        width={"33%"}
                        height={"auto"}
                        border={"2px solid red"}
                        marginTop="10px"
                        cursor="pointer"
                        borderColor={bodyId === i.id ? "red" : "transparent"}
                        onClick={() => setBodyId(i.id)}
                      />
                    ))}
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex
                    width={"auto"}
                    flexWrap={"wrap"}
                    justifyContent="flex-start"
                  >
                    {balls.map((i, index) => (
                      <Image
                        key={index}
                        src={i.src}
                        width={"33%"}
                        height={"auto"}
                        border={"2px solid red"}
                        marginTop="16px"
                        cursor="pointer"
                        borderColor={ballId === i.id ? "red" : "transparent"}
                        onClick={() => setBallId(i.id)}
                      ></Image>
                    ))}
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex
                    width={"auto"}
                    flexWrap={"wrap"}
                    justifyContent="flex-start"
                  >
                    {eyes.map((i, index) => (
                      <Image
                        key={index}
                        src={i.src}
                        width={"33%"}
                        height={"auto"}
                        border={"2px solid red"}
                        marginTop="10px"
                        cursor="pointer"
                        borderColor={eyeId === i.id ? "red" : "transparent"}
                        onClick={() => setEyeId(i.id)}
                      ></Image>
                    ))}
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex
                    width={"auto"}
                    flexWrap={"wrap"}
                    justifyContent="flex-start"
                  >
                    {backgrounds.map((i, index) => (
                      <Image
                        key={index}
                        src={i.src}
                        width={"33%"}
                        height={"auto"}
                        border={"2px solid red"}
                        marginTop="10px"
                        cursor="pointer"
                        borderColor={
                          backgroundId === i.id ? "red" : "transparent"
                        }
                        onClick={() => setBackgroundId(i.id)}
                      ></Image>
                    ))}
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex
                    width={"auto"}
                    flexWrap={"wrap"}
                    justifyContent="flex-start"
                  >
                    {decorations.map((i, index) => (
                      <Image
                        key={index}
                        src={i.src}
                        width={"33%"}
                        height={"auto"}
                        border={"2px solid red"}
                        marginTop="10px"
                        cursor="pointer"
                        borderColor={
                          decorationId === i.id ? "red" : "transparent"
                        }
                        onClick={() => setDecorationId(i.id)}
                      ></Image>
                    ))}
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex
                    width={"auto"}
                    flexWrap={"wrap"}
                    justifyContent="flex-start"
                  >
                    {effects.map((i, index) => (
                      <Image
                        key={index}
                        src={i.src}
                        width={"33%"}
                        height={"auto"}
                        border={"2px solid red"}
                        marginTop="10px"
                        cursor="pointer"
                        borderColor={effectId === i.id ? "red" : "transparent"}
                        onClick={() => setEffectId(i.id)}
                      ></Image>
                    ))}
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </ContentBg>
    </>
  );
}
