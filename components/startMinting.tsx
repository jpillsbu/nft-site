import { Button, InfoContainer } from "@/styles/globalStyles";

const StartMinting = (props: {
    mint: any
    logOut: any
}) => {
    return (
        <InfoContainer>
            <Button onClick={props.mint}>MINT</Button>
            <Button onClick={props.logOut}>START OVER</Button>
        </InfoContainer>
    );
}

export default StartMinting