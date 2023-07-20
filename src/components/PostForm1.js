import React, { useEffect, useState } from 'react'

export const PostForm1 = () => {
    const[userId,setUserId]=useState('')
    const[title,setTitle]=useState('')
    const[body,setBody]=useState('')
    const submitHandler=e=>{
       e.preventDefault()
       fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title:title,
            body:body,
            userId:userId
        }),headers:{
            'Content-type':'application/json;charset=UTF-8'
        }
       }).then(response=>response.json())
       .then(json=>console.log(json))
    }
    return (
        <form onSubmit={submitHandler}>
        <div>
            <lable>Id</lable>
            <input type='text' value={userId} onChange={e=>setUserId(e.target.value)}/>
        </div>
        <div>
            <lable>Title</lable>
            <input type='text' value={title} onChange={e=>setTitle(e.target.value)}/>
        </div>
        <div>
            <lable>Body</lable>
            <input type='text' value={body} onChange={e=>setBody(e.target.value)}/>
        </div>
        <button>Submit</button>
        </form>
    )
}
