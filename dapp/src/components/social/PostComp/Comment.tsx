import Image from "next/image";

const Comment = () => {
  return (
    <div className="flex text-sm  gap-4 p-2">
      <div className="">
        <Image
          src="/tokens/meme3.png"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="text-md font-medium">username</div>
          <div>
            <Image
              src="/more.png"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        </div>
        <div className="text-sm">
          <p>
            This is nice project, I bought many tokens and im still buying, the
            other project also looks cool with the vault lock option
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/comment.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
          />
          <Image
            src="/like.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
          />
          <Image
            src="/share.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
          />
          <Image
            src="/people.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Comment;
