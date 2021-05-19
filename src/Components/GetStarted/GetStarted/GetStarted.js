import React from 'react';
import { Link } from 'react-router-dom';
import GetStartedLottie from '../GetStartedLottie/GetStartedLottie';

const GetStarted = () => {
    return (
        <div className="container centered">
            <div className="row mt-5">
                <div className="col bgColor">
                    <GetStartedLottie />
                </div>
                <div className="col mt-110 ml-5">
                    <div>
                        <h1>Hurry!!</h1>
                        <h4 className="text-uppercase">hunger don't wait</h4>
                    </div>
                    <div className="mt-5 ">
                        <button className="btn btn-md btn-warning w-75 m-1 ">
                            <Link to="/login" style={{ fontWeight: "700" }}>GET STARTED</Link>
                        </button>
                        <div className="div">
                            <button className="btn btn-md btn-outline-warning w-75 m-1 colorBlack">Continue Without Login</button>
                        </div>
                        <div className="div">
                            <button className="btn btn-md btn-outline-warning w-75 m-1 colorBlack">
                                <Link to="/login">
                                    Already a Tiffina Member ?
                                <span className="brandColor"> LOGIN</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;