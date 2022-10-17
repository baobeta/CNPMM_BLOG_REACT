import {
 Link,
} from "react-router-dom";
import {  useDispatch } from "react-redux";
import { removeBlog } from '../redux/blogRedux'
function RedirectBlog ({blog}) {
  let id = blog.id;
  const dispatch = useDispatch();
  const onClickRemove = () => {
    dispatch(removeBlog(id));
  }
    return <div className="flex">
          <div className="flex-1 w-64  px-2">
          😎 <Link to = {`/blog/${blog.id}`} >{blog.title}</Link>
          </div>
          <div className="flex-none px-2">
            <span><Link to = {`/blog/${blog.id}`} >🖐Xem</Link></span>
          </div>
          <div className="flex-none px-2">
            <span><Link to = {`update/blog/${blog.id}`}> 👉Sửa</Link></span>
          </div>
          <div className="flex-none px-2">
            <span><button onClick={onClickRemove} >🙏Xóa</button></span>
          </div>
    </div>
}

export default RedirectBlog;