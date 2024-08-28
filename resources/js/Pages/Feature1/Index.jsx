import React from "react";
import { useForm } from "@inertiajs/react";
import Feature from "@/Components/Feature.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

const Index = ({ feature, answer }) => {
    const { data, setData, post, reset, errors, processing } = useForm({
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
            <form onSubmit={submit} className="pt-10 pb-10 pr-2 pl-2">
                <div className="flex gap-20">
                    <div className="flex flex-col w-full">
                        <label htmlFor="number1">First Number</label>
                        <input
                            type="text"
                            name="number1"
                            id="number2"
                            value={data.number1}
                            onChange={(e) => setData("number1", e.target.value)}
                            className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="number2">Second Number</label>
                        <input
                            type="text"
                            name="number2"
                            id="number2"
                            value={data.number2}
                            onChange={(e) => setData("number2", e.target.value)}
                            className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm w-full"
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <PrimaryButton className="mt-4" disabled={processing}>
                        Calculate
                    </PrimaryButton>
                </div>
            </form>
        </Feature>
    );
};

export default Index;
