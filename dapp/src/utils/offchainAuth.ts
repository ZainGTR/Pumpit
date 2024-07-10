import { client, getAllSps } from "@/client/gfclient";
import { GF_SECRET, GREENFIELD_RPC_URL, GREEN_CHAIN_ID } from "@/config/env";
import { IReturnOffChainAuthKeyPairAndUpload } from "@bnb-chain/greenfield-js-sdk";
import { ethers } from "ethers";

/**
 * generate off-chain auth key pair and upload public key to sp
 */
export const getOffchainAuthKeys = async (address: string) => {
  const storageResStr = localStorage.getItem(address);
  const provider = new ethers.JsonRpcProvider(GREENFIELD_RPC_URL);
  const signer = new ethers.Wallet(GF_SECRET || "", provider);
  if (storageResStr) {
    const storageRes = JSON.parse(
      storageResStr
    ) as IReturnOffChainAuthKeyPairAndUpload;
    if (storageRes.expirationTime < Date.now()) {
      alert("Your auth key has expired, please generate a new one");
      localStorage.removeItem(address);
      return;
    }

    return storageRes;
  }

  const allSps = await getAllSps();
  const offchainAuthRes =
    await client.offchainauth.genOffChainAuthKeyPairAndUpload(
      {
        sps: allSps,
        chainId: GREEN_CHAIN_ID,
        expirationMs: 5 * 24 * 60 * 60 * 1000,
        domain: window.location.origin,
        address,
      },
      signer
    );

  const { code, body: offChainData } = offchainAuthRes;
  if (code !== 0 || !offChainData) {
    throw offchainAuthRes;
  }

  localStorage.setItem(address, JSON.stringify(offChainData));
  return offChainData;
};
