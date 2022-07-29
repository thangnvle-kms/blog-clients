import { useNavigate } from "react-router-dom";

const commonCSS = 'w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'

const LoginComponent = () => {
    const navigate = useNavigate();
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        navigate('/home');
    }
    return (
        <div className="flex justify-center flex-col-reverse">
            <div className="flex items-center bg-white dark:bg-gray-900">
                <div className="container mx-auto">
                    <div className="max-w-md mx-auto my-10">
                        <div className="text-center">
                            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
                        </div>
                        <div className="m-7">
                            <form
                                // ref={ }
                                // onSubmit={(e: React.SyntheticEvent) => {
                                //     e.preventDefault();
                                //     const target = e.target as typeof e.target & {
                                //         email: { value: string };
                                //         password: { value: string };
                                //     };
                                //     const email = target.email.value;
                                //     const password = target.password.value;
                                // }}
                                onSubmit={(event) => handleFormSubmit(event)}
                            >
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="you@company.com" className={commonCSS} />
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="Your Password" className={commonCSS} />
                                </div>
                                <div className="mb-6">
                                    <button type="button" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginComponent