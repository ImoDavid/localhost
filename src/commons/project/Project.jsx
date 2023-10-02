import React from "react";
import { Stack, Box, styled, Typography } from "@mui/material";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { colors } from "../../styles/globals";
import { motion } from "framer-motion";

const StyledAboutBox = styled(Box)({
  borderRadius: "25px",
  width: "100%",
  height: "250px",
});

const StyledTextBox = styled(Box)({
  lineHeight: "1rem",
  color: colors.OFF_WHITE,
  "@media screen and (max-width: 1200px)": {},
});

const StyledLinkBox = styled(Box)({
  color: colors.FOOTER_TEXT,
  cursor: "pointer",

  "& : hover": {
    color: colors.ORANGE,
  },
});

const Project = ({
  marginRight = "3rem",
  orderBox = "1",
  title,
  orderPic = "2",
  image,
  marginLeft,
  Align = "left",
  Glink,
  Slink,
  justify = "start",
  stack,
  des,
}) => {
  return (
    <>
      <Stack
        direction={["column", "row"]}
        paddingY={2}
        marginBottom={"2rem"}
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
      >
        <Box
          width={["100%", "600px"]}
          marginY={"1rem"}
          marginRight={marginRight}
          marginLeft={["0", marginLeft]}
          sx={{ order: ["2", orderBox] }}
        >
          <StyledTextBox textAlign={["left", Align]}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              mb={[1.5]}
            >
              <Typography variant="h5" fontSize={"1.8rem"} fontWeight={500}>
                {title}
              </Typography>
              <Stack direction={"row"} justifyContent={justify}>
                <StyledLinkBox
                  mr={2}
                  display={stack == "undisclosed" ? "none" : "block"}
                  onClick={() => window.open(Glink, "_blank")}
                >
                  {<FiGithub size={"1.5rem"} />}
                </StyledLinkBox>
                <StyledLinkBox onClick={() => window.open(Slink, "_blank")}>
                  {<FiExternalLink size={"1.5rem"} />}
                </StyledLinkBox>
              </Stack>
            </Stack>

            <Typography mt={[1, 3]} fontSize={"0.8rem"}>
              {des}
            </Typography>
            <Typography mt={[1, 3]} fontSize={"0.8rem"}>
              {" "}
              Stack/Tools:{stack}
            </Typography>
          </StyledTextBox>
        </Box>
        <StyledAboutBox
          component={motion.div}
          whileHover={{
            scale: [1.0, 1.05],
            transition: { type: "spring", duration: 0.3 },
          }}
          sx={{
            order: ["1", orderPic],
            background: `url(${image})`,
            backgroundSize: ["contain", "cover"],
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Stack>
    </>
  );
};

export default Project;
