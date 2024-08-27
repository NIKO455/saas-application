import React from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, usePage} from "@inertiajs/react";

const Feature = ({feature, answer, children}) => {
    const {auth} = usePage().props;
    const availableCredits = auth.user.available_credits;
    return (
        <Authenticated user={auth.user} header={feature.name}>
            <Head title={"Feature 1"}/>

            <div>
                {
                    answer !== null && (
                        <>
                            Answer: {answer}
                        </>
                    )
                }
                <div>
                    {
                        availableCredits !== null && feature.required_credits > availableCredits && (
                            <>
                                You have {availableCredits} credits (locked)
                            </>
                        )
                    }
                    <div>
                        <p>
                            {feature.description}
                        </p>
                        <p>
                            Requires {feature.required_credits} credits
                        </p>
                    </div>
                    {children}
                </div>
            </div>

        </Authenticated>
    );
};

export default Feature;
