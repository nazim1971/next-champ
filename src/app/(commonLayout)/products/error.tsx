"use client";

type TError = {
    message: string;
};

const ErrorPage = ({ error, reset }: { error: TError; reset: () => void }) => {
    return (
        <div>
            <h1 className="text-4xl text-center mt-10">Something went wrong</h1>
            <h1>Dynamic error message: {error?.message}</h1>
            <button onClick={() => reset()} className="bg-red-400 p-4 rounded-md">
                Try again
            </button>
        </div>
    );
};

export default ErrorPage;
