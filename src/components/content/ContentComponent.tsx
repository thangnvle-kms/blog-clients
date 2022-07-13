import DetailBlogComponent from '../detail_blog/DetailBlogComponent';
import ListBlogComponent from '../list-blog/ListBlogComponent';
import './ContentStyle.css';

const topicsBlog = [
    {
        name: 'Front-end',
    },
    {
        name: 'Back-end',
    },
    {
        name: 'Fullstack',
    },

]
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
                            topicsBlog.map((item, key) => (
                                <button key = {key}className={`bg-transparent hover:bg-cyan-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}>
                                    {item.name}
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