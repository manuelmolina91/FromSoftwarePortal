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
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.mediumSmall};
     font-weight: ${({theme}) => theme.fontWeights.bold};
     margin-bottom: 1.125rem;
     margin-left: 1.875rem;
     margin-top: 3.125rem;
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
     font-family: ${({theme}) => theme.fonts.primary};
     font-weight: ${({theme}) => theme.fontWeights.semiBold};
     margin: 0 2.1rem;
`;

export const Error = styled.span`
     color: ${({theme}) => theme.colors.danger};
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: 0.7rem;
     margin-top: 0.5rem;
     margin-left: 2.05rem;
`;

export const Input = styled.input<{$hasError?: boolean}>`
     border-radius: 5px;
     border: 0.1px solid
          ${({$hasError, theme}) =>
               $hasError ? theme.colors.danger : theme.colors.secondary};
     padding-left: 0.5rem;
     box-sizing: border-box;
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: 0.8rem;
     height: 2.5rem;
     margin-right: 2rem;
     margin-left: 2rem;
     margin-top: 0.625rem;
     width: 15rem;

     ${({$hasError, theme}) =>
          $hasError &&
          css`
               color: ${theme.colors.danger};
          `}

     &::placeholder {
          color: ${({theme}) => theme.colors.black};
          font-family: ${({theme}) => theme.fonts.primary};
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
     color: ${({theme}) => theme.colors.black};
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: 500;
     text-decoration: none;
     text-align: center;
     line-height: 25px;
     cursor: pointer;

     &:hover {
          color: ${({theme}) => theme.colors.gray};

          cursor: pointer;
     }
`;

export const ButtonSignUp = styled.button`
     background-color: ${({theme}) => theme.colors.black};
     border-radius: 10px;
     border: none;
     color: white;
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: 500;

     margin-top: 1.5rem;
     padding: 1rem 2rem 1rem 2rem;
     text-decoration: none;

     &:hover {
          background-color: ${({theme}) => theme.colors.secondary};
          color: ${({theme}) => theme.colors.light};
          cursor: pointer;
     }
`;

export const ErrorFirebaseContainer = styled.div`
     display: flex;
     justify-content: center;
`;

export const ErrorFirebaseText = styled.p`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiBold};
     color: ${({theme}) => theme.colors.danger};
     margin-bottom: 1rem;
`;

export const RadioGroup = styled.div`
     display: flex;
     flex-direction: row;
     margin-top: 2rem;
     margin-left: 1.5rem;
     font-family: ${({theme}) => theme.fonts.primary};
`;

export const RadioOption = styled.label`
     display: flex;
     align-items: center;
     margin-right: 16px;
     font-family: ${({theme}) => theme.fonts.primary};
`;

export const RadioInput = styled.input`
     margin-right: 8px;
     font-family: ${({theme}) => theme.fonts.primary};
`;