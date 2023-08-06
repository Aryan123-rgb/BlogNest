import "./App.css";
import { Route, Routes } from "react-router-dom";
import Authentication from "./Pages/Authentication";
import Navbar from "./components/Navbar";
import BlogPage from "./Pages/BlogPage";
import { UserProvider } from "./Context/ChatProvider";
import CreateBlog from "./Pages/CreateBlog";
import SingleBlogPage from "./Pages/SingleBlogPage";

function App() {
  return (
    <div style={{ backgroundColor: "#0f0f3e", minHeight: "100vh" }}>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogPage />}></Route>
          <Route path="/auth" element={<Authentication />}></Route>
          <Route path="/create" element={<CreateBlog />}></Route>
          <Route path="/blog/:id" element={<SingleBlogPage/>}></Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
