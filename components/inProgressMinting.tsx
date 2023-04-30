import styled from "styled-components";
import Loading from "./loading";
import Link from "next/link";

const InProgressMinting = (props: { transactionHash: any }) => {
    const url = `https://goerli.etherscan.io/tx/${props.transactionHash}`
    return (
        <MintingContainer>
            <div>Your NFT is being minted. Please wait.</div>
            <Loading />
            <Link className="link" href={url} target="_blank">CHECK ETHERSCAN</Link>
        </MintingContainer>
    );
}

export default InProgressMinting

export const MintingContainer = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
`