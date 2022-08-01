import {
    Route, Routes
} from "react-router-dom";

import ContentComponent from "../components/content/ContentComponent";
import DetailBlogComponent from "../components/post/detail_blog/DetailBlogComponent";
import InsertBlogComponent from "../components/insert_blog/InsertBlogComponent";
import LoginComponent from "../components/login/LoginComponent";
import MyBlogComponent from "../components/my-blog/MyBlogComponent";
import { Post } from "../components/model/Module";

const RouteComponent = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ContentComponent />}>  </Route>

                <Route path="/add-blog" element={<InsertBlogComponent />}>  </Route>

                <Route path="/detail/:id" element={<DetailBlogComponent />}>  </Route>

                <Route path="/my-blog" element={<MyBlogComponent />}>  </Route>

                <Route path="/login" element={<LoginComponent />}>  </Route>
            </Routes>
        </div>
    )
}

export default RouteComponent