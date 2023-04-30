import styled from "styled-components";
import { useState } from "react";
import CardPicture from "./cardPicture";
import CardBody from "./cardBody";

const Card = () => {
    const [account, setAccount] = useState(null)
    return (
        <CardContainer>
            <Body>
                <CardPicture />
                <CardBody account={account} setAccount={setAccount} />
            </Body>
            <CardFooter>
                {account ? "Start Minting!" : "Connect to your wallet to start minting!"}
            </CardFooter>
        </CardContainer>
    );
}

export default Card

const CardContainer = styled.div`
background-color: black;
opacity: 0.9;
width: 55%;
height: 60%;
display: flex;
flex-direction: column;
border-radius: 15px;
overflow: hidden;
`

const Body = styled.div`
color: white;
flex-grow: 1;
display: flex;
align-items: center;
`

const CardFooter = styled.div`
background-color: #39ff14;
color: black;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
`