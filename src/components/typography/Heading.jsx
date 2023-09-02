import React from "react";
import { Stack, Typography, Divider } from "@mui/material";
import { colors } from "../../styles/globals";

const Heading = ({ number, title }) => {
  return (
    <>
      <Stack direction={"row"} justifyContent={"start"} alignItems={"center"}>
        <Typography
          variant="h1"
          fontSize={"1.3rem"}
          fontWeight={"500"}
          color={colors.ORANGE}
          mr={"0.5rem"}
        >
          {number}
        </Typography>
        <Typography
          variant="h1"
          fontWeight={"900"}
          fontSize={["1rem", "1.3rem"]}
          color={colors.OFF_WHITE}
          letterSpacing={"2px"}
          textTransform={"capitalize"}
        >
          {title}
        </Typography>
        <Divider
          sx={{ height: ".1rem", marginX: ".5rem" }}
          color={colors.ORANGE}
          width={["100px", "200px"]}
        />
      </Stack>
    </>
  );
};

export default Heading;
