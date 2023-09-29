import React from "react";
import { Stack, Box, styled, Typography, Link } from "@mui/material";
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
  mail,
  justify = "start",
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
              <Typography variant="h5" fontSize={"1.8rem"}>
                {title}
              </Typography>
              <Stack direction={"row"} justifyContent={justify}>
                <StyledLinkBox mr={2}>
                  <Link href={mail} color={colors.FOOTER_TEXT}>
                    {<FiGithub size={"1.5rem"} />}
                  </Link>
                </StyledLinkBox>
                <StyledLinkBox>
                  <Link href={mail} color={colors.FOOTER_TEXT}>
                    {<FiExternalLink size={"1.5rem"} />}
                  </Link>
                </StyledLinkBox>
              </Stack>
            </Stack>

            <Typography fontSize={"0.8rem"}>
              {" "}
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </Typography>
            <Typography fontSize={"0.8rem"}>
              {" "}
              Stack: html,css,material UI, Reactjs, swiperJs
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
