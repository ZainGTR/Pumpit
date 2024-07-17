import Image from "next/image";
import Interaction from "./PostComp/Interaction";
import Comments from "./PostComp/Comments";

const postData = {
  username: "Banana Token",
  upvote: 556,
  downvote: 2,
  comments: 65,
  share: 13,
  views: 6554,
  hasImage: true,
  userImage: "/tokens/meme3.png",
  postText:
    "Checkout our last meme update, Smart trade with every transactions in the blockchain",
  image: "/tokens/meme post.png",
};

const Postmini = () => {
  return (
    <div className="flex flex-col gap-2  p-2 shadow-md test-sm">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 font-semibold">
          <Image
            src={postData.userImage}
            width={16}
            height={16}
            alt=""
            className="w-4 h-4 rounded-full"
          />
          <span>{postData.username}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <div
          className={
            postData.hasImage ? "w-full relative  min-h-12" : "w-full relative"
          }
        >
          <Image
            src={postData.image}
            alt=""
            fill
            className="object-fit rounded-md"
          />
        </div>
        <p className="text-sm">{postData.postText}</p>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-2">
          <Interaction count={postData.upvote} icon="/like.png" />
          <Interaction count={postData.comments} icon="/comment.png" />
          <Interaction count={postData.share} icon="/share.png" />
        </div>
        <div className="px-6">
          <Interaction count={postData.views} icon="/people.png" />
        </div>
      </div>
    </div>
  );
};

export default Postmini;
