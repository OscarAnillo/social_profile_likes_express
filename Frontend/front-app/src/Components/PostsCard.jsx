import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../Redux/Features/User-slice";
import { PostCard } from "./PostCard";
import { Box } from "@mui/material";
import axios from "axios";

export default function PostsCard() {
  const { posts } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3005/posts/all")
      .then((res) => {
        dispatch(setPosts(res.data));
      })
      .catch(console.log);
  }, []); //eslint-disable-line

  return (
    <Box component="div" className="post-div">
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
          createdAt,
        }) => (
          <PostCard
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
            createdAt={createdAt}
          />
        )
      )}
    </Box>
  );
}
