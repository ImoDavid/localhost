import React,  from "react";
import { Link } from "react-router-dom";
import { Container, Stack, Typography, Box, styled } from "@mui/material";
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
    title: "shoplist Organizer",
    text: "A web application to organize shopping or To-Do list with features like Add, Delete and sharing the list.",
    Glink: "https://shoplistorganiser.netlify.app/",
    stack: "React.Js React-Bootstrap ReduxToolkit Css Git Netlify.",
  },
  {
    index: "2",
    title: "easyBank",
    Glink: "https://clone-easy-bank.netlify.app/",
    text: "A  single one page website for a digital bank aimed at providing digital financial solutions.",
    stack: "Html Bootstrap5 Javascript Sass Git Netlify.",
  },
  {
    index: "3",
    title: "pizzaHut",
    text: "A web application that allows visitors/ customers to explore the menu and gallery of a restuarant.",
    Glink: "https://imodavid.github.io/pizzahut-landing/",
    stack: "Html Css Javascript SwiperJs Git.",
  },
  {
    index: "4",
    title: "zoeyTote",
    text: "A single landing page for an E-commerce and female fashion suite.",
    Glink: "https://imodavid.github.io/zoey-tote/",
    stack: "Html Css Bootstrap5 Git.",
  },
  {
    index: "5",
    title: "fylo",
    text: "A landing page for Fylo which helps users safe-keep important documents.",
    Glink:
      "https://imodavid.github.io/fylo-landing-page-with-two-column-layout/",
    stack: "Html Css Git.",
  },
];

const Projects = () => {
  return (
    <>
      <Container
        maxwidth="md"
        id="projects"
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
              title="streetPriest"
              buttonText="Our Concept"
              Align="right"
              justify="end"
              stack={"undisclosed"}
              des={"I collabrated to work on the frontend development of this web application that helps showcase the amazing work of putting smiles and empowering street kids to become better part of the society. "}
              Glink=""
              Slink={"https://www.streetpriests.org/"}
              image="https://res.cloudinary.com/dfljnnxln/image/upload/v1695966762/Screenshot_from_2023-09-29_06-51-52_kwmjcj.png"
            />
            <Project
              orderBox="2"
              orderPic="1"
              marginLeft={"3rem"}
              marginRight="0"
              stack={
                "React.Js, Styled Components, Redux Toolkit, REST API, SwiperJs, Git, Netlify."
              }
              title="wearFina"
              des={"An E-Commerce web application which possesses user authetication, a cart and checkout system."}
              Glink=""
              Slink={"https://wearfina.netlify.app/"}
              image="https://res.cloudinary.com/dfljnnxln/image/upload/v1695966282/Screenshot_from_2023-09-29_06-44-22_qteh1q.png"
            />
            <Project
              title="Interno"
              buttonText="Our Concept"
              Align="right"
              stack={
                "React.Js, React-bootstrap, Material UI, Css, Git, Netlify. "
              }
              justify="end"
              des={"This is a stylish and minimalist multipage web application for an internal decoration agency. "}
              Glink=""
              Slink={"http://interno-decor.netlify.app/"}
              image="https://res.cloudinary.com/dfljnnxln/image/upload/v1695966069/Screenshot_from_2023-09-29_06-40-23_lrhhmo.png"
            />
            <Project
              orderBox="2"
              orderPic="1"
              marginLeft={"3rem"}
              stack={
                "Html, Css, Bootstrap 5, Javascript, Scroll trigger, Git. "
              }
              marginRight="0"
              title="sunnySide"
              des={" A single pager landing page for a creative agency. "}
              Glink=""
              Slink={
                "https://imodavid.github.io/sunny-side-agency-landing-page/"
              }
              image="https://res.cloudinary.com/dfljnnxln/image/upload/v1696071223/Screenshot_from_2023-09-30_11-36-29_huxvxz.png"
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
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                onClick={() => window.open(ele.Glink, "_blank")}
                sx={{ cursor: "pointer" }}
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
                    <Link
                      to={ele.Elink}
                      target={"_blank"}
                      color={colors.FOOTER_TEXT}
                    >
                      <StyledLinkBox>
                        {<FiGithub size={"1.5rem"} />}
                      </StyledLinkBox>
                    </Link>
                    <Link
                      to={ele.Glink}
                      target="_blank"
                      color={colors.FOOTER_TEXT}
                    >
                      <StyledLinkBox>
                        {<FiExternalLink size={"1.5rem"} />}
                      </StyledLinkBox>
                    </Link>
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
                  <Typography
                    color={colors.OFF_WHITE}
                    fontSize={"0.7rem"}
                    fontWeight={700}
                  >
                    {ele.text}
                  </Typography>
                  <Typography
                    mt={1.0}
                    fontSize={"0.8rem"}
                    color={colors.OFF_WHITE}
                  >
                    {" "}
                    Stack:{ele.stack}
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
