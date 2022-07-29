import {useState, useEffect} from 'react'

import axios from 'axios';

import PaginationComponent from '../pagination/PaginationComponent';
import PostComponent from '../post/PostsComponent';

const ListBlogComponent = () => {
    
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentpage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const isStatus = true;

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:8080/api/post');
            setPosts(res.data);
        }
        fetchPosts();
    },[]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumbers:number) => setCurrentpage(pageNumbers);

    return (
        <div>
            <PostComponent posts={currentPosts} status = {isStatus}/>
            <PaginationComponent postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
    )
}

export default ListBlogComponent