import {Props} from '../../views/Auth/Login/type';
import {SignUpProps} from '../../views/Auth/Signup/type';

export const handledSubmitLogin = async (values: Props): Promise<Response> => {
     try {
          const response = await fetch('http://localhost:8000/auth/login', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                    email: values.email,
                    password: values.password,
               }),
          });

          return response;
     } catch (error: any) {
          console.log(error);
          return new Response(null);
     }
};

export const hadledSubmitSignup = async (values: SignUpProps) => {
     try {
          const response = await fetch('http://localhost:8000/auth/signup', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify(values),
          });
          return response;
     } catch (error: any) {
          console.log(error);
          return new Response(null);
     }
};