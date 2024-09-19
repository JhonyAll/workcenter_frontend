// components/Post.tsx

import React from 'react';

interface PostProps {
    author: string;
    content: string;
    date: string;
}

const Post: React.FC<PostProps> = ({ author, content, date }) => {
    return (
        <div className="p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-start space-x-4">
                <img
                    src="https://i.pinimg.com/736x/7f/82/f7/7f82f707bfed9261af0cfa7775a3b219.jpg"
                    alt={author}
                    className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600"
                />
                <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{author}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{date}</p>
                    <p className="mt-2 text-gray-800 dark:text-gray-200">{content}</p>
                </div>
            </div>
        </div>
    );
};

export default Post;
