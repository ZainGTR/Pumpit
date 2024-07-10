import AddPost from "@/components/social/AddPost";
import LeftMenu from "@/components/social/LeftMenu";
import Posts from "@/components/social/Posts";
import RightMenu from "@/components/social/RightMenu";

const CommunityPage = () => {
  return (
    <div className="flex gap-6 p-6">
      <div className="hidden lg:block w-[20%]">
        <LeftMenu type="Home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <AddPost />
          <Posts />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
};

export default CommunityPage;
