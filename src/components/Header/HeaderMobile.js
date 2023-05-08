import React, { useState } from "react";
import {
  Center,
  Flex,
  Image,
  Box,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Drawer,
  useDisclosure,
  Button,
  DrawerFooter,
  Divider,
} from "@chakra-ui/react";
import Logo from "../../assets/images/Logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEns } from "../../hooks/useEns.js";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiOutlineRight } from "react-icons/ai";

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
          bgColor={"darkcyan"}
          _hover={{ bgColor: "white" }}
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
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className="bg-gradient-to-b flex items-center from-[#D0F3FF] via-[#E1F7FF] to-[#FEE3ED]">

          <div className="w-[] 	h-14 bg-gradient-to-r from-[#FE87BD] to-[#79A0EB] flex items-center  justify-center text-2xl	 font-medium	rounded-[14px]"
          >
            Connect Wallet
            <AiOutlineRight />
          </div>


          <div className="w-full bg-[#FE87BD]">Go to mint</div>

        </DrawerContent>
      </Drawer>
    </>
  );
}
