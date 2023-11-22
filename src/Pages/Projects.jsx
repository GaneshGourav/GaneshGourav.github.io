import {
  Box,
  Image,
  Heading,
  Link,
  Text,
  Flex,
  Grid,
  Center,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import cartLane from "../Assets/Projects/cartLaneClone.jpg";
import ExpressElectronics from "../Assets/Projects/ElectronicsExpress.jpg";
import HealthIve from "../Assets/Projects/HealthIV.jpg";
import { BiFolder, BiCopy } from "react-icons/bi";
import { FaGithub, FaReact, FaHtml5 } from "react-icons/fa";
import { TbJson } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiChakraui,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
} from "react-icons/si";
import "./Project.css";

import AOS from "aos";
import { IoLogoJavascript } from "react-icons/io";

export const Projects = () => {
  useEffect(() => {
    AOS.init({ delay: 300 });
  }, []);
  return (
    <Box
      cursor={"pointer"}
      textAlign={"center"}
      id="projects"
      bg={"#25262b"}
      color={"white"}
      margin={"auto"}
    >
      <Heading
        mt="40px"
        textAlign={"center"}
        className="projects"
        display={"inline-block"}
        padding="10px"
        as="h1"
        size={"2xl"}
        color={"#0ef"}
        data-aos="fade-right"
      >
        Projects
      </Heading>

      <Grid>
        {/* Cartlane Start */}
        <Box
          id="project-sec"
          data-aos="fade-left"
          borderRadius={"10px"}
          p="20px"
          w="80%"
          m="40px auto"
          className="project-card"
        >
          <Flex
            gap={"30px"}
            justifyContent={"space-evenly"}
            direction={{
              base: "column-reverse",
              sm: "column-reverse",
              md: "column-reverse",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
          >
            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
              <Flex justifyContent={"space-between"}>
                <BiFolder style={{ fontSize: "40px", color: "#388E3C" }} />
                <Link
                  href="https://github.com/vgoutham786/Caratlane-Clone"
                  className="project-github-link"
                  isExternal
                >
                  <FaGithub
                    style={{ fontSize: "40px" }}
                    className="social_icon"
                  />
                </Link>
                <Link
                  href="https://spiffy-sunburst-9a48b4.netlify.app/"
                  isExternal
                >
                  <Button
                    colorScheme="black"
                    border="1px solid white"
                    className="preview_btn"
                  >
                    Live Preview
                  </Button>
                </Link>
              </Flex>
              <Heading
                textAlign={"left"}
                size={"md"}
                mt="10px"
                className="project-title"
              >
                CartLane [Clone]
              </Heading>
              <Text
                className="project-description"
                textAlign={"left"}
                mt="10px"
              >
                The objective of a Caroma Jewellery website is to create a
                positive and engaging experience for potential customers that
                will ultimately lead to increased sales and customer loyalty.
              </Text>
              

              <Box w={"100%"} mt="30px" className="project-tech-stack">
                <Flex w={"100%"} justifyContent={"space-between"}>
                  <Text>
                    <FaHtml5 style={{ fontSize: "40px", color: "coral" }} />
                  </Text>
                  <Text>
                    <FaCss3Alt style={{ fontSize: "40px", color: "blue" }} />
                  </Text>
                  <Text>
                    <IoLogoJavascript
                      style={{ fontSize: "40px", color: "#FDD835" }}
                    />
                  </Text>
                  <Text>
                    <TbJson style={{ fontSize: "45px", color: "#2e6ff2" }} />
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
              <Image w="100%" src={cartLane} />
            </Box>
          </Flex>
        </Box>
         {/* Cartlane End*/}

{/* HealthIV Start */}
        <Box
          id="project-sec"
          data-aos="fade-right"
          borderRadius={"10px"}
          p="20px"
          w="80%"
          m="40px auto"
          className="project-card"
        >
          <Flex
            gap={"30px"}
            justifyContent={"space-evenly"}
            direction={{
              base: "column-reverse",
              sm: "column-reverse",
              md: "column-reverse",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
          >
            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
              <Flex justifyContent={"space-between"}>
                <BiFolder style={{ fontSize: "40px", color: "#388E3C" }} />
                <Link
                  href="https://github.com/GaneshGourav/changeable-food-3405"
                  className="project-github-link"
                  isExternal
                >
                  <FaGithub
                    style={{ fontSize: "40px" }}
                    className="social_icon"
                  />
                </Link>
                <Link
                  href="https://changeable-food-3405-oxnu9wycf-ganeshgourav.vercel.app/"
                  isExternal
                >
                  <Button
                    colorScheme="black"
                    border="1px solid white"
                    className="preview_btn"
                  >
                    Live Preview
                  </Button>
                </Link>
              </Flex>
              <Heading
                textAlign={"left"}
                size={"md"}
                mt="10px"
                className="project-title"
              >
                HealthIv
              </Heading>
              <Text
                className="project-description"
                textAlign={"left"}
                mt="10px"
              >
                HealthIV, the digital healthcare company focused on improving
                home health outcomes through technology, now brings its in-home
                infusion therapy services to the Los Angeles Metro Area. Helmed
                in Los Angeles by Shawn Ankari, HealthIV's Co-Founder and
                Business Development Director, HealthIV's new availability for
                Angelenos is part of the company's ongoing dedication to
                changing up the home healthcare space by focusing on full
                digital interoperability between patients, doctors, pharmacists,
                and home healthcare workers.
              </Text>
              <Box
                w={"100%"}
                mt="30px"
                className="project-tech-stack"
                display="flex"
              >
                <Flex w={"100%"} justifyContent={"space-between"}>
                  <Text>
                    <FaReact style={{ fontSize: "40px", color: "#3fc3bd" }} />
                  </Text>
                  <Text>
                    <SiChakraui
                      style={{ fontSize: "40px", color: "#3fc3bd" }}
                    />
                  </Text>

                  <Text>
                    <TbJson style={{ fontSize: "45px", color: "#2e6ff2" }} />
                  </Text>
                </Flex>
              </Box>
            </Box>

            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
              <Image w="100%" src={HealthIve} />
            </Box>
          </Flex>
        </Box>

        {/* HealthIV End */}


{/* Express Electrnics Start */}
        <Box
          id="project-sec"
          data-aos="fade-right"
          borderRadius={"10px"}
          p="20px"
          w="80%"
          m="40px auto"
          className="project-card"
        >
          <Flex
            gap={"30px"}
            justifyContent={"space-evenly"}
            direction={{
              base: "column-reverse",
              sm: "column-reverse",
              md: "column-reverse",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
          >
            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
              <Flex justifyContent={"space-between"}>
                <BiFolder style={{ fontSize: "40px", color: "#388E3C" }} />
                <Link
                  href="https://github.com/gauravraj2601/gusty-adjustment-6018"
                  className="project-github-link"
                  isExternal
                >
                  <FaGithub
                    style={{ fontSize: "40px" }}
                    className="social_icon"
                  />
                </Link>
                <Link
                  href="https://elctronix-express-k74afyg3e-ganeshgourav.vercel.app/"
                  isExternal
                >
                  <Button
                    colorScheme="black"
                    border="1px solid white"
                    className="preview_btn"
                  >
                    Live Preview
                  </Button>
                </Link>
              </Flex>
              <Heading
                textAlign={"left"}
                size={"md"}
                mt="10px"
                className="project-title"
              >
                Express Electronics
              </Heading>
              <Text
                className="project-description"
                textAlign={"left"}
                mt="10px"
              >
                This application is built using React and Redux to provide users
                with a seamless shopping experience for electronic items. With a
                user-friendly interface, user and admin authentication, and
                various features, this app aims to revolutionize online
                electronic shopping.
              </Text>
              <Text textAlign={"left"}>Built Responsive Landing Page</Text>
              <Text textAlign={"left"}>
                Added Login and Signup Functionalities
              </Text>

              <Text textAlign={"left"}>
                Data fetched from json-server <br /> Different routes created
                with react-router
              </Text>

              <Box w={"100%"} mt="30px" className="project-tech-stack">
                <Flex w={"100%"} justifyContent={"space-between"}>
                  <Text>
                    <FaReact style={{ fontSize: "40px", color: "#3fc3bd" }} />
                  </Text>
                  <Text>
                    <SiChakraui
                      style={{ fontSize: "40px", color: "#3fc3bd" }}
                    />
                  </Text>

                  <Text>
                    <TbJson style={{ fontSize: "45px", color: "#2e6ff2" }} />
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
              <Image w="100%" src={ExpressElectronics} />
            </Box>
          </Flex>
        </Box>

        {/* Express Electrnics End */}

        <Box
          id="project-sec"
          data-aos="fade-left"
          borderRadius={"10px"}
          p="20px"
          w="80%"
          m="40px auto"
          className="project-card"
        >
          <Flex
            gap={"30px"}
            justifyContent={"space-evenly"}
            direction={{
              base: "column-reverse",
              sm: "column-reverse",
              md: "column-reverse",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
          >
            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
              <Flex justifyContent={"space-between"}>
                <BiFolder style={{ fontSize: "40px", color: "#388E3C" }} />
                <Link
                  href="https://github.com/sharvarihupare-369/wired-cover-3187"
                  className="project-github-link"
                  isExternal
                >
                  <FaGithub
                    style={{ fontSize: "40px" }}
                    className="social_icon"
                  />
                </Link>
                <Link
                  href="https://github.com/vgoutham786/Caratlane-Clone"
                  isExternal
                >
                  <Button
                    colorScheme="black"
                    border="1px solid white"
                    className="preview_btn"
                  >
                    Live Preview
                  </Button>
                </Link>
              </Flex>
              <Heading
                textAlign={"left"}
                size={"md"}
                mt="10px"
                className="project-title"
              >
                HomeSweeter
              </Heading>
              <Text
                className="project-description"
                textAlign={"left"}
                mt="10px"
              >
                A clone of Real state Website
              </Text>
              <Text textAlign={"left"}>Built admin panel</Text>
              <Text textAlign={"left"}>
                Built both frontend and backend part of Admin Side
              </Text>
              <Text textAlign={"left"}>
                Functionalities such blacklisting,and other CRUD operations
              </Text>

              <Box w={"100%"} mt="30px" className="project-tech-stack">
                <Flex w={"100%"} justifyContent={"space-between"}>
                  <Text>
                    <FaReact style={{ fontSize: "40px", color: "#00B0FF" }} />
                  </Text>
                  <Text>
                    <SiRedux style={{ fontSize: "40px", color: "#764abc" }} />
                  </Text>
                  <Text>
                    <SiNodedotjs
                      style={{ fontSize: "40px", color: "#539e43" }}
                    />
                  </Text>
                  <Text>
                    <SiMongodb style={{ fontSize: "40px", color: "#4caa3d" }} />
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
              <Image w="100%" src={cartLane} />
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

// export default Projects;
