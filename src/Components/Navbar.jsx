import { Box, Button, Link, Flex, Divider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { BiMenu, BiMenuAltLeft } from "react-icons/bi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import resume from "../Assets/Resume/Ganesh_Kumar_Resume.pdf";
import "animate.css";
import AOS from "aos";
import "./Navbar.css";

export const Navbar = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();

  useEffect(() => {
    AOS.init({ delay: 300 });
  }, []);

  const openResume = (url) => {
    window.open(url);
  };

  return (
    <Box
      bg="#25262b"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      position="sticky"
      zIndex={"overlay"}
      top="0"
      className={"bg"}
      color={"white"}
      p={"10px 0"}
      fontSize={"19px"}
    >
      <nav id="nav-menu" className="nav-menu">
        <Flex
          m="0 30px"
          p={"10px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            w="40%"
            color={"#0ef"}
            fontWeight={"bold"}
            className="nav-logo"
            fontSize="20px"
            textAlign="start"
            fontFamily={"cursive"}
          >
            {" Ganesh "}
          </Box>
          <Flex
            p={"10px"}
            justifyContent={"space-between"}
            mt={"10px"}
            alignItems={"center"}
          >
            <Box
              display={{
                base: "flex",
                sm: "flex",
                md: "flex",
                lg: "none",
                xl: "none",
                "2xl": "none",
              }}
              w={"10"}
              h={"10"}
              fontSize={"30px"}
              size={"20px"}
              onClick={onOpen}
            >
              <BiMenu />
            </Box>
            <Drawer isOpen={isOpen} onClose={onClose} placement="right">
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton
                  color={"white"}
                  border={"1px solid #171518"}
                />
                <DrawerHeader
                  fontFamily={"cursive"}
                  color={"#0ef"}
                  fontWeight={"extrabold"}
                  bg="#171518"
                >
                  {"Ganesh"}
                </DrawerHeader>
                <DrawerBody fontFamily={"cursive"} color={"white"} bg="#171518">
                  <VStack alignItems={"start"}>
                    <Button
                      onClick={onClose}
                      variant={"ghost"}
                      colorScheme="gray"
                    >
                      <HashLink
                        data-aos="zoom-in"
                        className="nav-link home nav_style"
                        style={{ textDecoration: "none", color: "#c6701b" }}
                        to="/#"
                      >
                        Home
                      </HashLink>
                    </Button>
                    <Button
                      onClick={onClose}
                      variant={"ghost"}
                      colorScheme="gray"
                    >
                      <HashLink
                        className="nav-link about"
                        style={{ textDecoration: "none", color: "#c6701b" }}
                        to="/#about"
                      >
                        About
                      </HashLink>
                    </Button>
                    <Button
                      onClick={onClose}
                      variant={"ghost"}
                      colorScheme="gray"
                    >
                      <HashLink
                        className="nav-link skills"
                        style={{ textDecoration: "none", color: "#c6701b" }}
                        to="/#skills"
                      >
                        Skills
                      </HashLink>
                    </Button>
                    <Button
                      onClick={onClose}
                      variant={"ghost"}
                      colorScheme="gray"
                    >
                      <HashLink
                        className="nav-link projects"
                        style={{ textDecoration: "none", color: "#c6701b" }}
                        to="/#projects"
                      >
                        Projects
                      </HashLink>
                    </Button>
                    <Button
                      onClick={onClose}
                      variant={"ghost"}
                      colorScheme="gray"
                    >
                      <HashLink
                        className="nav-link contact"
                        style={{ textDecoration: "none", color: "#c6701b" }}
                        to="/#contact"
                      >
                        Contact
                      </HashLink>
                    </Button>
                  </VStack>
                  <HStack
                    w={"full"}
                    justifyContent={"space-evenly"}
                    pos={"absolute"}
                    bottom={"5"}
                    left={"0"}
                  >
                    <Link
                      fontWeight={"bold"}
                      borderRadius={"5px"}
                      backgroundImage={
                        "linear-gradient(to right, #0ef, cyan.500)"
                      }
                      fontFamily={"cursive"}
                      className="nav-link resume"
                      id="resume-button-1"
                      href={resume}
                      onClick={openResume}
                      target="_blank"
                    >
                      <Button
                        onClick={() =>
                          openResume(
                            "https://drive.google.com/file/d/15aU9NXAn4m3Gfx29Z5yVHFL2VmAVr4uA/view?usp=sharing"
                          )
                        }
                        backgroundImage={
                          "linear-gradient(to right, #0ef, cyan.500)"
                        }
                        _hover={"none"}
                      >
                        Resume
                      </Button>
                    </Link>
                  </HStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
          <Flex
            w={"55%"}
            id="navflex"
            alignItems={"center"}
            justifyContent={"space-between"}
            
           
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
              "2xl": "flex",
            }}
          >
            <HashLink className="nav-link home" id="navbar-home" smooth to="/#">
              Home
            </HashLink>
            <HashLink
              className="nav-link about nav-home"
              id="navbar-home"
              smooth
              to="/#about"
            >
              About
            </HashLink>
            <HashLink
              className="nav-link skills"
              id="navbar-home"
              smooth
              to="/#skills"
            >
              Skills
            </HashLink>
            <HashLink
              className="nav-link projects"
              id="navbar-home"
              smooth
              to="/#projects"
            >
              Projects
            </HashLink>

            <HashLink
              className="nav-link contact"
              id="navbar-home"
              smooth
              to="/#contact"
            >
              Contact
            </HashLink>
            <Link
              fontWeight={"bold"}
              borderRadius={"5px"}
              backgroundImage={"linear-gradient(to right, #0ef, cyan.50)"}
              fontFamily={"cursive"}
              className="nav-link resume"
              id="resume-button-1"
              href={resume}
              download={true}
              target="_blank"
            >
              <Button
                onClick={() =>
                  openResume(
                    "https://drive.google.com/file/d/15aU9NXAn4m3Gfx29Z5yVHFL2VmAVr4uA/view?usp=sharing"
                  )
                }
                backgroundImage={"linear-gradient(to right, #0ef, cyan.500)"}
                id="resume"
              >
                Resume
              </Button>
            </Link>
          </Flex>
        </Flex>
      </nav>
    </Box>
  );
};
