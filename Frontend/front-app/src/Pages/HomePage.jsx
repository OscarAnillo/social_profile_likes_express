import { ProfileCard } from "../Components/ProfileCard";
import PostsCard from "../Components/PostsCard";

export const HomePage = () => {
  return (
    <div className="home-div">
      <ProfileCard />
      <PostsCard />
    </div>
  );
};
