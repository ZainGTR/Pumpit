import TokenForm from "@/components/Utils/TokenForm";

const CreateToken = () => {
  return (
    <div className="flex items-center p-4 bg-white shadow-md mt-32 justify-between">
      <div className="flex flex-col gap-4 w-[40%]">
        <span>Create your meme token</span>
        <p>
          Welcome to PumPiT token deployer service, we will guide step by step
          to create your meme token on the fractal blockchain.
        </p>
        <p>
          The default token supply is <strong>1,000,000,000.</strong>
        </p>
      </div>
      <TokenForm />
    </div>
  );
};

export default CreateToken;
