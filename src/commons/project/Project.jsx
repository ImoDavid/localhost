import React from "react";
import { Stack, Box, styled, Typography, Link } from "@mui/material";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { colors } from "../../styles/globals";

const StyledAboutBox = styled(Box)({
  borderRadius: "25px",
  width: "100%",
  height: "250px",
});

const StyledTextBox = styled(Box)({
  lineHeight: "1rem",
  color: colors.OFF_WHITE,
  "@media screen and (max-width: 1200px)": {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

const StyledLinkBox = styled(Box)({
  color: colors.FOOTER_TEXT,
  marginRight: "1rem",
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
      <Stack direction={["column", "row"]} paddingY={2} marginBottom={"2rem"}>
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
            >
              <Typography  variant="h5" fontSize={"1.8rem"}>
                {title}
              </Typography>
              <Stack direction={"row"} justifyContent={justify}>
                <StyledLinkBox>
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
          </StyledTextBox>
        </Box>
        <StyledAboutBox
          sx={{
            order: ["1", orderPic],
            background: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Stack>
    </>
  );
};

export default Project;
