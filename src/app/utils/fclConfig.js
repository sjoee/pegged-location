import * as fcl from "@onflow/fcl";

fcl
  .config()
  .put("accessNode.api", "https://rest-testnet.onflow.org") // Flow Testnet
  .put("challenge.handshake", "https://fcl-discovery.onflow.org/testnet/authn"); // FCL Wallet Authentication
