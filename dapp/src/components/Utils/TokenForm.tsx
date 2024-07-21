"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useState } from "react";
import {
  TransactionButton,
  useActiveAccount,
  useActiveWalletChain,
} from "thirdweb/react";
import ConnectComponent from "../ConnectComponent";
import { prepareContractCall } from "thirdweb";
import { deployContract } from "thirdweb/deploys";
import { DeployerContract } from "@/utils/Constants";
import { strict } from "assert";
import { ethers } from "ethers";

const TokenForm = () => {
  const [imageFile, setImageFile] = useState<any>();
  const account = useActiveAccount();
  const chain = useActiveWalletChain();
  const [tokenName, setTokenName] = useState("");
  const [tokenTicker, setTokenTicker] = useState("");
  const [tokenDesc, setTokenDesc] = useState("");
  const [devTokens, setDevTokens] = useState(BigInt(0));
  const fees = BigInt(5000000000000000);
  const rate = BigInt(33333333);

  function CalculateDevTokens(amount: string) {
    if (amount) {
      const amountInWei = ethers.parseUnits(amount, "ether");
      const amountToPay = amountInWei / rate;
      setDevTokens(BigInt(amountToPay));
    } else {
      setDevTokens(BigInt(0));
    }
  }
  return (
    <div className="flex flex-col gap-4 w-[50%]">
      <span>Token Information</span>
      <div className="flex gap-8 w-full">
        <div className="flex flex-col gap-4 w-[50%]">
          <input
            type="text"
            placeholder="Token name"
            className="bg-slate-300 p-4 rounded-md outline-none"
            onChange={(e) => setTokenName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ticker eg: ETH"
            className="bg-slate-300 p-4 rounded-md outline-none"
            onChange={(e) => setTokenTicker(e.target.value)}
          />
          <input
            type="text"
            placeholder="Dev Tokens eg: 50000000"
            className="bg-slate-300 p-4 rounded-md outline-none"
            onChange={(e) => CalculateDevTokens(e.target.value)}
          />
          <p>
            ETH Required: {parseFloat(ethers.formatEther(devTokens)).toFixed(4)}{" "}
            frxETH
          </p>
        </div>
        <div className="flex items-center rounded-md justify-center border-2 border-dashed border-blue-500 relative">
          <CldUploadWidget
            uploadPreset="pumpit"
            onSuccess={(result) => setImageFile(result.info)}
          >
            {({ open }) => {
              return (
                <div className="flex w-80 h-32 relative" onClick={() => open()}>
                  <Image
                    src={imageFile ? imageFile.secure_url! : "/uploader.png"}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              );
            }}
          </CldUploadWidget>
        </div>
      </div>
      <textarea
        name=""
        id=""
        rows={5}
        placeholder="Information about the project"
        className="bg-slate-300 p-4 rounded-md outline-none resize-none"
        onChange={(e) => setTokenDesc(e.target.value)}
      ></textarea>
      <p>Platform fees: {ethers.formatEther(fees)} frxETH</p>
      {account && chain?.id == 2522 ? (
        <TransactionButton
          transaction={() => {
            // Create a transaction object and return it
            const tx = prepareContractCall({
              contract: DeployerContract,
              method: "createToken",
              params: [tokenName, tokenTicker],
              value: devTokens + fees,
            });
            return tx;
          }}
          onTransactionSent={(result) => {
            console.log("Transaction submitted", result.transactionHash);
          }}
          onTransactionConfirmed={(receipt) => {
            console.log("Transaction confirmed", receipt.transactionHash);
          }}
          onError={(error) => {
            console.error("Transaction error", error);
          }}
        >
          Total Amount to pay:{" "}
          {parseFloat(ethers.formatEther(devTokens + fees)).toFixed(4)} frxETH
        </TransactionButton>
      ) : (
        <ConnectComponent />
      )}
    </div>
  );
};

export default TokenForm;
