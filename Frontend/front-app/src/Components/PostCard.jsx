import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdMoreVert,
  MdShare,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";
import { setPost } from "../Redux/Features/User-slice";

export const PostCard = ({
  postId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
  createdAt,
}) => {
  const loggedInUserId = useSelector((state) => state.user.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;
  const dispatch = useDispatch();

  const patchLike = async () => {
    const res = await axios.patch(`http://localhost:3005/posts/${postId}`, {
      userId: loggedInUserId,
    });
    const updatedPost = await res.data;
    dispatch(setPost(updatedPost));
  };

  return (
    <Box>
      <Card key={postId} raised>
        <CardHeader
          avatar={
            <Avatar aria-label="user">
              <img src={userPicturePath} alt="" className="post-user-img" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MdMoreVert />
            </IconButton>
          }
          title={`${name} in ${location}`}
          subheader={createdAt}
        />
        <CardMedia
          component="img"
          className="img-post"
          image={picturePath}
          alt=""
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={() => patchLike()}>
            {isLiked ? <MdFavorite /> : <MdFavoriteBorder />}

            {likeCount}
          </IconButton>
          <IconButton aria-label="share">
            <MdShare />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

PostCard.propTypes = {
  postId: PropTypes.string,
  postUserId: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  picturePath: PropTypes.string,
  userPicturePath: PropTypes.string,
  likes: PropTypes.object,
  comments: PropTypes.array,
  createdAt: PropTypes.string,
};
