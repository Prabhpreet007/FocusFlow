"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [mainTask, setmainTask] = useState([])



  const deleteHandler=(i)=>{
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }




  const submitHandler=(e)=>{
    e.preventDefault() 
    //this will prevent to submit form

    // console.log(title)
    // console.log(description)
    setmainTask([...mainTask,{title,description}])
    settitle("")
    setdescription("")
  }

  let renderTask=<h2>No task available</h2>

if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
    return (
      <li key={i} className='flex items-center justify-between mb-5 '><div className='flex justify-between  mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-lg font-medium'>{t.description}</h6>

    </div>
    <button 
    onClick={()=>{
      deleteHandler(i)
    }}
    className='bg-red-700 text-white px-4 py-2 rounded-xl font-bold'>Delete</button>
    </li>
    

    )
  })
}

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>FocusFlow</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' 
        placeholder='Enter Title'
        value={title}
        onChange={(e)=>{
          // console.log(e.target.value)
          settitle(e.target.value)
        }}
        >
        </input>

        <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' 
        placeholder='Enter Description'
        value={description}
        onChange={(e)=>{
          setdescription(e.target.value)
        }}
        >
        </input>

        <button className='bg-black text-white rounded-xl 
        px-4 py-2 font-bold text-center'>Submit</button>
      </form>

      <div className='p-8 bg-slate-200'>
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page
