import { useEffect, useState} from 'react' 
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/';

export const APIBlog = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${BASE_URL}/post`);
            setData(res.data);
        }
        fetchPosts();
    },[]);
    console.log(data)
}


export const APIContent = () => {
    const [content, setContent] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${BASE_URL}/content`);
            setContent(res.data);
        }
        fetchPosts();
    },[]);
    return content
}


