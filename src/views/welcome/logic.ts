import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useLogic = () => {
    const navigate = useNavigate();

    const handleGoToLogin = useCallback(() => {
        navigate("/login");
    }, [navigate]);

    const handleGoToSignup = useCallback(() => {
        navigate("/signup");
    }, [navigate]);

    return {
        handleGoToLogin,
        handleGoToSignup
    }
}

export default useLogic