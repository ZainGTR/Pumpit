"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useState } from "react";

const ImageUplaoder = () => {
  const [imageFile, setImageFile] = useState<any>();

  return (
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
              />
            </div>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUplaoder;
