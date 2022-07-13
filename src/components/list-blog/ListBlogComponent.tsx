import axios from 'axios';
import React, {useState, useEffect} from 'react' 
import PaginationComponent from '../pagination/PaginationComponent';
import PostComponent from '../post/PostsComponent';


export default function ListBlogComponent() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentpage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
        }
        fetchPosts();
    },[]);
   
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumbers:any) => setCurrentpage(pageNumbers);

    return (
        <div>
            <PostComponent posts={currentPosts}/>
            <PaginationComponent postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
    )
}