import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import UpdateBlog from "./components/UpdateBlog";
import PageNotFound from "./components/PageNotFound";
export default function App () {
  return (
    <div className="App flex">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path='/blog/:id' exact element={<Blog />} />
          <Route path='update/blog/:id' exact element={<UpdateBlog/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}