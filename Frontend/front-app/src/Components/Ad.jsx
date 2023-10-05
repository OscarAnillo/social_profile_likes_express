import { Box, Button, Typography } from "@mui/material";

export const AdComponent = () => {
  return (
    <Box component="div" className="ad-div">
      <Typography variant="h6" align="left">
        Sponsored
      </Typography>
      <Box component="div" className="ad-row">
        <img
          src="https://falabella.scene7.com/is/image/FalabellaCO/4036007_1?wid=800&hei=800&qlt=70"
          alt=""
          width="100%"
        />
      </Box>
      <Box className="ad-row">
        <Typography variant="h6" textTransform="uppercase">
          Blue De Chanel
        </Typography>
        <Button variant="outlined">Purchase</Button>
      </Box>
      <Box className="ad-row">
        <Typography variant="body1" align="justify" padding="1em 0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          exercitationem? Incidunt optio dolores officiis.
        </Typography>
      </Box>
    </Box>
  );
};
