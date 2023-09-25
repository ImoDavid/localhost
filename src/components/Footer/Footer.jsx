import React from "react";
import { Container, Stack, Typography, Box, Button } from "@mui/material";
import { Heading } from "../typography";
import { colors } from "../../styles/globals";

const Footer = () => {
  return (
    <>
      <Container maxwidth="md">
        <Box
          minHeight={"100%"}
          paddingX={["1rem", "5rem"]}
          marginTop={["13.5rem", "10rem"]}
          marginBottom={["1rem", "2rem"]}
          textAlign={"center"}
        >
          <Heading
            number={"04."}
            title={"what's next?"}
            width={["50px", "100px"]}
            justify={"center"}
            numSize="1rem"
            titSize="1rem"
          />
          <Box>
            <Typography
              letterSpacing={["0rem", "0.4rem"]}
              variant="h4"
              mt={4}
              mb={2}
              color={colors.FOOTER_TEXT}
              fontWeight={700}
            >
              GET IN TOUCH!
            </Typography>
            <Typography color={colors.OFF_WHITE}>
              I’m currently open to joining a new team of creative developers.
              Also, if you have a question, proposal, idea or just want to say
              hi, Go ahead.
            </Typography>

            <Stack
              direction={"row"}
              justifyContent={"center"}
              marginTop={["3.5rem", "2.5rem"]}
            >
              <Button
                variant="outlined"
                sx={{
                  color: colors.ORANGE,
                  borderColor: colors.ORANGE,
                  textTransform: "capitalize",
                  padding: ["1rem", "0.8rem"],
                  "&:hover": {
                    borderColor: colors.OFF_WHITE,
                  },
                }}
                onClick={() =>
                  (window.location = "mailto:dev.till.infinity@gmail.com")
                }
              >
                Say Hello
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
