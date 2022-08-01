import {
    Link
} from "react-router-dom";

const LeftMenuComponent = () => {
    return (
        <div className="relative">
            <div className="fixed top-25 left-6 pt-5">
                <ul>
                    <li>
                        <button className='flex-shrink-0 h-6 w-6 text-indigo-600'>
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </Link>
                        </button>
                    </li>
                    <li>
                        <Link to="/add-blog">
                            <button className='flex-shrink-0 h-6 w-6 text-indigo-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-blog">
                            <button className='flex-shrink-0 h-6 w-6 text-indigo-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                </svg>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default LeftMenuComponent