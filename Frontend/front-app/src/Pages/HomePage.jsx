import { ProfileCard } from "../Components/ProfileCard";
import PostsCard from "../Components/PostsCard";
import { AdComponent } from "../Components/Ad";

export const HomePage = () => {
  return (
    <div className="home-div">
      <ProfileCard />
      <PostsCard />
      <AdComponent />
    </div>
  );
};
