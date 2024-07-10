import Image from "next/image";

const Ad = () => {
  return (
    <div className=" flex flex-col p-4 bg-white rounded-lg shadow-md gap-4 cursor-pointer text-sm">
      <span className="text-gray-500 font-medium">Sponsored Ads</span>
      <div className="">
        <Image
          src="/tokens/ad.jpg"
          alt=""
          width={288}
          height={384}
          className="w-96 h-52 rounded-md"
        />
      </div>
      <div>
        <span>Title</span>
        <p>test text</p>
      </div>
    </div>
  );
};

export default Ad;
