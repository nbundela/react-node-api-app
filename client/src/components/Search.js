import React,{useContext} from 'react'
import search from '../images/search.svg';
import {SearchContext} from './App'

const Search = () => {
    console.log("Search component");
    console.log("-----------")
    const {fetchSearchAPI} = useContext(SearchContext);
    const handleChange = (e) => {
        console.log("handleChange")
        console.log("-----------")
        fetchSearchAPI(e.target.value)
    }
    return (
        <div className="search left">
                <input type='text' placeholder="Search" onChange={handleChange} />
                <span>
                    <img src={search} alt="search"  className="searchImg"/>
                </span>
        </div>
    )
}

export default Search
