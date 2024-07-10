import Image from "next/image";

const ProfileCardFull = () => {
  return (
    <div className="flex flex-col gap-6 bg-transparent text-sm mb-8">
      <div className="w-full h-64 relative ">
        <Image
          src="/tokens/cover.jpg"
          alt=""
          fill
          className="object-cover rounded-t-md"
        />
        <Image
          src="/tokens/meme3.png"
          alt=""
          width={128}
          height={128}
          className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-12 ring-4 ring-white z-10 object-cover"
        />
      </div>
      <div className="h-20 flex flex-col gap-1">
        <span className="font-bold">USERNAME</span>
        <span className="text-sm text-gray-500">Joined {"May 2024"}</span>
        <div className="flex gap-6 items-center justify-center">
          <div className="flex flex-col gap-1 items-center justify-center">
            <span className="text-sm text-gray-800 font-semibold">
              {"1.25"}k
            </span>
            <span className="text-sm text-gray-800">Posts</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <span className="text-sm text-gray-800 font-semibold">
              {"5.52"}k
            </span>
            <span className="text-sm text-gray-800">Followers</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <span className="text-sm text-gray-800 font-semibold">
              {"9242.87"}k
            </span>
            <span className="text-sm text-gray-800">Volume</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <span className="text-sm text-gray-800 font-semibold">
              {"1024.22"}k
            </span>
            <span className="text-sm text-gray-800">MarketCap</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardFull;
