import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Create = () => {

    const titleInput = useRef();
    const contentsInput = useRef();
    const [boardAll, setBoardAll] =useState([]);
  
    const nav = useNavigate();
  
    const add = async() => {
      let title = titleInput.value;
      let contents = contentsInput.value;
      // 생성함수
      const create = await axios({
        method : "post",
        url : "http://localhost:8000/board/create",
        data : {
          title,
          contents
        }
      })
      if(create.data === "공백 안됨"){
        alert("공백 안됨");
      } else if(create.data){
        titleInput.current.value = "";
        contentsInput.current.value = "";
      }
    }
    useEffect(() => {
      if(boardAll.length == 0) return;
    },[boardAll]);
  
    // 게시글 전체 보여주는 함수
    const view = async() => {
      const data = await axios({
        method : "get",
        url : "http://localhost:8000/board/view",
      })
      setBoardAll(data.data);
    }
    // 게시글 하나 보여주는 함수
    const read = async(e) => {
        // console.log(e);
        // nav에 이렇게 id값을 담아서 상품이나 게시판 해당 글의 디테일 페이지 구현 가능
        nav(`${e}`,{state : {id : e}});
    }
    
    // 게시글 삭제
    const de = async(id) => {
      console.log(id);
      const del = await axios({
        method : "delete",
        url : `http://localhost:8000/board/${id}`,
      })
      console.log(del);
    }

    // 게시글 수정
    const modify = async(id) => {
      let title = titleInput.value;
      let contents = contentsInput.value;
      const update = await axios({
        method : "put",
        url : `http://localhost:8000/board/${id}`,
        data : {
          title,
          contents
        }
      })
      console.log(update);
    }
  return (
    <>
        <label htmlFor="">제목</label>
        <input ref={titleInput} onChange={(e) => titleInput.value = e.target.value}/>
        <label htmlFor="">내용</label>
        <input ref={contentsInput} onChange={(e) => contentsInput.value = e.target.value} />
        <button onClick={add}>글쓰기</button>
        <button onClick={view}>글보기</button>
        <div>
        {
        boardAll.length ? 
        boardAll.map((el) => (<div>{el.id} {el.title} <button onClick= {() => read(el.id)}>글보기</button> <button onClick={() =>modify(el.id)}>수정</button><button onClick={() => de(el.id)}>삭제</button></div>)) 
        :
        <>글 보기 눌러라</>
        }
        </div>
    </>
  )
}

export default Create