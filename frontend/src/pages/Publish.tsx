import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    return <div className="bg-zinc-500 min-h-screen">
        <Appbar />
        <div className="pt-16">
            <div className="flex justify-center w-full pt-8"> 
                <div className="max-w-screen-lg w-full">
                    <input 
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }} 
                        type="text" 
                        className="w-full bg-gray-50 border border-orange-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" 
                        placeholder="Title" 
                    />
                    <TextEditor onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                    <button 
                        onClick={async () => {
                            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                                title,
                                content: description
                            }, {
                                headers: {
                                    Authorization: localStorage.getItem("token")
                                }
                            });
                            navigate(`/blog/${response.data.id}`)
                        }} 
                        type="submit" 
                        className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-orange-700 rounded-lg focus:ring-4 focus:ring-orange-200 dark:focus:ring-orange-900 hover:bg-orange-800 display"
                    >
                        Publish post
                    </button>
                </div>
            </div>
        </div>
    </div>
}

function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return <div className="mt-2">
        <div className="w-full mb-4">
            <div className="flex items-center justify-between border">
                <div className="my-2 bg-white rounded-b-lg w-full">
                    <label className="sr-only">Publish post</label>
                    <textarea 
                        onChange={onChange} 
                        id="editor" 
                        rows={8} 
                        className="focus:outline-none focus:ring-2 focus:ring-orange-500 block w-full px-0 text-sm text-gray-800 border-0 pl-2" 
                        placeholder="Write an article..." 
                        required 
                    />
                </div>
            </div>
        </div>
    </div>
}