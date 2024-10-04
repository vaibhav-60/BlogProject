import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@100xdevs/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Modal } from "./Modal";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });

    const [error, setError] = useState<string | null>(null);

    async function sendRequest() {
        try {
            
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/complete-profile");
        } catch (e) {
            setError("Error while signing up")
        }
    }

    return (
        <div className="h-screen flex justify-center flex-col">
            {error && <Modal message={error} onClose={() => setError(null)} />}

            <div className="flex justify-center">
                <div>
                    <div className="text-3xl font-bold">
                        {type === "signin" ? "Welcome Back, Login" : "Create an Account"}
                    </div>
                    <div className="text-slate-400">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                        <Link className="underline pl-2" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Sign Up" : "Sign In"}
                        </Link>
                    </div>
                    <div className="pt-8">
                        {type === "signup" && (
                            <LabelledInput
                                label="Name"
                                placeholder="Enter your name"
                                onChange={(e) => {
                                    setPostInputs({
                                        ...postInputs,
                                        name: e.target.value
                                    });
                                }}
                            />
                        )}
                        <LabelledInput
                            label="Email"
                            placeholder="your email"
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    username: e.target.value
                                });
                            }}
                        />
                        <LabelledInput
                            label="Password"
                            type="password"
                            placeholder="123456"
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    password: e.target.value
                                });
                            }}
                        />
                        <button
                            onClick={sendRequest}
                            type="button"
                            className="mt-6 w-full text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 focus:ring-orange-600 border-orange-700"
                        >
                            {type === "signin" ? "Sign In" : "Sign Up"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-black pt-5">{label}</label>
            <input
                onChange={onChange}
                type={type || "text"}
                className="bg-gray-50 border border-orange-300 text-gray-900 text-sm rounded-full focus:ring-orange-500 focus:border-orange-600 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}
