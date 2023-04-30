import Link from "next/link";
import styled from "styled-components";

const CompletedMinting = (props: { tokenID: any, address: any }) => {
    const url = `https://testnets.opensea.io/assets/goerli/${props.address}/${props.tokenID - 1}`
    return (
        <CompletedContainer>
            <div>All set! Your NFT has been minted.</div>
            <Link className="link" href={url} target="_blank">VIEW OPENSEA</Link>
        </CompletedContainer>
    );
}

export default CompletedMinting

export const CompletedContainer = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
`