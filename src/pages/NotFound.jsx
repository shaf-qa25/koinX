import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MoveLeft, Home, CircleAlert } from 'lucide-react';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-white dark:bg-[#0F1629] ">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="wf-ull lg:w-1/2">
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-500 dark:text-blue-400">
                        <CircleAlert size={18} />
                        <span>404 error</span>
                    </div>

                    <h1 className="mt-3 text-3xl font-bold text-gray-800 dark:text-white md:text-5xl">
                        Lost in the Crypto Space?
                    </h1>

                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
                        Sorry, the page you are looking for has been moved or doesn't exist.
                    </p>

                    <div className="flex items-center mt-8 gap-x-3">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-xl gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 font-semibold"
                        >
                            <MoveLeft size={18} />
                            <span>Go back</span>
                        </button>

                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#0052FE] rounded-xl shrink-0 sm:w-auto hover:bg-blue-700 font-semibold gap-x-2"
                        >
                            <Home size={18} />
                            <span>Take me home</span>
                        </button>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0 flex justify-center">
                    <div className="relative">
                        <img
                            className="w-full max-w-lg lg:mx-auto animate-bounce-slow"
                            src="https://merakiui.com/images/components/illustration.svg"
                            alt="404 Illustration"
                        />
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;