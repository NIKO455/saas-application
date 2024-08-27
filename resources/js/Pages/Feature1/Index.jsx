import React from 'react';
import {useForm} from "@inertiajs/react";
import Feature from "@/Components/Feature.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

const Index = ({feature, answer}) => {

    const {data, setData, post, reset, errors, processing} = useForm({
        number1: "",
        number2: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("feature1.store"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <Feature feature={feature} answer={answer}>
            <form onSubmit={submit}>
                <div>
                    <input
                        type="text"
                        name="number1"
                        value={data.number1}
                        onChange={(e) => setData("number1", e.target.value)}
                        className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="number2"
                        value={data.number2}
                        onChange={(e) => setData("number2", e.target.value)}
                        className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                    />
                </div>
                <PrimaryButton className="mt-4" disabled={processing}>Submit</PrimaryButton>
            </form>
        </Feature>
    );
};

export default Index;
