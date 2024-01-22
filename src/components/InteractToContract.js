import { useDispatch, useSelector } from "react-redux";
import { NibiruTxClient, NibiruQuerier, Testnet } from "@nibiruchain/nibijs";
import { setAllNFTs, setMyNFTs, updateNFT } from "../Actions/NFTSlice";
import { getAllInfo, getAllNFTsInfo, getMyNFTsInfo } from "./NFTs";

const chain = Testnet(1);
const contractAddr =
  // "nibi1yvgh8xeju5dyr0zxlkvq09htvhjj20fncp5g58np4u25g8rkpgjswdkz05";
  "nibi1aaf9r6s7nxhysuegqrxv0wpm27ypyv4886medd3mrkrw6t4yfcnsc0dumz";

const updateAssets = async (token_id, dispatch) => {
  // const allnfts = await getAllNFTsInfo();
  // dispatch(setAllNFTs(allnfts));
  // const mynfts = await getMyNFTsInfo(account);
  // dispatch(setMyNFTs(mynfts));
  const updatedAsset = await getAllInfo(token_id);
  console.log("updated asset:", updatedAsset);
  dispatch(updateNFT(updatedAsset));
};

export const executeContract = async (
  dispatch,
  token_id,
  CONTRACT_MESSAGE,
  account,
  walletEx,
  tokenToSend
) => {
  try {
    const signer = await window[walletEx].getOfflineSigner(chain.chainId);
    const signingClient = await NibiruTxClient.connectWithSigner(
      chain.endptTm,
      signer
    );

    if (tokenToSend) {
      const tx = await signingClient.wasmClient.execute(
        account,
        contractAddr,
        CONTRACT_MESSAGE,
        "auto",
        "codedestate",
        tokenToSend
      );
    } else {
      const tx = await signingClient.wasmClient.execute(
        account,
        contractAddr,
        CONTRACT_MESSAGE,
        "auto"
      );
      console.log(tx.transactionHash);
    }
    await updateAssets(token_id, dispatch);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const queryContract = async (CONTRACT_MESSAGE) => {
  const querier = await NibiruQuerier.connect(chain.endptTm);
  const res = await querier.nibiruExtensions.wasm.queryContractSmart(
    contractAddr,
    CONTRACT_MESSAGE
  );
  return res;
};
