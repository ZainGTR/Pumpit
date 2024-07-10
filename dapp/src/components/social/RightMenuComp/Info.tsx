import Badges from "@/components/UserComp/Badges";

const Info = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md gap-4 text-sm">
      <span className="text-gray-500 font-medium">Profile</span>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <span>@Username</span>
          <Badges />
        </div>
        <span>
          {"Gold"} Member since {"23 mar 2024"}
        </span>
        <span>Location: {"USA"}</span>
        <span>Website: {"google.com"}</span>
        <button>Follow</button>
      </div>
    </div>
  );
};

export default Info;
