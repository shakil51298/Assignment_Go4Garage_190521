import React from 'react';
import firebase from "firebase/app";
import { toast, ToastContainer } from 'react-toastify';

const LoginWithPhoneNumber = () => {
    const setUpRecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',
            {
                'size': 'invisible',
                'callback': (response) => {

                },
                'expired-callback': () => {

                }
            });
    }
    const onsubmit = (e) => {
        e.preventDefault()
        setUpRecaptcha()
        const phoneNumber = "+8618579191038";
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                const code = window.prompt("Enter OTP");
                confirmationResult.confirm(code).then((result) => {
                    const user = result.user;
                    console.log("Logged in user", user); // user data
                }).catch((error) => {
                    toast.error(error, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });

            }).catch((error) => {

            });
    }

    return (
        <div className="container centered">
            <h3 className="text-uppercase">Login</h3>
            <form onSubmit={onsubmit}>
                <div id="recaptcha-container"></div>
                <div class="mb-3">
                    <label for="PhoneNumber" class="form-label">Phone Number</label>
                    <input type="tel" class="form-control w-25" id="PhoneNumber" placeholder="+8618579191038" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
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

export default LoginWithPhoneNumber;