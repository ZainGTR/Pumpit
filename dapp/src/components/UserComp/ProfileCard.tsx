import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="flex flex-col gap-8 p-4 bg-white rounded-md shadow-md text-sm">
      <div className="h-20 relative">
        <Image
          src="/tokens/cover.jpg"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="/tokens/meme3.png"
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 rounded-full absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
        />
      </div>
      <div className="h-20 flex flex-col items-center gap-1">
        <span className="font-semibold">USERNAME</span>
        <span className="text-sm text-gray-500">5520 Followers</span>
        <button className="bg-slate-500 py-2 px-6 rounded-md text-white font-medium">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
