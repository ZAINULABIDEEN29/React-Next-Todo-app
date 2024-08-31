"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [mainTask, setMain] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMain([...mainTask, { title, des }])

    setTitle("")
    setDes("")
    console.log(mainTask)
  }
  
  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1);
    setMain(copyTask);
  }

  let renderTask = <h2>No Task Availible</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex justify-between mb-5 w-2/3 mb-8 '>
            <h5 className='text-xl font-semibold' >{t.title}</h5>
            <h5 className='text-lg font-medium' >{t.des}</h5>
          </div>
          <button onClick={()=>{
            deleteHandler(i)
          }} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
      );
    });
  }


  return (
    <>
      <h1 className='bg-black text-white text-xl font-bold text-center p-5'>Zain's Todo list</h1>
      <form onSubmit={submitHandler} >
        <input type="text" className='text-black focus-auto  text-2xl border-zinc-800 border-4 rounded-md m-5 px-4 py-2' placeholder='Enter task Here' value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <input type="text" className='text-black  text-2xl border-zinc-800 border-4 rounded-md m-5 px-4 py-2' placeholder='Enter Description Here' value={des} onChange={(e) => { setDes(e.target.value) }} />
        <button className='bg-black  text-white  px-4 py-2 text-2xl font-bold rounded-md m-5'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>{renderTask}</ul>
      </div>

    </>
  )
}

export default page
