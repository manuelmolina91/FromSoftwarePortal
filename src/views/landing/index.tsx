import { FC, memo } from "react";
import useLogic from "./logic";
import { ButtonBoxes, ButtonLogin, ButtonSignup, LandingContainer, WelcomeVideo, TitlePage } from './styles';
<style>
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace&family=Special+Elite&display=swap');
</style>

const Landing: FC = () => {
    const {
        handleGoToLogin,
        handleGoToSignup,
    } = useLogic()
    return (
        <LandingContainer>
            <TitlePage>FromSoftware</TitlePage>
            <WelcomeVideo
                autoPlay
                muted
                loop
                playsInline
                //src="https://i.gifer.com/NYNh.mp4"
                src="https://i.imgur.com/L1WLUHR.mp4"
                className="trailer-video"
            />
            <ButtonBoxes>
                <ButtonLogin onClick={handleGoToLogin}>Login</ButtonLogin>
                <ButtonSignup onClick={handleGoToSignup}>Signup</ButtonSignup>
            </ButtonBoxes>
        </LandingContainer>
    )
}

export default memo(Landing)