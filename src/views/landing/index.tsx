import { FC, memo } from "react";
import useLogic from "./logic";
import { LandingContainer, RightSection, LeftSection, MaxContaier } from './styles';
import NavBar from "../../components/NavBar";



const Landing: FC = () => {
    const {
        handleGoToLogin,
        handleGoToSignup,
    } = useLogic()
    return (
        <MaxContaier>
            <NavBar />
        <LandingContainer>
            <LeftSection>
                <p>Sumérgete en los apasionantes juegos de FromSoftware y descubre experiencias únicas, historias cautivadoras y desafiantes mecánicas de juego. Explora los fascinantes personajes, revela sus trasfondos y motivaciones. Descubre la importancia estratégica de objetos y herramientas, moldea tu propia experiencia de juego. Únete a nosotros y adéntrate en esta apasionante odisea. ¡Enciende el sol y encuentra tu propio camino!
                <br /> ¡Praise the sun!</p>
            </LeftSection>
            <RightSection
                autoPlay
                muted
                loop
                playsInline
                src="https://thumbs.gfycat.com/ShadyVigilantBeardedcollie-mobile.mp4"
                className="trailer-video"
            />
            {/* <ButtonBoxes>
                <ButtonLogin onClick={handleGoToLogin}>Login</ButtonLogin>
                <ButtonSignup onClick={handleGoToSignup}>Signup</ButtonSignup>
            </ButtonBoxes> */}
        </LandingContainer>
        </MaxContaier>
    )
}

export default memo(Landing)