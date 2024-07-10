import ImageUplaoder from "@/components/Utils/ImageUplaoder";

const CreateToken = () => {
  return (
    <div className="flex items-center p-4 bg-white shadow-md mt-32 justify-between">
      <div className="flex flex-col gap-4 w-[40%]">
        <span>Create your meme token</span>
        <p>
          Welcome to PumPiT token deployer service, we will guide step by step
          to create your meme token on the fractal blockchain
        </p>
      </div>
      <div className="flex flex-col gap-4 w-[50%]">
        <span>Token Information</span>
        <div className="flex gap-8 w-full">
          <div className="flex flex-col gap-4 w-[50%]">
            <input
              type="text"
              placeholder="Token name"
              className="bg-slate-300 p-4 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Ticker eg: ETH"
              className="bg-slate-300 p-4 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Short description"
              className="bg-slate-300 p-4 rounded-md outline-none"
            />
          </div>
          <ImageUplaoder />
        </div>
        <textarea
          name=""
          id=""
          rows={5}
          placeholder="Information about the project"
          className="bg-slate-300 p-4 rounded-md outline-none resize-none"
        ></textarea>
        <button className="bg-green-500 py-2 rounded-md font-semibold">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateToken;
