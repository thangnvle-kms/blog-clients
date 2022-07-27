import React, { useState, useEffect } from 'react'

import axios from 'axios';
import { useParams } from "react-router-dom";

import CommentComponent from "../comment/CommentComponent"

type DetailBlog = {
    id: number;
    content: string;
    createdAt: Date;
    
}

const DetailBlogComponent: React.FC<{}> = (props) => {
    const params = useParams();
    const [detailBlog, setDetailBlog] = useState({id:'', title:'', content:'', img:'', shortDesc:'', comment:{}});
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`http://localhost:8080/api/post/${params.id}`);
            setDetailBlog(res.data);
        }
        fetchPosts();
    }, []);
    
    return (
        <div className="card box-border rounded-lg" style={{ width: '77%' }}>
            <div className="mt-6">
                <div className=" px-10 py-6 mx-auto">
                    <div className="max-w-6xl px-10 py-6 mx-auto">
                        <div className="flex items-center justify-start mt-4 mb-4 ">
                            <a href="/#" className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4">{detailBlog.title}</a>
                        </div>
                        <a href="/#" className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-purple-500  hover:underline">
                            {detailBlog.shortDesc}
                        </a>
                        <a href="/#_" className="">
                            <img className="object-cover w-full shadow-sm h-full w-2/4 m-auto" src={detailBlog.img} alt="" />
                        </a>
                        <div className="max-w-4xl px-10  mx-auto mt-4 rounded">
                            <div>
                                <p className="mt-2 p-8"> {detailBlog.content}</p>
                            </div>
                        </div>
                    </div>
                    <CommentComponent  {...detailBlog.comment}/>
                </div>
            </div>
        </div>
    )
};

export default DetailBlogComponent;

