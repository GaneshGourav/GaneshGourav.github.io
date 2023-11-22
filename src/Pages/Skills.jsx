import React from "react";
import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import html from "../Assets/Skills/html.png";
import css from "../Assets/Skills/css.png";
import js from "../Assets/Skills/javascript.png";
import react from "../Assets/Skills/reactjs.png";
import redux1 from "../Assets/Skills/redux.png";
import chakra from "../Assets/Skills/chakraui.svg";
import npm from "../Assets/Skills/typescript.png";
import vscode from "../Assets/Skills/nodejs.png";
import postman from "../Assets/Skills/mongodb.png";
import node from "../Assets/Skills/express.svg";
import { BiLogoMongodb } from "react-icons/bi";
import { SiChakraui, SiMongodb, SiRedux, SiTypescript } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { DiMongodb, DiNodejsSmall } from "react-icons/di";
import { TbBrandCypress } from "react-icons/tb";
import "./Skills.css";

export const Skills = () => {
  return (
    <Box
      id="skills"
      bg={"#25262b"}
      color={"white"}
      textAlign={"center"}
      p="20px"
    
     
      margin={"auto"}
    >
      <Heading
        m="50px 0"
        className="tech-stacks"
        display={"inline-block"}
        padding="10px"
        data-aos="fade-right"
        color={"#0ef"}
        size="2xl"
        as="h1"
      >
        Technical Skills
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(3,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(5,1fr)",
          xl: "repeat(5,1fr)",
          "2xl": "repeat(5,1fr)",
        }}
        rowGap="60px"
        // margin="50px auto"
        placeItems={"center"}
        alignItems={{ base: "center", sm: "center", md: "center" }}
      >
        <Box
          id="html"
          p="10px"
          width={{ base: "70%", sm: "60%", md: "40%", lg: "40%" }}
          className="skills-card"
        >
          {/* <Image  m="auto" width="80%" src={html} className="skills-card-img" /> */}
          <AiFillHtml5
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#e54c21"
            className="skills-card-img"
          />
          <Text className="skills-card-name">HTML-5</Text>
        </Box>
        <Box
          id="css"
          p="10px"
          width={{ base: "70%", sm: "60%", md: "40%", lg: "40%" }}
          className="skills-card"
        >
          {/* <Image m="auto" width="80%" src={css} className="skills-card-img" /> */}
          <FaCss3Alt
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#254bdd"
            className="skills-card-img"
          />
          <Text className="skills-card-name">CSS</Text>
        </Box>
        <Box
          id="js"
          p="10px"
          width={{ base: "70%", sm: "60%", md: "40%", lg: "40%" }}
          className="skills-card"
        >
          {/* <Image m="auto"  width="80%" src={js} className="skills-card-img" /> */}
          <IoLogoJavascript
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#e2c430"
            className="skills-card-img"
          />
          <Text className="skills-card-name">Java Script</Text>
        </Box>
        <Box
          id="react"
          p="10px"
          width={{ base: "70%", sm: "60%", md: "40%", lg: "40%" }}
          className="skills-card"
        >
          <GrReactjs
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#5ed3f3"
            className="skills-card-img"
          />
          <Text className="skills-card-name">React.js</Text>
        </Box>
        <Box
          id="redux"
          p="10px"
          width={{ base: "70%", sm: "60%", md: "40%", lg: "40%" }}
          className="skills-card"
        >
          <SiRedux
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#7248b6"
            className="skills-card-img"
          />
          <Text className="skills-card-name">Redux</Text>
        </Box>
        <Box
          id="chakra"
          p="10px"
          width={{ base: "70%", sm: "60%", md: "40%", lg: "40%" }}
          className="skills-card"
        >
          <SiChakraui
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#50c4c0"
            className="skills-card-img"
          />
          <Text className="skills-card-name">Chakra Ui</Text>
        </Box>
        <Box
          id="typescript"
          p="10px"
          width={{ base: "70%", sm: "60%", md: "40%", lg: "40%" }}
          className="skills-card"
        >
          <SiTypescript
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#2f74c0"
            className="skills-card-img"
          />
          <Text className="skills-card-name">Type Script</Text>
        </Box>

        <Box
          id="mongodb"
          p="10px"
          width={{ base: "70%", sm: "60%", md: "40%", lg: "40%" }}
          className="skills-card"
        >
          <DiMongodb
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#3ca02e"
            className="skills-card-img"
          />
          <Text className="skills-card-name">Mongo DB</Text>
        </Box>
        <Box
          id="cypress"
          p="10px"
          width={{ base: "70%", sm: "60%", md: "40%", lg: "40%" }}
          className="skills-card"
        >
          <TbBrandCypress
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#306158"
            className="skills-card-img"
          />
          <Text className="skills-card-name">Cypress</Text>
        </Box>

        <Box
          id="node"
          p="10px"
          width={{ base: "70%", sm: "60%", md: "40%", lg: "40%" }}
          className="skills-card"
        >
          <DiNodejsSmall
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#3f873b"
            className="skills-card-img"
          />
          <Text className="skills-card-name">Node.js</Text>
        </Box>
      </Grid>
    </Box>
  );
};
