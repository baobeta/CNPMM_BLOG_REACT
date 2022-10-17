import React from 'react';
import {
    Link,
   } from "react-router-dom";
function About () {
    return (
    <div className="flex flex-col h-[600px] w-[800px] mx-auto bg-white rounded-lg border shadow-md mt-20">
        <Link className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-[150px]" to = {`/`} > 👈 Home</Link>
        <h1 className="mx-auto font-bold text-xl" >Thông Báo</h1>
        <h2 className="mx-4">Không có gì trang này đâu</h2>
        <h3 className="mx-4">Khi sửa hoặc xem đừng có load lại trang, nó mất hết dữ liệu rồi đó</h3>
        <h3 className="mx-4">Bạn gì đó đẹp trai hay xinh gái gì ơi, chấm nhẹ tay hộ mình 🥰🥰🥰</h3>
        <h3 className="mx-4 mb-4">Mình mới học react trong 1 ngày thôi 😭😭😭😭</h3>
    </div>
    )
}
export default About;