import styled from "styled-components";

export const Button = styled.div`
padding: 15px 30px;
font-weight: bold;
background-color: white;
border-radius: 12px;
color: black;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: 0.25s all ease-in-out;
&:hover {
  color: #39ff14;
  background-color: black;
}
`

export const InfoContainer = styled.div`
display: flex;
gap: 12px;
`