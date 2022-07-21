import {
    Link
} from "react-router-dom";

function PostComponent({ posts }: { posts: any }) {
    return (
        <div>
            {
                posts.map((item: any, key: any) => (
                    <div key={item.id} className="card box-border border-2 rounded-lg" style={{ width: '77%' }}>
                        <Link to={`/detail/${key + 1}`}><h2 className="font-bold">{item.title}</h2></Link>
                        <div className='flex '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg> <h5 className="italic">Date time: {item.createdAt.slice(0, 10)}</h5>
                        </div>
                        <div className='flex '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg> <h5 className="italic">Author: {item.createdBy}</h5>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p>{item.shortDesc}</p>
                                <p>{item.content}</p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                    Read more
                                </button>
                            </div>
                            <div className="w-96">
                                <img src={item.img} alt="img" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default PostComponent