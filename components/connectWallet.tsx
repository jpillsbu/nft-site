import { ethers } from "ethers";
import { Button, InfoContainer } from "@/styles/globalStyles";
import abi from "../utils/contract.json";

declare var window: any

const ConnectWallet = (props: {
    setAccount: any,
    setContract: any,
    setSupply: any,
    address: any
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
        const contract = new ethers.Contract(address, abi, signer);
        const totalSupply = await contract.totalSupply()
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