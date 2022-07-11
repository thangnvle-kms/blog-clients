import ListBlogComponent from '../list-blog/ListBlogComponent';
import './ContentStyle.css';

const topicsBlog = ["Front-end", "Back-end", "Fullstack"]

function ContentComponent() {
    return (
        <div>
            <div className="row">
                <div className="leftcolumn">
                    <ListBlogComponent />
                </div>
                <div className="rightcolumn">
                    <div className="card">
                        {
                            topicsBlog.map(item => (
                                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                                    {item}
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentComponent;