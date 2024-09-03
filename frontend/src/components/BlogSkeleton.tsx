import { Avatar } from "./BlogCard"; // Import Avatar for skeleton placeholder

export const BlogSkeleton = () => {
    return (
        <div role="status" className="animate-pulse">
            <div className="relative p-5 mb-3 flex bg-gray-200 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                {/* Avatar */}
                <div className="flex justify-center flex-col color-white">
                    <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                </div>

                {/* Author Name */}
                <div className="flex justify-center flex-col ml-3 font-light text-xs text-gray-400">
                    <div className="h-4 bg-gray-300 rounded-full w-20"></div>
                </div>

                {/* Separator */}
                <div className="flex justify-center flex-col font-thin ml-1 mr-1 text-xs text-gray-400">
                    <div className="h-4 bg-gray-300 rounded-full w-4"></div>
                </div>
                
                {/* Published Date */}
                <div className="flex justify-center flex-col font-extralight text-gray-500">
                    <div className="h-4 bg-gray-300 rounded-full w-24"></div>
                </div>
            </div>

            {/* Title */}
            <div className="mb-2 text-3xl font-semibold tracking-tight text-gray-400 dark:text-gray-600">
                <div className="h-6 bg-gray-300 rounded-full w-3/4"></div>
            </div>

            {/* Content */}
            <div className="font-normal text-gray-400 dark:text-gray-500">
                <div className="h-4 bg-gray-300 rounded-full mb-2 w-full"></div>
                <div className="h-4 bg-gray-300 rounded-full mb-2 w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded-full mb-2 w-3/4"></div>
            </div>

            {/* Read More Button */}
            <div className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-gray-300 rounded-lg cursor-not-allowed">
                <div className="h-4 bg-gray-300 rounded-full w-24"></div>
            </div>

            {/* Reading Time */}
            <div className="absolute right-3 bottom-2 mt-4 text-xs font-thin text-gray-400">
                <div className="h-4 bg-gray-300 rounded-full w-32"></div>
            </div>
            
            <span className="sr-only">Loading...</span>
        </div>
    );
}
