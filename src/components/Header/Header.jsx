// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  Container,
  Stack,
  Typography,
  Box,
  styled,
  Button,
} from "@mui/material";
import { colors } from "../../styles/globals";

const StyledTypebox = styled(Box)({
  fontSize: "2rem",
  fontFamily: "Roboto",
  fontWeight: "700",
  marginTop: "1.5rem",
  color: colors.OFF_WHITE,
  "@media screen and (max-width: 1200px)": {
    fontSize: "1.5rem",
    marginTop: "2.5rem",
    marginBottom: "1rem",
  },
});

const StyledTextbox = styled(Box)({
  fontSize: "1rem",
  fontFamily: "Roboto",
  fontWeight: "400",
  marginTop: "1.5rem",
  color: colors.OFF_WHITE,
  "@media screen and (max-width: 1200px)": {
    fontWeight: "300",
  },
});

const Header = () => {
  return (
    <>
      <Container maxwidth="md" id="home">
        <Box
          minHeight={["80vh", "100vh"]}
          paddingX={["1rem", "2rem"]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack direction={"column"}>
            <Typography
              variant="h1"
              fontSize={"1.2rem"}
              fontWeight={"300"}
              color={colors.ORANGE}
              marginBottom={"1rem"}
            >
              hi, i'm
            </Typography>
            <Typography
              variant="h1"
              fontFamily={"Roboto"}
              fontWeight={"700"}
              marginTop={"1rem"}
              fontSize={["3rem", "8rem"]}
              color={colors.OFF_WHITE}
            >
              Imo David.
            </Typography>
            <StyledTypebox>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(5)
                    .typeString("<strong>Fullstack Web Developer</strong>")
                    .pauseFor(300)
                    .deleteChars(23)
                    .typeString(
                      "<strong>Crafting Digital Experiences </strong>"
                    )
                    .pauseFor(700)
                    .typeString(
                      '<strong> <span style="color: orange;">for the Modern Web.</span></strong>'
                    )
                    .pauseFor(1000)
                    .start();
                }}
              />
            </StyledTypebox>
            <StyledTextbox paddingRight={["1.5rem", "21rem"]}>
              <Typography variant="p" fontSize={["1rem", "1rem"]}>
                <span style={{ color: "orange" }}>
                  {" "}
                  Fullstack Web Developer
                </span>{" "}
                specialized in building exceptional digital experiences. I am an
                Engineer valued for driving high-performance accessible web
                experiences. I develop fast, quality, user-friendly and scalable
                products.
              </Typography>
            </StyledTextbox>
            <Stack direction={"row"} marginTop={["3.5rem", "2.5rem"]}>
              <AnchorLink
                offset="150"
                href="#about"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    color: colors.ORANGE,
                    borderColor: colors.ORANGE,
                    textTransform: "capitalize",
                    padding: ["1rem", "0.5rem"],
                    "&:hover": {
                      borderColor: colors.OFF_WHITE,
                    },
                  }}
                >
                  I Want to know more!
                </Button>
              </AnchorLink>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
export default Header;
