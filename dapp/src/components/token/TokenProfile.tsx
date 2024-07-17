const TokenProfile = () => {
  return (
    <div className="flex flex-col justify-between bg-slate-400 shadow-sm rounded-sm p-4">
      <div className="flex justify-between items-center">
        <div>Token name</div>
        <div>Price</div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Achieviements</div>
        <div className="flex gap-2">
          <div>Link1</div>
          <div>Link1</div>
          <div>Link1</div>
        </div>
      </div>
      <div>desc</div>
      <div>Extra info</div>
    </div>
  );
};

export default TokenProfile;
