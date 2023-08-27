// eslint-disable-next-line no-unused-vars
import React from "react";
import {  Box, Stack } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";
import { colors } from "../../styles/globals";



const Loader = () => {
  return (
    <>
       <Stack
            
            justifyContent={"center"}
            alignItems={"center"}
            height={"100vh"}
          >
        <Box>
          <InfinitySpin width="200" color={colors.ORANGE} />
        </Box>
      </Stack>
    </>
  );
};

export default Loader;
