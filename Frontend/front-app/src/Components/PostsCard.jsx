import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Box } from "@mui/material";
import { MdFavoriteBorder, MdMoreVert, MdShare } from "react-icons/md";

export default function PostsCard() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/posts/all")
      .then((res) => {
        setPostData(res.data);
      })
      .catch(console.log);
  }, []);

  return (
    <Box component="div" className="post-div">
      {postData.map((post) => (
        <Card key={post._id} raised>
          <CardHeader
            avatar={
              <Avatar aria-label="user">
                <img
                  src={post.userPicturePath}
                  alt=""
                  className="post-user-img"
                />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MdMoreVert />
              </IconButton>
            }
            title={`${post.firstName} ${post.lastName}`}
            subheader={post.createdAt}
          />
          <CardMedia
            component="img"
            className="img-post"
            image={post.picturePath}
            alt=""
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <MdFavoriteBorder />
            </IconButton>
            <IconButton aria-label="share">
              <MdShare />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
