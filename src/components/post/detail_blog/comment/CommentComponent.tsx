const CommentComponent = () => {
    
    const isDisplayCommentChild = () => {

    }

    return (
        <div className="">
            <p className="mt-1 text-2xl font-bold text-left text-gray-800">
                All comments on this post
            </p>
            <div className="flex w-full px-6 py-6 mx-auto mt-10 bg-white border rounded-lg">
                <a href="/#" className="flex"><img src="https://avatars.githubusercontent.com/u/71964085?v=4" alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                </a>
                <div>
                    <p className="text-sm font-bold text-gray-300">August 22,2021</p>
                    <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        Please help with how you did the migrations for the blog database fields.I tried mine using exactly what you instructed but its not working!!.</p>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-28" onClick={isDisplayCommentChild}>
                        Reply
                    </button>
                    <div className="ml-10 mt-3 bg-white border rounded-lg">
                        <div className="ml-10 mt-3 bg-white border rounded-lg">
                            <p className="text-sm font-bold text-gray-300">August 22,2021</p>
                            <p className="text-base text-gray-600 sm:text-lg md:text-normal">
                                Comment 1</p>
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-28" onClick={isDisplayCommentChild}>
                                Reply
                            </button>
                        </div>
                        <div className="ml-10 mt-3 bg-white border rounded-lg">
                            <p className="text-sm font-bold text-gray-300">August 22,2021</p>
                            <p className="text-base text-gray-600 sm:text-lg md:text-normal">
                                Comment 2</p>
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-28" onClick={isDisplayCommentChild}>
                                Reply
                            </button>
                        </div>
                        <div className="ml-10 mt-3 bg-white border rounded-lg">
                            <p className="text-sm font-bold text-gray-300">August 22,2021</p>
                            <p className="text-base text-gray-600 sm:text-lg md:text-normal">
                                Comment 3</p>
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-28" onClick={isDisplayCommentChild}>
                                Reply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CommentComponent;