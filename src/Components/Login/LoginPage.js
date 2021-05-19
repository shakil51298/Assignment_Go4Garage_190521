import React from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebase.config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    // PHONE NUMBER VERIFICAIONS
    const phoneNumberHandler = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // onSignInSubmit();
            }
        });

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
        <div className="container centered">
            <div className="row">
                <div className="col">
                    <h3>LOGIN</h3>
                    <button onClick={phoneNumberHandler} className="w-75 m-1 btn btn-outline-warning colorBlack">
                        <Link >
                            Enter Your Mobile Number
                        </Link>
                    </button>
                    <button onClick={facebookHandler} className="w-75 m-1 btn btn-outline-warning colorBlack">
                        Continute With Your Facebook
                    </button>
                    <button onClick={googLogInHandler} className="w-75 m-1 btn btn-outline-warning colorBlack">
                        Continue with Google
                    </button>
                    <button className="w-75 m-1 btn btn-outline-warning colorBlack">
                        Continue With Email
                    </button>
                </div>
                <div className="col">

                </div>
            </div>
            <div className="mt-5 text-center">
                <h6>By Continuing, You Agree To Out <Link>Terms of Service & Policy</Link></h6>
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
    );
};

export default LoginPage;
