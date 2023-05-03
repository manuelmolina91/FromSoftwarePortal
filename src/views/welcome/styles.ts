import styled from 'styled-components'

export const WelcomeContainer = styled.div`
background-size: cover;
background-position: 100% 100%;
width: 100vw;
height:100vh;
align-items: center;
display: flex;
justify-content: left;
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
    position: absolute;
    top: 40vh;
    flex-direction:column;
    margin-left: 90px;
    display: flex;
    background: transparent;
    border-radius: 20px;
    backdrop-filter: blur(20px);
    width: 250px;
    height: 150px;
`

export const ButtonLogin = styled.button`
    cursor: pointer;
    border-radius: 5px;
    margin: 20px;
    padding: 5px;
    &:hover{
        background-image: linear-gradient(to right, #7F0909 ,#FFD700);
    }
`

export const ButtonSignup = styled.button`
     border-radius: 5px;
    cursor: pointer;
    margin: 20px;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.white100};
    &:hover{
        background-image: linear-gradient(to right, #2A623D ,#FFD700);
    }
`