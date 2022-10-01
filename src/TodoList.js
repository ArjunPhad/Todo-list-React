import React from 'react'
import './App.css';
import { useState } from 'react';



function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    //   setlistData([])
    // }
    // console.log(listData)

    setlistData((listData) => {
      const updatedList = [...listData, activity]
      console.log(updatedList);
      setActivity('');
      return updatedList
    })
  }
  function removeall() {
    setlistData([])
  }
  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i != id;
    })
    setlistData(updatedListData);
  }
  return (
    <>
      <div className='container'>
        <div className="header">TODO LIST</div>
        <input type="text" placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
        <button onClick={addActivity}>Add</button>
        <p className='List-heading'> Here is Your list :- </p>
        {listData != [] && listData.map((data, i) => {
          return (
            <>
              <p key={i}>
                <div className='listData'>{data}</div>
                <div className='button-position'><button onClick={()=>removeActivity(i)}> Remove (-)</button></div>
              </p>
            </>
          )
        })}
        <div>
          {listData.length >= 1 && <button onClick={removeall} >Remove All</button>}

        </div>
      </div>
    </>
  )
}
export default TodoList;
