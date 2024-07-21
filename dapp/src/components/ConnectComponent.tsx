"use client";
import { client } from "@/app/client";
import { Testnetchain } from "@/utils/Constants";
import { ConnectButton, lightTheme } from "thirdweb/react";
import { createWallet, walletConnect } from "thirdweb/wallets";

const ConnectComponent = () => {
  const chainId = Testnetchain;
  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    walletConnect(),
    createWallet("com.trustwallet.app"),
    createWallet("me.rainbow"),
  ];

  return (
    <div className="">
      <ConnectButton
        client={client}
        wallets={wallets}
        theme={lightTheme({
          colors: {
            primaryButtonBg: "#64748b",
          },
        })}
        chain={chainId}
        connectModal={{
          size: "compact",
          titleIcon: "",
          welcomeScreen: {
            title: "Welcome to PumPiT",
            subtitle: "Connect with your favorite Web3 wallet",
          },
          termsOfServiceUrl: "",
          privacyPolicyUrl: "",
          showThirdwebBranding: false,
        }}
      />
    </div>
  );
};

export default ConnectComponent;
