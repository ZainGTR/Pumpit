import Image from "next/image";
import Interaction from "./PostComp/Interaction";
import Comments from "./PostComp/Comments";

const postData = {
  username: "Banana Token",
  upvote: 556,
  downvote: 2,
  comments: 65,
  hasImage: true,
  userImage: "/tokens/meme3.png",
  postText:
    "Checkout our last meme update, Smart trade with every transactions in the blockchain",
  image: "/tokens/meme post.png",
};

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-4 font-semibold">
          <Image
            src={postData.userImage}
            width={32}
            height={32}
            alt=""
            className="w-8 h-8 rounded-full"
          />
          <span>{postData.username}</span>
        </div>
        <div>
          {" "}
          <Image src="/more.png" width={16} height={16} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div
          className={
            postData.hasImage ? "w-full relative  min-h-96" : "w-full relative"
          }
        >
          <Image
            src={postData.image}
            alt=""
            fill
            className="object-fit rounded-md"
          />
        </div>
        <p>{postData.postText}</p>
      </div>
      <Interaction
        votes={postData.upvote - postData.downvote}
        comments={postData.comments}
      />
      <Comments />
    </div>
  );
};

export default Post;
