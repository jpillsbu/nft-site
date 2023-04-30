import styled from "styled-components";
import nftImage from "../public/nftImage.png";
import Image from "next/image";


const CardPicture = () => {
    return (
        <Picture>
            <Image priority src={nftImage} alt="Coder at Computer" className='rounded-full p-10' />
        </Picture>
    );
}

export default CardPicture

const Picture = styled.div`
width: 40%;
`