import React from 'react';
import style from "./sidebar.module.css";
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
        <ul className={style.ul}>
            <li><Link to="/addNotes" className={style.Link}>Add Notes</Link></li>
            <li><Link to="/" className={style.Link}>View Notes</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar