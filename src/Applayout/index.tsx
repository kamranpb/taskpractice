import { Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import Posts from "../pages/Posts";
import Post from "../pages/Post";
export default function AppRouting() {
  return (
    <Routes>
      <Route path="/user/:id/posts" element={<Posts />} />
      <Route path="/user/:id/posts/post/:postId" element={<Post />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
