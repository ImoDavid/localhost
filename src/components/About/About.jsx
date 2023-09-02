import React from "react";
import { Container, Stack, Typography, Box, styled } from "@mui/material";
import { BsGit } from "react-icons/bs";
import { FaBootstrap, FaReact, FaSass } from "react-icons/fa";
import {
  BiLogoMongodb,
  BiLogoJavascript,
  BiLogoTypescript,
} from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import { AiOutlineAntDesign } from "react-icons/ai";
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
const boxItemsone = [
  { id: "0.1", icon: <FaBootstrap />, stack: "Bootstrap" },
  { id: "0.2", icon: <FaReact />, stack: "react.js" },
  { id: "0.3", icon: <BsGit />, stack: "git" },
  { id: "0.4", icon: <BiLogoMongodb />, stack: "Mongo db" },
  { id: "0.5", icon: <FiFigma />, stack: "Figma" },
];

const boxItemstwo = [
  { id: "0.1", icon: <BiLogoJavascript />, stack: "Javascript (Es6+)" },
  { id: "0.2", icon: <AiOutlineAntDesign />, stack: "ant design" },
  { id: "0.4", icon: <FaSass />, stack: "sass" },
  { id: "0.3", icon: <BiLogoTypescript />, stack: "Typescript" },
];

const About = () => {
  return (
    <>
      <Container maxwidth="md">
        <Box
          minHeight={"100%"}
          paddingX={["1rem", "5rem"]}
          marginTop={["0.8rem", "1rem"]}
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
                  <Box marginY={3} mr={[6, 20]}>
                    {boxItemsone.map((ele) => (
                      <StyledStack key={ele.id}>
                        <Typography fontSize={"0.9rem"}>
                          {" "}
                          <span>{ele.icon}</span> {ele.stack}
                        </Typography>
                      </StyledStack>
                    ))}
                  </Box>
                  <Box marginY={3}>
                    {boxItemstwo.map((ele) => (
                      <StyledStack key={ele.id}>
                        <Typography fontSize={"0.9rem"}>
                          {" "}
                          <span>{ele.icon}</span> {ele.stack}
                        </Typography>
                      </StyledStack>
                    ))}
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
