import { Inter } from 'next/font/google'
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import nftImage from "../public/nftImage.png"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [inProgress, setInProgress] = useState(false);
  const [completed, setCompleted] = useState(false);

  const mint = async () => {

  }

  const getTotalSupply = async () => {

  }

  const login = async () => {

  }
  return (
    <MainContainer>
      <BackgroundVideo src="/background.mp4" autoPlay loop muted />
      <Card>
        <Body>
          <Left>
            <Image src={nftImage} alt="Coder at Computer" className='rounded-full p-10' />
          </Left>
          <Right>
            <Title>
              Binary Art
            </Title>
            <SubTitle>
              minted / 6
            </SubTitle>
            <InfoContainer>
              <Button>CONNECT WALLET</Button>
              <Button>LEARN MORE</Button>
            </InfoContainer>
          </Right>
        </Body>
        <CardFooter>
          Minting Now
        </CardFooter>
      </Card>
      <Footer>
        <Attribute href="https://www.vecteezy.com/video/22316172-binary-code-4k">Binary Code 4K Stock Videos by Vecteezy</Attribute>
      </Footer>
    </MainContainer>
  )
}

const MainContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const BackgroundVideo = styled.video`
bottom: 0;
left: 0;
min-height: 100%;
min-width: 100%;
object-fit: cover;
position: fixed;
right: 0;
top: 0;
z-index: -1;
`

const Card = styled.div`
background-color: black;
width: 900px;
height: 500px;
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

const Left = styled.div`
width: 40%;
`

const Right = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: start;
`

const Title = styled.div`
font-size: 24px;
`

const SubTitle = styled.div`
font-size: 12px;
font-weight: 200;
margin-bottom: 9px;
`

const InfoContainer = styled.div`
width: 75%;
height: 2rem;
display: flex;
`

const Button = styled.div`
background-color: white;
border-radius: 12px;
color: black;
cursor: pointer;
flex: 1;
display: flex;
justify-content: center;
align-items: center;
margin-right: 9px;
`

const CardFooter = styled.div`
background-color: #1817dd;
color: white;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
`

const Footer = styled.div`
position: fixed;
padding: 10px 10px 0px 10px;
bottom: 0;
position: fixed;
height: 40px;
width: 100%;
background: black;
`

const Attribute = styled.a`
display: flex;
justify-content: center;
align-items: center;
`
