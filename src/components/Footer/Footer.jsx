import React from "react";
import {
  Container,
  Stack,
  Typography,
  Box,
  Button,
  styled,
  Link,
} from "@mui/material";

import { FaGithub, FaLinkedin, FaTwitter, FaSlack } from "react-icons/fa";

import { Heading } from "../typography";
import { colors } from "../../styles/globals";
import { motion } from "framer-motion";

const StyledLinkBox = styled(Box)({
  color: colors.FOOTER_TEXT,
  padding: "1rem",

  "& : hover": {
    color: colors.ORANGE,
  },
});

const Footerlinks = [
  { icon: <FaGithub />, url: "https://github.com/ImoDavid" },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/imo-david-924672230",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/emperorjagz?t=TL0gss3lbZonKGViMokGVg&s=09",
  },
  {
    icon: <FaSlack />,
    url: "https://slack.com/404?",
  },
];

const Footer = () => {
  return (
    <>
      <Container
        maxwidth="md"
        id="contact"
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
                Say Hello !
              </Button>
            </Stack>
            <Box mt={8} mb={2}>
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {Footerlinks.map((ele) => (
                  <StyledLinkBox mr={1} key={ele.url}>
                    <Link href={ele.url} color={colors.FOOTER_TEXT}>
                      <Typography fontSize={"1.5rem"}> {ele.icon}</Typography>
                    </Link>
                  </StyledLinkBox>
                ))}
              </Stack>
              <Typography color={colors.OFF_WHITE} mt={5} fontSize={"0.8rem"}>
                © Copyright Imo O.D 2023
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
