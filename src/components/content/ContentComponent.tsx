import ListBlogComponent from '../list-blog/ListBlogComponent';
import React, { useState, useEffect } from 'react'
import './ContentStyle.css';
import axios from 'axios';
import RightMenuComponent from '../menu/RightMenuComponent';


function ContentComponent() {
    const [category, setCategory] = useState<[]>([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:8080/api/category');
            setCategory(res.data);
        }
        fetchPosts();
    }, []);

    return (
        <div>
            <div className="row">
                <div className="leftcolumn">
                    <ListBlogComponent />
                </div>
                <RightMenuComponent data={category} />
            </div>
        </div>
    )
}

export default ContentComponent;