import styled from 'styled-components';
import Card from '@/components/card';

export default function Home() {
  return (
    <MainContainer>
      <BackgroundVideo src="/background.mp4" autoPlay loop muted />
      <Card />
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
position: absolute;
right: 0;
top: 0;
bottom: 0;
left: 0;
height: 100%;
width: 100%;
object-fit: cover;
z-index: -1;
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
