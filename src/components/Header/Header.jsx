// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Container, Stack, Typography, Box, styled,Button } from "@mui/material";
import { colors } from "../../styles/globals";

const StyledTypebox = styled(Box)({
  fontSize: "2rem",
  fontFamily: "Roboto",
  fontWeight: "700",
  marginTop: "1.5rem",
  color: colors.OFF_WHITE,
  '@media screen and (max-width: 1200px)': {
    fontSize:"1.5rem",
    marginTop:"2.5rem",
    marginBottom:"1rem",
}
});

const StyledTextbox = styled(Box)({
    fontSize: "1rem",
    fontFamily: "Roboto",
    fontWeight: "400",
    marginTop: "1.5rem",
    color: colors.OFF_WHITE,
    '@media `screen and (max-width: 1200px)': {
      marginTop:"10.5rem",
      fontSize:"5rem"
  }
  });

const Header = () => {
  return (
    <>
      <Container maxwidth="md">
        <Box minHeight={"100%"} paddingX={["1rem","2rem"]} zIndex={"1"}>
          <Stack direction={"column"} marginTop={"5rem"}>
            <Typography
              variant="h1"
              fontSize={"1.2rem"}
              fontWeight={"300"}
              color={colors.ORANGE}
            >
              hi, i'm 
            </Typography>
            <Typography
              variant="h1"
              fontFamily={"Roboto"}
              fontWeight={"700"}
              marginTop={"1rem"}
              fontSize={["4rem","8rem"]}
              color={colors.OFF_WHITE}
            >
              Imo David.
            </Typography>
            <StyledTypebox>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(5)
                    .typeString("<strong>Frontend Developer</strong>")
                    .pauseFor(300)
                    .deleteChars(20)
                    .typeString("<strong>I Build Things For The Web</strong>")
                    .pauseFor(700)
                    .typeString(
                      '<strong> and <span style="color: orange;">Mobile.</span></strong>'
                    )
                    .pauseFor(1000)
                    .start();
                }}
              />
            </StyledTypebox>
            <StyledTextbox paddingRight={["1.5rem","21rem"]}>
              <Typography variant="p" fontSize={["1rem", "1rem"]}>
                I’m a <span style={{color: "orange"}}>Frontend Web Developer</span> specializing in building exceptional digital experiences. I am
                an Engineer valued for driving high-performance accessible web
                experiences. I develop fast, quality, user-friendly and scalable
                products.
              </Typography>
            </StyledTextbox>
            <Stack direction={"row"} marginTop={["3.5rem","2.5rem"]}>
            <Button  variant="outlined" sx={{
                  color:colors.ORANGE,
                  borderColor:colors.ORANGE,
                  textTransform:"capitalize",
                  padding: ["1rem","0.5rem"],
              }}>
                  I Want to know more!
                </Button>
             
            </Stack>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
export default Header;
