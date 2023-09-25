/* eslint-disable react/prop-types */
import React from "react";
import { Stack, Typography, Divider, Box } from "@mui/material";
import { colors } from "../../styles/globals";

const Heading = ({
  number,
  title,
  width = ["80px", "300px"],
  justify = "start",
  numSize = "1.3rem",
  titSize = "1.3rem",
}) => {
  return (
    <>
      <Stack direction={"row"} justifyContent={justify} alignItems={"center"}>
        <Typography
          variant="h1"
          fontSize={["0.9rem", numSize]}
          fontWeight={"500"}
          color={colors.ORANGE}
          mr={"0.5rem"}
        >
          {number}
        </Typography>
        <Typography
          variant="h1"
          fontWeight={"900"}
          fontSize={["1rem", titSize]}
          color={colors.OFF_WHITE}
          letterSpacing={["0px", "2px"]}
          textTransform={"capitalize"}
        >
          {title}
        </Typography>
        <Box width={width}>
          <Divider
            sx={{
              marginLeft: ".5rem",
            }}
            color={colors.ORANGE}
          />
        </Box>
      </Stack>
    </>
  );
};

export default Heading;
