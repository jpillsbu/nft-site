import { ethers } from "ethers";
import { Button, InfoContainer } from "@/styles/globalStyles";
import abi721 from "../utils/721contract.json";
import abi1155 from "../utils/1155contract.json";

declare var window: any

const ConnectWallet = (props: {
    setAccount: any,
    setContract: any,
    setSupply: any,
    address: any,
    contractType: any,
    setMaxSupply: any
}) => {
    const login = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            .catch((err: any) => {
                if (err.code === 4001) {
                    console.log('Please connect to MetaMask.');
                } else {
                    console.error(err);
                }
            });
        const account = accounts[0];
        const address = props.address;
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        let contract: any;
        let totalSupply: any;
        if (props.contractType === "ERC721") {
            contract = new ethers.Contract(address, abi721, signer);
            totalSupply = await contract.totalSupply()
        } else {
            contract = new ethers.Contract(address, abi1155, signer);
            totalSupply = await contract.totalSupply(0)
        }
        const maxSupply = await contract.maxSupply()
        props.setMaxSupply(maxSupply.toString())
        props.setAccount(account);
        props.setContract(contract)
        props.setSupply(Number(totalSupply))
    }
    return (
        <InfoContainer>
            <Button onClick={login}>CONNECT WALLET</Button>
            <Button>LEARN MORE</Button>
        </InfoContainer>
    );
}

export default ConnectWallet