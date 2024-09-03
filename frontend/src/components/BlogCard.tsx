import React from 'react';
import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
}: BlogCardProps) => {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-700 dark:border-gray-700 mb-6">
            <div className="p-5 flex flex-col h-full">
                <div className="mb-3 flex items-center">
                    <Avatar name={authorName} />
                    <div className="ml-3 font-light text-xs text-white">
                        {authorName}
                    </div>
                    <div className="font-thin mx-1 text-xs text-white">
                        &#11046;
                    </div>
                    <div className="font-extralight text-slate-200">
                        {publishedDate}
                    </div>
                </div>
                <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                    {title}
                </h2>
                <p className="font-normal text-sm text-gray-700 dark:text-gray-400 line-clamp-3 flex-grow">
                    {content}
                </p>
                <div className="mt-4 flex justify-between items-center">
                    <Link to={`/blog/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                    <div className="text-xs font-thin text-white">
                        {`${Math.ceil(content.length/150)} Minutes Read`}
                    </div>
                </div>
            </div>
        </div>
    )
}


export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
            {name[0]}
        </span>
    </div>
}