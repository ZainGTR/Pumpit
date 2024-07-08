import Image from "next/image";

const Interaction = (props: { votes: number; comments: number }) => {
  return (
    <div className="flex items-center justify-between text-sm my-4">
      <div className="flex gap-8">
        <div className="flex gap-2 items-center p-2 rounded-md bg-slate-100 shadow-sm text-gray-500">
          <Image
            src="/like.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <span>{props.votes}</span>
          <Image
            src="/like.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer rotate-180"
          />
        </div>
        <div className="flex gap-2 items-center p-2 rounded-md bg-slate-100 shadow-sm text-gray-500">
          <Image
            src="/comment.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <span>{props.comments}</span>
        </div>
      </div>
      <div>share</div>
    </div>
  );
};

export default Interaction;
