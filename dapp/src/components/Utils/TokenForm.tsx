"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useState } from "react";

const TokenForm = () => {
  const [imageFile, setImageFile] = useState<any>();

  return (
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
            placeholder="Dev Tokens eg: 50000000"
            className="bg-slate-300 p-4 rounded-md outline-none"
          />
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
                    objectFit="contain"
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
      ></textarea>
      <button className="bg-green-500 py-2 rounded-md font-semibold">
        Create
      </button>
    </div>
  );
};

export default TokenForm;
