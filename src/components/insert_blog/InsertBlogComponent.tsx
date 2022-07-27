import { useState, useEffect } from "react";

import InputBlog from "./InputBlog";

const InsertBlogComponent = () => {

    const [title, setTitle] = useState('');

    useEffect(() => {
        document.title = title
    })

    return (
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center md:gap-28 gap-16">
            <div className="mb-6">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                <input 
                value={title} onChange ={ e => setTitle(e.target.value) }
                type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <InputBlog />
        </div>
    )
}
export default InsertBlogComponent