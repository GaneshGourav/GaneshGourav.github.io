import React from "react";
import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify, SiPostman } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaSlack } from "react-icons/fa";
import { ImNpm } from "react-icons/im";
import { BiLogoZoom } from "react-icons/bi";

export const Tools = () => {
  return (
    <Box
      id="skills"
      // bg={"black"}
      bg={"#25262b"}
      color={"white"}
      textAlign={"center"}
     
   
      margin={"auto"}
    >
      <Heading
        m={"50px 0"}
        className="tech-stacks"
        display={"inline-block"}
        padding="10px"
        data-aos="fade-right"
        color={"#0ef"}
        size="2xl"
        as="h1"
      >
        Tools
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(4,1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        rowGap="60px"
        // margin="50px auto"
        placeItems={"center"}
        alignItems={{ base: "center", sm: "center", md: "center" }}
      >
        <Box
          id="github"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card"
        >
          <AiFillGithub
            fontSize={"65px"}
            style={{ margin: "auto" }}
            className="skills-card-img"
          />
          <Text className="skills-card-name">Github</Text>
        </Box>
        <Box
          id="netlify"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card"
        >
          <SiNetlify
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#24c1b1"
            className="skills-card-img"
          />

          <Text className="skills-card-name">Netlify</Text>
        </Box>
        <Box
          id="vercel"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card"
        >
          <SiVercel
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="black"
            className="skills-card-img"
          />
          <Text className="skills-card-name">Vercel</Text>
        </Box>
        <Box
          id="vscode"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card"
        >
          <TbBrandVscode
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#0082ca"
            className="skills-card-img"
          />
          <Text className="skills-card-name">Vscode</Text>
        </Box>
        <Box
          id="npm"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card"
        >
          <ImNpm
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#c53635"
            className="skills-card-img"
          />
          <Text className="skills-card-name">Npm</Text>
        </Box>
        <Box
          id="slack"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card"
        >
          <FaSlack
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#e5ac2d"
            className="skills-card-img"
          />
          <Text className="skills-card-name">Slack</Text>
        </Box>
        <Box
          id="postman"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card"
        >
          <SiPostman
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#f76935"
            className="skills-card-img"
          />
          <Text className="skills-card-name">Postman</Text>
        </Box>

        {/* <Box id="vscode"
          p="10px"   width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }} className="skills-card">
           {/* <BiLogoZoom/> */}
        {/* <Heading className="skills-card-name"></Heading> */}
        {/* </Box> */}
        {/* */}
      </Grid>
    </Box>
  );
};

// export default Tools;
