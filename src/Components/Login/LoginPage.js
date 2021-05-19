import React from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebase.config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginLottie from '../LoginLottie/LoginLottie';
import facebookIco from '../../assets/icon _fb.png'
import phoneIco from '../../assets/icon _mobile.png'
import googleIcon from '../../assets/icon _google.png'
import envelopIco from '../../assets/icon _mail.png'


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const LoginPage = () => {
    // GOOGLE AUTH
    const googLogInHandler = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then((result) => {
            const user = result.user
            console.log(user);
        })
            .catch((err) => {
                const errMsg = err.message;
                toast.error(errMsg, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }
    // facebook handler
    const facebookHandler = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            var user = result.user;
            console.log(user);// user information
        })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }

    return (
        <div className="logInPage">
            <div className="container centered">
                <div className="row">
                    <div className="col-md-6 mt-110">
                        <h3>LOGIN</h3>
                        <button className="w-75 m-1 btn btn-outline-warning colorBlack">
                            <div className="d-flex align-items-center">
                                <img src={phoneIco} style={{ float: 'left' }} alt="fbIcon" width="6%" />
                                <Link to="/loginWithPhone" className="ml-3">Continute With Your Mobile Number</Link>
                            </div>
                        </button>
                        <button onClick={facebookHandler} className="w-75 m-1 btn btn-outline-warning colorBlack">
                            <div className="d-flex align-items-center">
                                <img src={facebookIco} style={{ float: 'left' }} alt="fbIcon" width="6%" />
                                <span className="ml-3">Continute With Your Facebook</span>
                            </div>
                        </button>
                        <button onClick={googLogInHandler} className="w-75 m-1 btn btn-outline-warning colorBlack">
                            <div className="d-flex align-items-center">
                                <img src={googleIcon} style={{ float: 'left' }} alt="fbIcon" width="6%" />
                                <span className="ml-3">Continute With Google</span>
                            </div>
                        </button>
                        <button className="w-75 m-1 btn btn-outline-warning colorBlack">
                            <div className="d-flex align-items-center">
                                <img src={envelopIco} style={{ float: 'left' }} alt="fbIcon" width="6%" />
                                <span className="ml-3">Continute With Email</span>
                            </div>
                        </button>
                        <h6 className="mt-5">By Continuing, You Agree To Out <Link>Terms of Service & Policy</Link></h6>
                    </div>
                    <div className="col-md-6">
                        <LoginLottie />
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
};

export default LoginPage;
