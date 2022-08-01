const InputBlog = () => {
    return (
        <div>
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Content</label>
            <form>
                <div className="mb-4 w-2/3 bg-gray-50 rounded-lg border border-gray-200">
                        <label htmlFor="editor" className="sr-only">Publish post</label>
                        <textarea id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                    Create
                </button>
            </form>
        </div>
    )
}

export default InputBlog