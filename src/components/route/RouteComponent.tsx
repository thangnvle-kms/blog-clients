import {
    Route, Routes
} from "react-router-dom";
import ContentComponent from "../content/ContentComponent";
import DetailBlogComponent from "../detail_blog/DetailBlogComponent";
import InsertBlogComponent from "../insert_blog/InsertBlogComponent";
import LoginComponent from "../login/LoginComponent";
import MyBlogComponent from "../my-blog/MyBlogComponent";

export default function RouteComponent() {
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