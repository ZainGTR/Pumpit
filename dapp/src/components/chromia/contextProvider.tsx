"use client";

import {
  Session,
  createKeyStoreInteractor,
  createSingleSigAuthDescriptorRegistration,
  createWeb3ProviderEvmKeyStore,
  hours,
  registerAccount,
  registrationStrategy,
  ttlLoginRule,
} from "@chromia/ft4";
import { createClient } from "postchain-client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getRandomUserName } from "./randomNames";

// Create context for Chromia session
const ChromiaContext = createContext<Session | undefined>(undefined);

// 2.
declare global {
  interface Window {
    ethereum: any;
  }
}

// Define hooks for accessing context
export function useSessionContext() {
  return useContext(ChromiaContext);
}

export function ContextProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | undefined>(undefined);

  useEffect(() => {
    const initSession = async () => {
      console.log("Initializing Session");
      // 1. Initialize Client
      const client = await createClient({
        nodeUrlPool: "http://localhost:7740",
        blockchainRid:
          "833C1CEC66C65647236F9E6B69BFAFD79C1704E3708462CC81FD5E4A8474E230",
      });

      // 2. Connect with MetaMask
      const evmKeyStore = await createWeb3ProviderEvmKeyStore(window.ethereum);

      // 3. Get all accounts associated with evm address
      const evmKeyStoreInteractor = createKeyStoreInteractor(
        client,
        evmKeyStore
      );
      const accounts = await evmKeyStoreInteractor.getAccounts();

      if (accounts.length > 0) {
        console.log(accounts[0].id);
        // 4. Start a new session
        const { session } = await evmKeyStoreInteractor.login({
          accountId: accounts[0].id,
          config: {
            rules: ttlLoginRule(hours(2)),
            flags: ["MySession"],
          },
        });
        setSession(session);
      } else {
        // 5. Create a new account by signing a message using metamask
        const authDescriptor = createSingleSigAuthDescriptorRegistration(
          ["A", "T"],
          evmKeyStore.id
        );
        const { session } = await registerAccount(
          client,
          evmKeyStore,
          registrationStrategy.open(authDescriptor, {
            config: {
              rules: ttlLoginRule(hours(2)),
              flags: ["MySession"],
            },
          }),
          {
            name: "register_user",
            args: getRandomUserName(),
          }
        );
        setSession(session);
      }
      console.log("Session initialized");
    };

    initSession().catch(console.error);
  }, []);

  return (
    <ChromiaContext.Provider value={session}>
      {children}
    </ChromiaContext.Provider>
  );
}