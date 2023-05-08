import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import {Form as defaultForm} from 'formik';

export const LoginBackImg = styled.div`
     background: rgb(0, 0, 0);
     background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(66, 0, 36, 1) 100%
     );
     background-attachment: fixed;
     background-position: center;
     background-size: cover;
     height: 100vh;
     width: 100vw;
     position: fixed;
`;

export const MainFormContainer = styled.div`
     align-items: center;
     display: flex;
     justify-content: center;
`;
export const Form = styled(defaultForm)`
     background-color: white;
     border-radius: 10px;
     margin-left: 1.7rem;
     margin-right: 1.7rem;
     /* Margen para pantalla grande */
     margin-bottom: 6rem;

     /* Media query para pantalla pequeña */
     @media (max-width: 768px) {
          margin-top: 2rem;
          width: 300px;
     }
`;

export const SignUpTitle = styled.h1`
`;

export const NameContainer = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     /* margin-left: 3.125rem; */
     margin-top: 2rem;
`;

export const EmailContainer = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     /* margin-left: 3.125rem; */
     margin-top: 2rem;
`;

export const PasswordContainer = styled.div`
     align-items: left;
     display: flex;
     flex-direction: column;
     justify-content: center;
     /* margin-left: 3.125rem; */
     margin-top: 2rem;
`;

export const LabelContainer = styled.div``;

export const Label = styled.label`
`;

export const Error = styled.span`
`;

export const Input = styled.input<{$hasError?: boolean}>`

     ${({$hasError, theme}) =>
          $hasError &&
          css`
               color: ${theme.colors.danger};
          `}

     &::placeholder {
          font-size: 0.7rem;
          font-weight: 200;
          opacity: 0.5;
     }

     @media (min-width: 768px) {
          width: 21rem;
     }
`;

export const ButtonSignUpContainer = styled.div`
     align-items: center;
     display: flex;
     justify-content: center;
`;

export const LinkLoginContainer = styled.div`
     align-items: center;
     display: flex;
     justify-content: center;
     margin-top: 2rem;
`;

export const LinkLoginText = styled(Link)`
     font-weight: 500;
     text-decoration: none;
     text-align: center;
     line-height: 25px;
     cursor: pointer;

     &:hover {

          cursor: pointer;
     }
`;

export const ButtonSignUp = styled.button`
`;

export const ErrorFirebaseContainer = styled.div`
     display: flex;
     justify-content: center;
`;

export const ErrorFirebaseText = styled.p`
`;

export const RadioGroup = styled.div`
`;

export const RadioOption = styled.label`
margin: 2px;
`;

export const RadioInput = styled.input`
background-color: blue;
`;

export const LabelRole = styled.menu`
`