import React from "react";
import { Container, Stack, Typography, Box, styled, Link } from "@mui/material";
import { colors } from "../../styles/globals";
import { BiFolder } from "react-icons/bi";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Heading } from "../typography";
import { Project } from "../../commons/project";
import { motion } from "framer-motion";

const StyledLinkBox = styled(Box)({
  color: colors.FOOTER_TEXT,
  marginRight: "1rem",
  "& : hover": {
    color: colors.ORANGE,
  },
});

const OtherProjects = [
  {
    index: "1",
    title: "home",
    text: "jdshcjsjhksjd sdjkfhjasdjfhdgfhdgfhdg hdfgsdhgfhgasjfjsdsfj jhdfvhgh",
  },
  {
    index: "1",
    title: "home",
    Glink: "https://react-icons.github.io/react-icons",
    text: "jdshcjsjhksjd sdjkfhjasdjfhdgfhdgfhdg hdfgsdhgfhgasjfjsdsfj jhdfvhgh",
  },
  {
    index: "1",
    title: "home",
    text: "jdshcjsjhksjd sdjkfhjasdjfhdgfhdgfhdg hdfgsdhgfhgasjfjsdsfj jhdfvhgh",
  },
  {
    index: "1",
    title: "home",
    text: "jdshcjsjhksjd sdjkfhjasdjfhdgfhdgfhdg hdfgsdhgfhgasjfjsdsfj jhdfvhgh",
  },
];

const Projects = () => {
  return (
    <>
      <Container
        maxwidth="md"
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
      >
        <Box
          minHeight={"100%"}
          paddingX={["1rem", "5rem"]}
          marginTop={["13.5rem", "10rem"]}
          marginBottom={["1rem", "2rem"]}
        >
          <Box>
            <Heading number={"03."} title={"things i've built"} />
          </Box>
          <Box color={colors.OFF_WHITE} paddingY={"1.5rem"} textAlign={"left"}>
            <Typography fontSize={"0.9rem"} fontWeight={"300"}>
              I've made lots of projects, unfortunately i can't show you most of
              them. 😔 But, you can enjoy my personal playgrounds:
            </Typography>
          </Box>
          <Box>
            <Project
              title="What We Do"
              buttonText="Our Concept"
              Align="right"
              justify="end"
              mail={"https://react-icons.github.io/react-icons"}
              image="https://res.cloudinary.com/dfljnnxln/image/upload/v1674009084/Photo_9_h7x6h6.png"
            />
            <Project
              orderBox="2"
              orderPic="1"
              marginLeft={"3rem"}
              marginRight="0"
              title="The End Result"
              mail={"mailto:support@pchofficials.net"}
              image="https://res.cloudinary.com/dfljnnxln/image/upload/v1674009083/Photo_10_uixa5o.png"
            />
            <Project
              title="What We Do"
              buttonText="Our Concept"
              Align="right"
              justify="end"
              mail={"https://react-icons.github.io/react-icons"}
              image="https://res.cloudinary.com/dfljnnxln/image/upload/v1674009084/Photo_9_h7x6h6.png"
            />
          </Box>
        </Box>
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <Box textAlign={"center"} color={colors.FOOTER_TEXT} mt={10}>
            <Typography fontSize={"1.7rem"} fontWeight={400}>
              Other Noteworthy projects{" "}
            </Typography>
          </Box>

          <Stack mt={7} mb={7} direction={"row"} flexWrap={"wrap"} ml={[0, 5]}>
            {OtherProjects.map((ele) => (
              <Box
                width={"280px"}
                height={"280px"}
                backgroundColor={colors.MOBILENAV}
                m={2}
                padding={3}
                key={ele.index}
                borderRadius={"10px"}
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  my={2}
                >
                  <Box>
                    <BiFolder color={colors.ORANGE} size={"2rem"} />
                  </Box>
                  <Stack direction={"row"}>
                    <StyledLinkBox>
                      <Link href={ele.Glink} color={colors.FOOTER_TEXT}>
                        {<FiGithub size={"1.5rem"} />}
                      </Link>
                    </StyledLinkBox>
                    <StyledLinkBox>
                      <Link href={ele.Elink} color={colors.FOOTER_TEXT}>
                        {<FiExternalLink size={"1.5rem"} />}
                      </Link>
                    </StyledLinkBox>
                  </Stack>
                </Stack>
                <Box>
                  <Typography
                    variant="h5"
                    my={4}
                    color={colors.FOOTER_TEXT}
                    fontWeight={700}
                  >
                    {ele.title}
                  </Typography>
                  <Typography color={colors.OFF_WHITE} fontWeight={700}>
                    {ele.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Projects;
