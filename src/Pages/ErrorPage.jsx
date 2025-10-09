import React from "react";
import { useRouteError, Link } from "react-router";
import errorImg from '../assets/error-404.png'

const ErrorPage = () => {
    const error = useRouteError();

    const status = error?.status || 404;
    const message =
        error?.statusText || error?.message || "Sorry, the page you are looking for does not exist.";

    return (
        <div className="flex flex-col md:flex-row md:gap-10 items-center justify-center text-center px-4">
            <div>
                <h1 className="text-6xl font-bold text-[#632EE3]">{status}</h1>
                <h2 className="text-2xl font-bold text-gray-800 mt-3">Oops! Page Not Found</h2>
                <p className="text-gray-600 mt-2 mb-6">
                    {message}
                </p>
                <Link to="/" className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:bg-[#00b97f] text-white px-6 py-2 rounded-lg transition">Go Back Home</Link>
            </div>
            <div>
                <img src={errorImg} alt="" />
            </div>

        </div>
    );
};

export default ErrorPage;
