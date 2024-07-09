import Image from "next/image";
import React, { useState } from "react";

const ImageUplaoder = () => {
  const [imageFile, setImageFile] = useState();

  return (
    <div className="flex flex-col items-center rounded-md justify-center border-2 border-dashed border-blue-500 relative">
      <Image src={imageFile || "/uploader.png"} alt="" fill />
      <input
        type="file"
        accept="image/*"
        className="w-full h-full opacity-0 cursor-pointer"
        onChange={(e) => setImageFile(e.target.files?[0])}
      />
    </div>
  );
};

export default ImageUplaoder;
