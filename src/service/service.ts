import axios from 'axios';
import {Category, Post, Comment} from '../components/model/Module';

const BASE_URL = "http://localhost:8080/api";

export const getCategory = async () => {
    const res = await axios.get(`${BASE_URL}/category`);
    return res.data;
}

export const getPost = async () => {
    const res = await axios.get(`${BASE_URL}/post`);
    return res.data;
}

export const getPostById = async (id:string) => {
    const res = await axios.get(`${BASE_URL}/post/${id}`);
    return res.data;
}
export const createPost = async (body:Post) => {

}
export const updatePost = async (id:number, body:Post) => {

}
export const deletePost = async (id:number) => {

}


export const getComment = async () => {
    const res = await axios.get(`${BASE_URL}/comment`);
    return res.data;
}

export const createComment = async (body: Comment) => {

}
export const updateComment = async (id:number, body:Comment) => {

}
export const deleteComment = async (id:number) => {

}