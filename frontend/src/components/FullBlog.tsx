import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    console.log("Date and time: ", blog.createdAt);
    return (
        <div className="bg-zinc-200 text-gray-800 min-h-screen">
            <Appbar />
            <div className="mb-16"></div>
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
                    <div className="col-span-8">
                        <div className="text-5xl font-extrabold text-gray-900">
                            {blog.title}
                        </div>
                        <div className="text-gray-600 pt-2">
                            Posted on {new Date(String(blog.createdAt)).toLocaleDateString()}
                        </div>
                        <div className="pt-4">
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="text-gray-700 text-lg">
                            Author
                        </div>
                        <div className="flex w-full">
                            <div className="pr-4 flex flex-col justify-center">
                                <Avatar size="big" name={blog.author.name || "Anonymous"} />
                            </div>
                            <div>
                                <div className="text-xl font-bold text-gray-900">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-2 text-gray-600">
                                    {blog.bio}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
