import React from "react";
import { Container, Stack, Typography, Box, styled } from "@mui/material";
import { BsGit } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";

import { colors } from "../../styles/globals";
import { Heading } from "../typography/";
import testfile from "../../assets/testfile.jpeg";

const StyledStack = styled(Box)({
  display: "flex",
  alignItems: "center",
  color: colors.ORANGE,
  textTransform: "capitalize",
  fontSize: ["1rem", "0.4rem"],
  marginBottom: ["0.2rem", "0.2rem"],
});

const About = () => {
  return (
    <>
      <Container maxwidth="md">
        <Box
          minHeight={"100%"}
          paddingX={["1rem", "5rem"]}
          marginTop={["6rem", "12rem"]}
          marginBottom={["1rem", "2rem"]}
        >
          <Box>
            <Heading number={"01."} title={"About Me"} />
          </Box>
          <Stack direction={["column", "row"]}>
            <Box width={["100%", "65%"]} paddingY={"1.5rem"}>
              <Typography
                variant="p"
                fontSize={["1rem", "0.9rem"]}
                color={colors.OFF_WHITE}
              >
                I'm a frontend developer with over four years experience and a
                proven track record of translating complex requirements into
                elegant, responsive websites by weaving creativity and
                functionality together to craft compelling web interfaces that
                resonate with clients ideas.
              </Typography>

              <Typography
                variant="p"
                fontSize={["1rem", "1rem"]}
                color={colors.OFF_WHITE}
                display={"block"}
                marginY={"1rem"}
              >
                Currently the Lead Developer for an NGO{" "}
                <span style={{ color: "orange" }}>Nutrilife </span> where i've
                embraced the challenge of spearheading our NGO's digital
                transformation journey by leveraging the latest web technologies
                and best practices.
              </Typography>
              <Box marginTop={"2rem"}>
                <Typography
                  variant="p"
                  fontSize={["1rem", "0.9rem"]}
                  color={colors.OFF_WHITE}
                  fontWeight={900}
                >
                  Here are a few Technologies I work with:
                </Typography>
                <Stack direction={"row"}>
                  <Box marginY={2}>
                    <StyledStack>
                      <Typography fontSize={"0.9rem"}>
                        {" "}
                        <span>
                          <FaBootstrap />{" "}
                        </span>{" "}
                        bootstrap
                      </Typography>
                    </StyledStack>
                    <StyledStack>
                      <Typography fontSize={"0.9rem"}>
                        {" "}
                        <span>
                          <FaReact />{" "}
                        </span>{" "}
                        React.js
                      </Typography>
                    </StyledStack>
                    <StyledStack>
                      <Typography fontSize={"0.9rem"}>
                        {" "}
                        <span>
                          <BsGit />
                        </span>{" "}
                        git
                      </Typography>
                    </StyledStack>
                    <StyledStack>
                      <Typography fontSize={"0.9rem"}>
                        {" "}
                        <span>
                          <BiLogoMongodb />{" "}
                        </span>{" "}
                        mongo db
                      </Typography>
                    </StyledStack>
                    <StyledStack>
                      <Typography fontSize={"0.9rem"}>
                        {" "}
                        <span>
                          <FiFigma />{" "}
                        </span>{" "}
                        figma
                      </Typography>
                    </StyledStack>
                  </Box>
                </Stack>
              </Box>
            </Box>
            <Box
              width={["100%", "35%"]}
              padding={"1.5rem"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                component={"img"}
                src={testfile}
                height={[200, 200]}
                width={[200, 200]}
                display={"block"}
              />
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default About;

// "Hello there! I'm [Your Name], a passionate frontend developer with a unique role as the Lead Developer at [NGO's Name].
// With a keen eye for design and a knack for turning ideas into user - friendly digital experiences, I've been instrumental in driving the digital revolution of our NGO.

// As a seasoned frontend developer, I've had the privilege of weaving creativity and functionality together to craft compelling web interfaces that resonate with our NGO's mission.
//With[X] years of experience in the field, I have a proven track record of translating complex requirements into elegant,
//responsive designs that enhance user engagement and elevate the online presence of our organization.

// In my role as Lead Developer, I've embraced the challenge of spearheading our NGO's digital transformation journey.
//By leveraging the latest web technologies and best practices, I've led a dynamic team in creating intuitive platforms that empower our supporters and stakeholders
//to connect with our cause in meaningful ways.From optimizing user experiences to ensuring seamless interactions across devices, I'm committed to delivering digital solutions that leave a lasting impact.

// Beyond the lines of code, I'm dedicated to understanding the unique needs of our NGO and aligning digital strategies with our overarching goals.
//My passion for innovation fuels my desire to continuously learn and adapt, ensuring that our online presence remains at the forefront of the digital landscape.

// When I'm not immersed in pixels and code, you can find me exploring the world of design, collaborating with fellow tech enthusiasts,
//and seeking out opportunities to make a positive difference through technology.

// Join me on this exciting journey as we harness the power of technology to further the mission of[NGO's Name] and create a brighter digital future for our cause."

// Hello, I'm [Your Name], a frontend developer with a passion for crafting engaging digital experiences. Currently leading development efforts,
// I'm focused on leveraging my skills to push boundaries and create innovative solutions. With [X] years in the field, I've honed the art of translating complex ideas into user - friendly designs.

// As a Lead Developer, I'm committed to staying at the forefront of technology trends, ensuring that our online platforms are modern,
//responsive, and intuitive.My dedication to seamless user interactions and a keen eye for design aesthetics drive my work.I thrive on collaborating
//with talented teams and love to explore creative solutions that leave a lasting impact.

// Beyond coding, I'm an avid design enthusiast, always seeking fresh inspiration to infuse into my projects.
//I'm excited by the possibilities that technology offers and how it can shape the way we connect and engage in the digital age.

// Join me as I continue to explore the exciting intersection of design and technology, pushing for innovative solutions and enhancing digital experiences.
