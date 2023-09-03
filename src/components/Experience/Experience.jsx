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

const NameButton = styled(Button)({
  color: colors.OFF_WHITE,
  textTransform: "capitalize",

  borderRadius: "0px",
  padding: "1rem",
  "&:active": {
    boxShadow: "none",
    backgroundColor: `${colors.GREY}`,
    borderColor: `${colors.ORANGE}`,
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
  paddingRight: ["10rem", "0.7rem"],
  fontSize: ["0.6rem", "0.9rem"],
});

const Experience = () => {
  const [nutrilife, setNutrilife] = useState(true);
  const [shona, setShona] = useState(false);
  const [freelance, setFreelance] = useState(false);

  return (
    <>
      <Container maxwidth="md">
        <Stack
          justifyContent={["center", "start"]}
          alignItems={["center", "stretch"]}
        >
          <Box
            minHeight={"100%"}
            paddingX={["1rem", "12rem"]}
            marginTop={["13.5rem", "10rem"]}
            marginBottom={["1rem", "2rem"]}
            marginX={["4.5rem", "0rem"]}
          >
            <Box>
              <Heading
                number={"02."}
                title={"working experience"}
                divWidth="50px"
              />
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
                        <StyledWorkdate>febuary 2023 - present</StyledWorkdate>
                      </Box>
                      <Box></Box>
                    </Box>
                  </>
                )}
                {shona && (
                  <>
                    <Box>
                      <Box mb={2}>
                        <StyledWorkrole>
                          lead developer{" "}
                          <span style={{ color: "orange" }}>@shona</span>
                        </StyledWorkrole>
                        <StyledWorkdate>febuary 2023 - present</StyledWorkdate>
                      </Box>
                      <Box>
                        <Stack direction={"row"}>
                          <StyledWorkicon>
                            <BiSolidRightArrow />
                          </StyledWorkicon>
                          <StyledWorktext>
                            Write modern, performant, maintainable code for a
                            diverse array of client and internal projects
                          </StyledWorktext>
                        </Stack>
                        <Stack direction={"row"}>
                          <StyledWorkicon>
                            <BiSolidRightArrow />
                          </StyledWorkicon>
                          <StyledWorktext>
                            Write modern, performant, maintainable code for a
                            diverse array of client and internal projects
                          </StyledWorktext>
                        </Stack>
                        <Stack direction={"row"}>
                          <StyledWorkicon>
                            <BiSolidRightArrow />
                          </StyledWorkicon>
                          <StyledWorktext>
                            Write modern, performant, maintainable code for a
                            diverse array of client and internal projects
                          </StyledWorktext>
                        </Stack>
                        <Stack direction={"row"}>
                          <StyledWorkicon>
                            <BiSolidRightArrow />
                          </StyledWorkicon>
                          <StyledWorktext>
                            Write modern, performant, maintainable code for a
                            diverse array of client and internal projects
                          </StyledWorktext>
                        </Stack>
                      </Box>
                    </Box>
                  </>
                )}
                {freelance && (
                  <>
                    <Box>
                      <Box mb={2}>
                        <StyledWorkrole>
                          lead developer{" "}
                          <span style={{ color: "orange" }}>@upwork</span>
                        </StyledWorkrole>
                        <StyledWorkdate>febuary 2023 - present</StyledWorkdate>
                      </Box>
                      <Box></Box>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Experience;
