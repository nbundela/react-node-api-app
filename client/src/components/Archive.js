import React,{useContext} from 'react';
import './Archive.scss';
import {ListContext} from './App';

const Archive = () => {
    console.log("Archive component");
    console.log("-----------")
    const {fetchArchiveAPI,classname,label} = useContext(ListContext);
    return (
        <div className="archive">
            <button className={classname} onClick={fetchArchiveAPI}>
                <span></span>{label}
            </button>
        </div>
    )
}

export default Archive
