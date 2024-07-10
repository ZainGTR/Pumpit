import Image from "next/image";

const Badges = () => {
  return (
    <div className="flex gap2">
      <Image src="/school.png" alt="" width={16} height={16} />
      <Image src="/school.png" alt="" width={16} height={16} />
      <Image src="/school.png" alt="" width={16} height={16} />
      <Image src="/school.png" alt="" width={16} height={16} />
      <Image src="/school.png" alt="" width={16} height={16} />
    </div>
  );
};

export default Badges;
