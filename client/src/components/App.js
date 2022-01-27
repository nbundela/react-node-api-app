import React, { useState, useEffect } from 'react'
import Header from './Header';
import Content from './Content';
import './App.scss';
import * as api from '../api/interview';

export const SearchContext = React.createContext(null);
export const ListContext = React.createContext(null);

const App = () => {
  console.log("App component");
  console.log("-----------")
  const [data, setdata] = useState([])
  const [classname, setclassname] = useState('btn-show-ar')
  const [show, setshow] = useState(false)
  const [label, setlabel] = useState('Show Archived')

  useEffect(() => {
    async function getData(){
      const list = await api.getList();
      setdata(list.data)
    }
    getData()
  }, []);

  const fetchArchiveAPI = async(e) => {
    e.preventDefault()
    console.log("fetchArchiveAPI")
    console.log("-----------")
    const list = await api.getArchiveList(!show);
    if(show === true) {
      setdata(list.data)
      setclassname('btn-show-ar')
      setshow(false)
      setlabel('Show Archived')
    } else{
      setdata(list.data)
      setclassname('btn-hide-ar')
      setshow(true)
      setlabel('Hide Archived')
    }
  }

  const fetchSearchAPI = async(search)  => {
    console.log("fetchSearchAPI")
    console.log("-----------")
    const list = await api.getSearchList(search, show);
    setdata(list.data)
  }

  const fetchArchiveStatusAPI = async(candidate) => {
    console.log("fetchArchiveStatusAPI")
    console.log("-----------")
    const list = await api.getArchiveStatus(candidate, show);
    setdata(list.data)
  }
  
  return (
      <div className="App">
        <SearchContext.Provider value={{
          fetchSearchAPI: fetchSearchAPI,
        }}>
          <Header />
        </SearchContext.Provider>

        <ListContext.Provider value={{
          data:data,
          fetchArchiveAPI:fetchArchiveAPI,
          classname:classname,
          label:label,
          fetchArchiveStatusAPI:fetchArchiveStatusAPI
        }}>
         <Content length={data.length}/>
        </ListContext.Provider>
      </div>
    )
}
export default App
