
import React, {useState} from 'react';
import {
  useParams, useNavigate
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateBlog } from "../redux/blogRedux";
import {
  Link,
 } from "react-router-dom";
function UpdateBlog() {
  let { id } = useParams();
  const blogsRedux = useSelector(state => state.blogs.listBlog);
  const blog = blogsRedux.find((b) => b.id.toString() === id.toString());
  const [title, setTitle] = useState(blog.title);
  const [description, setDescription] = useState(blog.description);
  const [content, setContent] = useState(blog.content);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  
  const handleSubmitComment = (e, dispatch) => {
    e.preventDefault();
    dispatch(updateBlog({id , title , description, content }));
    navigate("/");
  }
  return (
    <div className="mx-4 flex-col flex flex-col h-[600px] w-[800px] mx-auto bg-white rounded-lg border shadow-md py-4 mt-20">
     <Link className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-[150px]" to = {`/`} > 👈 Home</Link>
    <h1 className="text-center font-bold">Sửa blog tại đây</h1>
    <form id="myForm" className="px-4 py-4 my-auto" onSubmit={e => handleSubmitComment(e, dispatch)}>
      <div className="relative z-0 mb-6 w-full group">
        <input type="text" name="title" id="floating_email"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 text-black peer"
          placeholder=" " required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title
          Blog</label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input type="text" name="description" id="floating_password"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 text-black peer"
          placeholder=" " required value={description} onChange={(e) => setDescription(e.target.value)} />
        <label htmlFor="floating_password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <textarea row="4" type="text" name="content" id="floating_repeat_password" value={content} onChange={(e) => setContent(e.target.value)}
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 text-black peer"
          placeholder="Content" required></textarea>
        <label htmlFor="floating_repeat_password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content</label>
      </div>
      <button type='submit'
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  </div>
  )
}
export default UpdateBlog;