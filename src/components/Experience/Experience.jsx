import React, { useState } from "react";
import {
  Container,
  Stack,
  Typography,
  Box,
  styled,
  Button,
} from "@mui/material";
import { BiSolidRightArrow } from "react-icons/bi";
import { colors } from "../../styles/globals";
import { Heading } from "../typography/";
import { motion } from "framer-motion";

const NameButton = styled(Button)({
  color: colors.OFF_WHITE,
  textTransform: "capitalize",
  borderRadius: "0px",
  padding: "1rem",
  "@media screen and (max-width: 1200px)": {
    padding: "1rem 0.6rem",
  },
});
const StyledWorkrole = styled(Typography)({
  color: colors.OFF_WHITE,
  textTransform: "capitalize",
  fontSize: "1rem",
  marginBottom: "0.5rem",
});
const StyledWorkdate = styled(Typography)({
  color: colors.OFF_WHITE,
  textTransform: "capitalize",
  fontSize: "0.7rem",
});
const StyledWorkicon = styled(Typography)({
  color: colors.ORANGE,
  mr: "5",
  marginTop: "0.3rem",
  fontSize: "0.6rem",
});
const StyledWorktext = styled(Typography)({
  color: colors.OFF_WHITE,
  marginLeft: "0.5rem",
  fontSize: ["0.6rem", "0.9rem"],
  fontWeight: "400",
  "@media screen and (max-width: 1200px)": {
    fontWeight: "300",
  },
});
const StyledRowbox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  marginBottom: "1rem",

  "@media screen and (max-width: 1200px)": {
    marginBottom: "1rem",
  },
});

const Experience = () => {
  const [nutrilife, setNutrilife] = useState(true);
  const [shona, setShona] = useState(false);
  const [freelance, setFreelance] = useState(false);

  return (
    <>
      <Container
        maxwidth="md"
        id="experience"
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
      >
        <Box
          minHeight={"100%"}
          paddingX={["2.2rem", "10rem"]}
          marginTop={["13.5rem", "10rem"]}
          marginBottom={["1rem", "2rem"]}
        >
          <Box>
            <Heading number={"02."} title={"working experience"} />
          </Box>
          <Box>
            <Stack direction={"row"} paddingY={2}>
              <Box
                borderBottom={
                  nutrilife
                    ? `2px solid ${colors.ORANGE}`
                    : `2px solid ${colors.OFF_WHITE}`
                }
              >
                <NameButton
                  onClick={() => {
                    setNutrilife(true);
                    setShona(false);
                    setFreelance(false);
                  }}
                >
                  nutrilife
                </NameButton>
              </Box>
              <Box
                borderBottom={
                  shona
                    ? `2px solid ${colors.ORANGE}`
                    : `2px solid ${colors.OFF_WHITE}`
                }
              >
                <NameButton
                  onClick={() => {
                    setShona(true);
                    setNutrilife(false);
                    setFreelance(false);
                  }}
                >
                  shona{" "}
                </NameButton>
              </Box>
              <Box
                borderBottom={
                  freelance
                    ? `2px solid ${colors.ORANGE}`
                    : `2px solid ${colors.OFF_WHITE}`
                }
              >
                <NameButton
                  onClick={() => {
                    setFreelance(true);
                    setNutrilife(false);
                    setShona(false);
                  }}
                >
                  freelance
                </NameButton>
              </Box>
            </Stack>
            <Box>
              {nutrilife && (
                <>
                  <Box>
                    <Box mb={2}>
                      <StyledWorkrole>
                        lead developer{" "}
                        <span style={{ color: "orange" }}>@Nutrilife</span>
                      </StyledWorkrole>
                      <StyledWorkdate>feb 2023 - jan 2024</StyledWorkdate>
                    </Box>
                    <Box>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Led a dynamic team in creating intuitive web platforms
                          that empowers our supporters and stakeholders to
                          connect with our NGO's cause in meaningful ways.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Implemented agile methodologies, increasing project
                          efficiency.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Collaborated with cross-functional teams to deliver
                          projects on time and within budget.
                        </StyledWorktext>
                      </StyledRowbox>
                    </Box>
                  </Box>
                </>
              )}
              {shona && (
                <>
                  <Box>
                    <Box mb={2}>
                      <StyledWorkrole>
                        frontend developer{" "}
                        <span style={{ color: "orange" }}>@shona</span> (Remote)
                      </StyledWorkrole>
                      <StyledWorkdate> march 2022 - Jan 2023</StyledWorkdate>
                    </Box>
                    <Box>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Developed a website with Reactjs for internal team
                          use; developed product, cart and product tracking
                          pages.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Made resuable components and implemented features like
                          filter, sort etc while also consuming RESTful API.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Functioned within a multi-disciplinary teams of
                          Engineers,Designers,Product managers on a daily basis.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Worked with team management platforms like
                          Rally,Github.
                        </StyledWorktext>
                      </StyledRowbox>
                    </Box>
                  </Box>
                </>
              )}
              {freelance && (
                <>
                  <Box>
                    <Box mb={2}>
                      <StyledWorkrole>
                        web developer{" "}
                        <span style={{ color: "orange" }}>@upwork</span>
                      </StyledWorkrole>
                      <StyledWorkdate> June 2021 - present</StyledWorkdate>
                    </Box>
                    <Box>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Developed the frontend of a large scale E-commerce
                          website using reactJs and styled components.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Work with tecnologies like HTML, CSS, vanilla JS to
                          transform UI mockups to scalable high performance
                          websites and web applications.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Create well functioning static/ dynamic websites for
                          clients.
                        </StyledWorktext>
                      </StyledRowbox>
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Experience;
