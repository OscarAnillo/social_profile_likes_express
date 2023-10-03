import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const ProfileCard = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Box component="div">
      <Box>
        <Typography>Profile Card</Typography>
      </Box>
    </Box>
  );
};
