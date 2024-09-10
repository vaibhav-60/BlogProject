import React from 'react';
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return (
            <div className="min-h-screen bg-zinc-500 overflow-hidden">
                <Appbar />
                <div className="pt-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-500 p-4">
            <Appbar />
            <div className="pt-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
                <div className="">
                    {blogs.map(blog => (
                        <BlogCard
                            key={blog.id}
                            id={blog.id}
                            authorName={blog.author.name || ""}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={"2.20.2323"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}