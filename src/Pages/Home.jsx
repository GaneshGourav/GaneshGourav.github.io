import {
    Box,
    Heading,
    Text,
    Flex,
    Image,
    Link,
    Button,
  } from "@chakra-ui/react";
  import React, { useEffect } from "react";
  import Typed from "typed.js";
  import professional from "../Assets/Professional_Pic.png";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import resume from '../Assets/Resume/Ganesh_Kumar_Resume.pdf'
  import { FaGithub, FaHeart, FaLinkedin } from 'react-icons/fa'
  import { HiOutlineMail } from "react-icons/hi";
  import { FiPhoneCall } from "react-icons/fi";
  
  
  import "./Home.css";
  
  export const Home = () => {
    useEffect(() => {
      AOS.init({ delay: 300 });
    }, []);
  
    useEffect(() => {
      const typed = new Typed(".text", {
        strings: ["MERN Stack Developer","Effective Problem Solver"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
        showCursor: false,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    const openLink = (url) => {
      window.open(url);
    };
    return (
      <>
      <section>
        <Flex
          flexDirection={{
            base: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          bg={"#25262b"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap="60px"
          id="home"
          p="50px"
          color={"white"}
          className="design"
        
          margin={"auto"}
          
        >
          <Box >
            <Box id="home-content">
              <Heading mt="10px" size="lg" as="h3" className="head">
                Hello, I am
              </Heading>
              <Heading mt="10px" size="2xl" as="h1" id="user-detail-name">
                Ganesh Kumar
              </Heading>
              <Heading mt="10px" size="lg" as="h3">
              <span className="text"></span>
                <span style={{ color: "#0ef", marginLeft: "3px" }}>|</span>
              </Heading>
              <Text fontSize={"20px"} mt="10px">
                I'm a web developer and my <br />
                expertise is to create awesome websites{" "}
              </Text>
              <Box display="flex" justifyContent="space-around">
              <Flex alignItems={"center"}>
        <Link id="contact-github" href="https://github.com/GaneshGourav" isExternal>
          <FaGithub   className="contact-logo"  />
        </Link>
        <Link id="contact-linkedin" href="https://www.linkedin.com/in/ganeshofficial/" isExternal>
          <FaLinkedin
            style={{ marginLeft: "20px" }}
            className="contact-logo"
          />
        </Link>
        <Link id="contact-linkedin" href="tel:+919572016410" isExternal>
          <FiPhoneCall
            style={{ marginLeft: "20px" }}
            className="contact-logo"
          />
        </Link>
        <Link id="contact-linkedin" href="mailto:mrganeshofficial8@gmail.com" isExternal>
          <HiOutlineMail
            style={{ marginLeft: "20px" }}
            className="contact-logo"
          />
        </Link>
      </Flex>
              </Box>
              
               <Link
                mt="10px"
                fontWeight="bold"
                borderRadius="5px"
                backgroundImage="linear-gradient(to right, #01b395, #03bd69)"
                id="resume-link-2"
                href={resume}
                download={true}
                target="_blank"
              >
                <Box className="home-icon">
                  <Button
                    mt="10px"
                    id="resume-button-2"
                    background="#0ef"
                    onClick={()=>openLink("https://drive.google.com/file/d/15aU9NXAn4m3Gfx29Z5yVHFL2VmAVr4uA/view?usp=sharing")}
                    className="home-resume btn-box"
                  >
                    Download Resume
                  </Button>
                </Box>
              </Link> 
             
            </Box>
          </Box>
  
          <Image
           id="mypic"
            src={professional}
            className="home-img"
            // boxShadow="outline"
            boxShadow="0 0 10px #0ef"
            borderColor={"#0ef"}
            alt="myPic"
            w={{base : '80%', sm : '80%', md : '60%', lg : '30%', xl : '30%', '2xl' : '30%'}}
            
            height="1%"
            borderRadius="50%"
            // padding="5px"
          />
        </Flex>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#272a35" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,170.7C384,160,480,96,576,64C672,32,768,32,864,58.7C960,85,1056,139,1152,170.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></section>
      </>
    );
  };
  
//   export default Home;