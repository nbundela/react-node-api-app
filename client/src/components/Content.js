import React from 'react';
import Archive from './Archive';
import List from './List';

const Content = ({length}) => {
  console.log("content component");
  console.log("-----------")
  return (
    <>
       <div className="content">
          <div className="left">
            <h1>Interview Requests</h1>
            <h3>There are {length} candidates in the list</h3>
          </div>
          <Archive/>
          <List />
        </div>
      </>
  )
}

export default Content
