import { parseEther } from "ethers";
import InProgressMinting from '@/components/inProgressMinting';
import CompletedMinting from '@/components/completedMinting';
import StartMinting from '@/components/startMinting';
import { useState } from "react";
import styled from "styled-components";
import ConnectWallet from "./connectWallet";

const CardBody = (props: {
    account: any,
    setAccount: any
}) => {
    // const contractType = "ERC721"
    // const address = "0x029C0D31E367444CC2B596C71DDCf15FCE622aE4"
    const contractType = "ERC1155"
    const address = "0xDD34C185801947D117f30DE787bAB9aD0f4bE751"
    const [contract, setContract] = useState<any | null>(null)
    const [inProgress, setInProgress] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [supply, setSupply] = useState(0)
    const [transactionHash, settransactionHash] = useState(null)
    const [maxSupply, setMaxSupply] = useState(0)

    const logOut = () => { }

    const mint = async () => {
        if (contractType.length === 6) {
            const safeMint = await contract.safeMint(1, { value: parseEther("0.01") });
            setInProgress(true)
            settransactionHash(safeMint.hash)
            await safeMint.wait()
            setInProgress(false)
            setCompleted(true)
            const totalSupply = await contract.totalSupply()
            setSupply(Number(totalSupply))
        } else {
            const id = 0
            const mint = await contract.mint(id, 1, { value: parseEther("0.001") });
            setInProgress(true)
            settransactionHash(mint.hash)
            await mint.wait()
            setInProgress(false)
            setCompleted(true)
            const totalSupply = await contract.totalSupply(id)
            setSupply(Number(totalSupply))
        }
    }

    const getState = () => {
        if (inProgress) {
            return <InProgressMinting transactionHash={transactionHash} />
        }

        if (completed) {
            return <CompletedMinting address={address} />
        }

        return (
            <StartMinting mint={mint} logOut={logOut} />
        )
    }

    return (
        <Body>
            <Title>
                Binary Art
            </Title>
            <Minted>
                <MintedCounter>{maxSupply > 0 || supply > 0 ? `${supply} minted / ${maxSupply}` : "Connect to see how many NFTS are left!"}</MintedCounter>
                {props.account ? getState() : (
                    <ConnectWallet
                        setAccount={props.setAccount}
                        setContract={setContract}
                        setSupply={setSupply}
                        address={address}
                        contractType={contractType}
                        setMaxSupply={setMaxSupply}
                    />)
                }
            </Minted>
        </Body>
    );
}

export default CardBody

const Body = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: start;
`

const Title = styled.h2`
font-size: 48px;
`

const Minted = styled.div`
font-size: 12px;
font-weight: 200;
margin-bottom: 9px;
`

const MintedCounter = styled.div`
margin-bottom: 12px;
font-size: 16px;
`