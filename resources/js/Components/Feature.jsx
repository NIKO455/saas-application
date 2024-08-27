import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import { Head, usePage } from "@inertiajs/react";

const Feature = ({ feature, answer, children }) => {
    const { auth } = usePage().props;
    const availableCredits = auth.user.available_credits;
    const isLocked =
        availableCredits !== null &&
        feature.required_credits > availableCredits;

    return (
        <Authenticated user={auth.user} header={feature.name}>
            <Head title={"Feature 1"} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                {answer !== null && (
                    <div className="bg-green-600 p-2 mb-2 rounded text-white">
                        Answer: {answer}
                    </div>
                )}
                <div>
                    {availableCredits !== null && isLocked && (
                        <div className="text-red-400 font-semibold">
                            You have {availableCredits} credits left!
                        </div>
                    )}
                    <div className="flex justify-between">
                        <p>{feature.description}</p>
                        <p>Requires {feature.required_credits} credits</p>
                    </div>
                    <div
                        className={`mt-6 rounded relative ${
                            isLocked ? "bg-gray-300" : "bg-gray-300"
                        }`}
                    >
                        {isLocked && (
                            <div className="absolute w-full h-full flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                    />
                                </svg>
                                <a href="#" className="mt-2">
                                    Buy Credits
                                </a>
                            </div>
                        )}
                        <div
                            className={`${
                                isLocked
                                    ? "pointer-events-none  opacity-30"
                                    : ""
                            }`}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Feature;
