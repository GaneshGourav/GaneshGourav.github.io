import React, { useEffect } from "react";
import GitHubCalendar from 'react-github-calendar';
import { Image, Box, Heading } from "@chakra-ui/react";
import AOS from "aos";


export const Github = () => {
  useEffect(() => {
    AOS.init({ delay: 300 });
  }, []);
  const gitcal = (contributions) => {
    const today = new Date();
    const startTimestamp = new Date(
      today.getFullYear(),
      today.getMonth() - 12,
      1
    ).getTime();
    const endTimestamp =
      new Date(today.getFullYear(), today.getMonth() + 1, 1).getTime() - 1;

    return contributions.filter((day) => {
      const contributionTimestamp = new Date(day.date).getTime();

      return (
        contributionTimestamp >= startTimestamp &&
        contributionTimestamp <= endTimestamp
      );
    });
  };

  return (
    <Box
      cursor={"pointer"}
      bg={"#25262b"}
      p="10px"
      className="react-activity-calender"
      textAlign={"center"}
      id="projects"
      color={"white"}
     
    
      margin={"auto"}
    >
      <Box>
        <Box
      
          display={"inline-block"}
          padding="10px"
          margin={'auto'}
          // bgGradient="linear(to-r, #0ef, cyan.500)"
          // borderRadius={"8px"}
          color="#0ef"
          className="tech-skill-heading"
          data-aos="flip-right"
          marginBottom={{ base: "30px", sm: "50px" }}
        >
          <Heading size={"md"}>Github Calender</Heading>
        </Box>
        <Box w={{base : '95%', sm : '95%', md : '95%', lg : '85%', xl : '85%', '2xl' : '85%'}} m="auto" data-aos="fade-left" >
          <GitHubCalendar
            username="GaneshGourav"
           
            blockSize={20}
            transformData={gitcal}
          >
            Github
          </GitHubCalendar>
        </Box>
      </Box>
      <Box>
        <Box
        
          // display={"inline-block"}
          padding="10px"
          color="#0ef"
          margin={'auto'}
          className="tech-skill-heading"
          // data-aos="flip-right"
          marginBottom={{ base: "30px", sm: "20px" }}
        >
          <Heading size={"md"}>Github Streaks</Heading>
        </Box>
        <Box w={{base : '95%', sm : '95%', md : '95%', lg : '85%', xl : '85%', '2xl' : '85%'}} m="30px auto" data-aos="fade-right">
          <Image
            m="auto"
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=GaneshGourav&theme=sea&hide_border=true&border_radius=10&date_format=j%20M%5B%20Y%5D&background=#a084ca"
            alt="streak-stat"
          />
        </Box>
      </Box>

      <Box>
        <Box
         
          padding="10px"
          color="#0ef"
          margin={'auto'}
          className="tech-skill-heading"
          data-aos="flip-right"
          marginBottom={{ base: "30px", sm: "20px" }}
        >
          <Heading size={"md"}>Github Stats-Card</Heading>
        </Box>

        <Box w={{base : '95%', sm : '95%', md : '95%', lg : '85%', xl : '85%', '2xl' : '85%'}} m="30px auto" data-aos="fade-left">
          <Image
          m="auto"
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=GaneshGourav&show_icons=true&title_color=#4c3575&text_color=#4c3575&icon_color=#4c3575&bg_color=red&border_radius=10&border_color=#4c3575"
            alt="stat-card"
          />
        </Box>
      </Box>

      <Box >
        <Box
         
          

          padding="10px"
          color="#0ef"
          margin={'auto'}
          className="tech-skill-heading"
          data-aos="flip-right"
          marginBottom={{ base: "30px", sm: "20px" }}
        >
          <Heading size={"md"}>Most Used Languages</Heading>
        </Box>
        <Box w={{base : '95%', sm : '95%', md : '95%', lg : '85%', xl : '85%', '2xl' : '85%'}}  m="30px auto" data-aos="fade-right">
          <Image
          m="auto"
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=GaneshGourav&title_color=4C3575&icon_color=#4c3575&text_color=#4c3575&bg_color=#a084ca&show_icons=true"
            alt="stat-top-lang"
          />
        </Box>
      </Box>
    </Box>
  );
};