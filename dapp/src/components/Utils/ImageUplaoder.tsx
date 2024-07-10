"use client";
import Image from "next/image";
import { client, selectSp } from "@/client/gfclient";
import { GF_ADDRESS, GF_BUCKET } from "@/config/env";
import { GenerateNewImage } from "@/utils/AIConnect";
import { getOffchainAuthKeys } from "@/utils/offchainAuth";
import {
  Long,
  OnProgressEvent,
  VisibilityType,
} from "@bnb-chain/greenfield-js-sdk";
import React, { useState } from "react";

const ImageUplaoder = () => {
  const address = GF_ADDRESS;
  const [info, setInfo] = useState<{
    bucketName: string;
    objectName: string;
    file: File | null;
  }>({
    bucketName: GF_BUCKET || "",
    objectName: "",
    file: null,
  });

  return (
    <div className="flex flex-col items-center rounded-md justify-center border-2 border-dashed border-blue-500 relative">
      <input
        className="file-input"
        type="file"
        name="resume"
        onChange={(e) => {
          if (e.target.files) {
            setInfo({
              ...info,
              file: e.target.files[0],
            });
          }
        }}
      />
      <button
        className="button is-primary"
        onClick={async () => {
          if (!address || !info.file) return;

          const spInfo = await selectSp();
          console.log("spInfo", spInfo);

          //const provider = await connector?.getProvider();
          const offChainData = await getOffchainAuthKeys(address);
          if (!offChainData) {
            alert("No offchain, please create offchain pairs first");
            return;
          }

          try {
            const res = await client.object.delegateUploadObject(
              {
                bucketName: GF_BUCKET || "",
                objectName: info.objectName,
                body: info.file,
                delegatedOpts: {
                  visibility: VisibilityType.VISIBILITY_TYPE_PUBLIC_READ,
                },
                onProgress: (e: OnProgressEvent) => {
                  console.log("progress: ", e.percent);
                  console.log("bucket: ", info.bucketName);
                  console.log("object: ", info.objectName);
                },
              },
              {
                type: "EDDSA",
                address: address,
                domain: window.location.origin,
                seed: offChainData.seedString,
              }
            );

            if (res.code === 0) {
              alert("create object success");
            }
          } catch (err) {
            console.log(typeof err);
            if (err instanceof Error) {
              alert(err.message);
            }
            if (err && typeof err === "object") {
              alert(JSON.stringify(err));
            }
          }
        }}
      >
        Upload
      </button>
    </div>
  );
};

export default ImageUplaoder;
