import React, { useState } from "react";
import {
  Flex,
  DrawerOverlay,
  DrawerContent,
  Drawer,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEns } from "../../hooks/useEns.js";
import LinearButton from "../Button/LinearButton/LinearButton";

export default function Mobile(props) {
  const ethIcon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzI1MjkyRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMjhhMTQgMTQgMCAxIDAgMC0yOCAxNCAxNCAwIDAgMCAwIDI4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMjhhMTQgMTQgMCAxIDAgMC0yOCAxNCAxNCAwIDAgMCAwIDI4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTguMTkgMTQuNzcgMTQgMTguMjFsNS44LTMuNDQtNS44IDguMTktNS44MS04LjE5WiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNCAxNi45My01LjgxLTMuNDRMMTQgNC4zNGw1LjgxIDkuMTVMMTQgMTYuOTNaIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCIgeDI9IjE0IiB5MT0iMCIgeTI9IjI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIxNCIgeDI9IjE0IiB5MT0iMTQuNzciIHkyPSIyMi45NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjkiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4K";
  const { address } = useAccount();
  const { data: ens } = useEns(address);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hover, setHover] = useState(false);

  const { goPage, ifAddressHasNFT } = props;

  return (
    <>
      <Flex display={{ base: "flex", lg: "none" }} width="40px" height="30px">
        <Button
          className="bg-[#FE87BD]"
          onClick={() => {
            setHover(true);
            onOpen();
          }}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <HamburgerIcon color={hover ? "darkcyan" : "white"} w={8} h={8} />
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} size="xs" placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className="bg-gradient-to-b flex gap-4 items-center from-[#9CDEF5] via-[#9CDEF5]  to-[#FF99C7] ">
          <div className="my-4">
            <LinearButton text="Connect Wallet" className="w-60 rounded-2xl" />
          </div>
          <div
            className="strokeMobileNavbar w-full bg-white h-11 flex items-center justify-center"
            data-stroke="Go to mint"
          >
            Go to mint
          </div>
          <div
            className="strokeMobileNavbar w-full h-11 flex items-center justify-center"
            data-stroke="Story"
          >
            Story
          </div>
          <div
            className="strokeMobileNavbar w-full h-11 flex items-center justify-center"
            data-stroke="About"
          >
            About
          </div>
          <div
            className="strokeMobileNavbar w-full h-11 flex items-center justify-center"
            data-stroke="Seals"
          >
            Seals
          </div>
          <div
            className="strokeMobileNavbar w-full h-11 flex items-center justify-center"
            data-stroke="ShowRoom"
          >
            ShowRoom
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
