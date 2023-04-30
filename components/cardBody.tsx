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
    const address = "0x029C0D31E367444CC2B596C71DDCf15FCE622aE4"
    const [contract, setContract] = useState<any | null>(null)
    const [inProgress, setInProgress] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [supply, setSupply] = useState(0)
    const [transactionHash, settransactionHash] = useState(null)

    const logOut = () => { }

    const mint = async () => {
        const safeMint = await contract.safeMint(1, { value: parseEther("0.01") });
        setInProgress(true)
        settransactionHash(safeMint.hash)
        await safeMint.wait()
        setInProgress(false)
        setCompleted(true)
        const totalSupply = await contract.totalSupply()
        setSupply(Number(totalSupply))
    }

    const getState = () => {
        if (inProgress) {
            return <InProgressMinting transactionHash={transactionHash} />
        }

        if (completed) {
            return <CompletedMinting tokenID={supply} address={address} />
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
                <MintedCounter>{supply} minted / 6</MintedCounter>
                {props.account ? getState() : (
                    <ConnectWallet
                        setAccount={props.setAccount}
                        setContract={setContract}
                        setSupply={setSupply}
                        address={address}
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