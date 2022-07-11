export default function ListBlogComponent() {
    return (
        <div className="card box-border border-2 rounded-lg" style={{ width: '77%' }}>
            <h2 className="font-bold">TITLE HEADING</h2>
            <div className='flex '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg> <h5 className="italic">Date time</h5>
            </div>
            <div className='flex '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg> <h5 className="italic">Author</h5>
            </div>
            <div className="flex justify-between">
                <div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Sunt in culpa qui officia deserunt </p>
                    <p>Read more</p>
                </div>
                <div className="w-96">
                    <img src="https://res.cloudinary.com/kimwy/image/upload/v1624063424/easyfrontend/lo-trinh-fe_zzhxml.png" alt="img" />
                </div>
            </div>
        </div>
    )
}