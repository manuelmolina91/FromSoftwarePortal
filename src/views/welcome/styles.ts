import styled from 'styled-components'

export const WelcomeContainer = styled.div`
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-height: 100vh;
overflow: hidden;
`
export const WelcomeVideo = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 120%;
  z-index: -1;
`;

export const ButtonBoxes = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  padding: 40px;
  max-width: 600px;
  width: 10%;
  margin-top: 100px;
`

export const ButtonLogin = styled.button`
  background: transparent;
  border: 2px solid white;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 20px;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(to bottom, #000000, #ffffff);
    color: black;
    border: 2px solid black;
  }
`

export const ButtonSignup = styled.button`
  background: transparent;
  border: 2px solid white;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 20px;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(to bottom, #FF4500, #8B0000);
    color: black;
    border: 2px solid black;
  }
`;

export const TitlePage = styled.h1`
font-size: 150px;
margin-top: 20px;
font-family: Bruno+Ace;
`