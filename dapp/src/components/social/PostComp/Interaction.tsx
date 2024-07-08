import Image from "next/image";

const Interaction = (props: { count: number; icon: string }) => {
  return (
    <div className="flex gap-8">
      <div className="flex gap-2 items-center p-2 rounded-md bg-slate-100 shadow-sm text-gray-500">
        <Image
          src={props.icon}
          alt=""
          width={16}
          height={16}
          className="cursor-pointer"
        />
        <span>{props.count}</span>
      </div>
    </div>
  );
};

export default Interaction;
