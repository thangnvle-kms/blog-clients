export default function DetailBlogComponent() {

    const isDisplayCommentChild = () => {

    }

    return (
        <div className="card box-border rounded-lg" style={{ width: '77%' }}>
            <div className="mt-6">
                <div className=" px-10 py-6 mx-auto">
                    {/*author*/}
                    <div className="max-w-6xl px-10 py-6 mx-auto">

                        <div className="flex items-center justify-start mt-4 mb-4 ">
                            <a href="/#" className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4">Django</a>
                            <a href="/#" className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4">Python</a>
                            <a href="/#" className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500">web development</a>
                        </div>
                        <a href="/#" className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-purple-500  hover:underline">Django Authentication with oauth using facebook,twitter and google</a>
                        <a href="/#_" className="">
                            <img className="object-cover w-full shadow-sm h-full w-2/4 m-auto" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80" alt="" />
                        </a>
                        <div className="max-w-4xl px-10  mx-auto mt-4 rounded">
                            <div>
                                <p className="mt-2 p-8">If you created a web application and wanted it to grow a user base reall quickly,the easiest way is to avoid bothering them with alot forms. No one likes filling up forms! A web form should and must only be used when necessary,in case a user doesnt have account with any of the social networks.That is the moment you want to implement social login on your application.</p>
                            </div>
                        </div>
                    </div>
                    {/*related posts*/}
                    <h2 className="text-2xl mt-4 text-gray-500 font-bold text-center">Related Posts</h2>
                    <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
                        <div className="grid grid-cols-12 col-span-12 gap-7">
                            <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                <a href="/#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                    <img className="object-cover w-full shadow-sm h-full" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80" alt="" />
                                </a>
                                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                                    <div className="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                                        <span>Flask</span>
                                    </div>
                                    <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl"><a href="/#_">Oauth using facebook with flask,mysql,vuejs and tailwind css</a></h2>
                                    {/* <p class="mt-2 text-sm text-gray-500">Learn how to authenticate users to your application using facebook.</p> */}
                                </div>
                            </div>
                            <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                <a href="/#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                    <img className="object-cover w-full shadow-sm h-full" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80" alt="" />
                                </a>
                                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                                    <div className="bg-red-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                                        <span>Django</span>
                                    </div>
                                    <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl"><a href="/#_">Authenticating users with email verification in Django apps</a></h2>
                                    {/* <p class="mt-2 text-sm text-gray-500">Learn how to authenticate users to your web application by sending secure links to their email box.</p> */}
                                </div>
                            </div>
                            <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                <a href="/#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                    <img className="object-cover w-full shadow-sm h-full" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80" alt="" />
                                </a>
                                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                                    <div className="bg-purple-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                                        <span>Flask</span>
                                    </div>
                                    <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl"><a href="/#_">Creating user registration and authentication system in flask</a></h2>
                                    {/* <p class="mt-2 text-sm text-gray-500">Learn how to authenticate users to your application using flask and mysql db.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*comments*/}
                    <div className="">
                        <p className="mt-1 text-2xl font-bold text-left text-gray-800">
                            All comments on this post
                        </p>
                        {/*comment 1*/}
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

                        <div className="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
