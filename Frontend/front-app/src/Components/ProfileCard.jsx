import { useSelector } from "react-redux";
import { Box, Divider, Typography } from "@mui/material";
import { MdEmail, MdLocationPin } from "react-icons/md";

export const ProfileCard = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Box component="div" className="profile-div">
      <Box component="div" className="profile-container">
        <Box className="row">
          <img src={user.picturePath} alt="" />
          <Box>
            <Typography variant="h5" className="profile-name">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography className="profile-detail">
              {user.occupation}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box className="row">
          <MdEmail className="icon" />
          <Typography variant="body1" className="profile-detail">
            {user.email}
          </Typography>
        </Box>
        <Box className="row">
          <MdLocationPin className="icon" />
          <Typography variant="body1" className="profile-detail">
            {user.location} - USA
          </Typography>
        </Box>
        <Divider />
        <Typography variant="body1" className="profile-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
          libero reprehenderit doloremque in, aperiam sint laudantium similique,
          commodi harum aut quod nemo ipsam. Fugit, exercitationem iure sint
          accusamus delectus fugiat!
        </Typography>
      </Box>
    </Box>
  );
};
