import Image from "next/image";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Image
          src="/tokens/meme3.png"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center w-full justify-between rounded-md text-sm bg-slate-200 px-4">
          <textarea
            name=""
            id=""
            placeholder="Write a comment..."
            className="flex-1 p-2 bg-transparent rounded-md outline-none resize-none"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div>
        <Comment />
      </div>
      <div>
        <Comment />
      </div>
      <div>
        <Comment />
      </div>
      <div>
        <Comment />
      </div>
    </div>
  );
};

export default Comments;
