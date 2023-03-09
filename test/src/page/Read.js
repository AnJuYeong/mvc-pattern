import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const Read = () => {
    const params = useParams();
    const [item, setItem] = useState({});
    // 게시글 하나 보여주기 위해 게시글 id를 주소 params로 받아온다.
    const id = params.id;

    const nav = useNavigate();

    useEffect(() => {
      onedetail(id);
    },[])

    const onedetail = async(id) => {
      const create = await axios({
        method : "get",
        // 서버에도 똑같이 받아온 params를 넣어서 서버에 요청한다.
        url : `http://localhost:8000/board/${id}`,
      })
      setItem(create.data);
    }

    const back = () => {
      nav("/");
    }
  return (
    <div>
      <label htmlFor="">제목 : </label><div>{item.title}</div>
      <label htmlFor="">내용 : </label><div>{item.contents}</div>
      <button onClick={back}>뒤로가기</button>
    </div>
  )
}

export default Read