import React from 'react';
import Lottie from "lottie-react";
import loginLottie from '../../assets/lotties/53395-login.json'
const LoginLottie = () => {
    return (
        <div>
            <Lottie animationData={loginLottie} />
        </div>
    );
};

export default LoginLottie;