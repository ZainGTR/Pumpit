import Image from "next/image";

const userimg = "/tokens/meme3.png";
const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm ">
      <div>
        <Image
          src={userimg}
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex gap-4">
          <textarea
            name=""
            id=""
            placeholder="What are you up to lately?"
            className="bg-slate-100 rounded-lg flex-1 p-2 resize-none outline-cyan-200"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        <div className="flex gap-4 mt-4 text-gray-600">
          <div className="flex gap-2 items-center cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} />
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
