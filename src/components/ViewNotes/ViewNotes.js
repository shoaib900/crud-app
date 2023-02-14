import React from "react";
import style from "./viewnotes.module.css";
import { useNavigate, Link } from "react-router-dom";


const ViewNotes = ({records }) => {
  const navigate = useNavigate();

  const handleEdit=(id,)=>{
    console.log(id)
  }

  const handleDelete = (id) => {
    const index = records
      .map((e) => {
        return e.id;
      })
      .indexOf(id);
    records.splice(index, 1);
    navigate("/");
  };

  return (
    <div className={style.viewnotes}>
      <h1>ViewNotes</h1>
      <div className={style.cardSection}>
        {records && records.length > 0
          ? records.map((item, index) => {
              return (
                <div key={index} className={style.card}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <img src={item.image} alt="" style={{width:'100%'}} />
                  <div>
                    <Link to={`/editNotes/${item.id}`}>
                      <button onClick={() => handleEdit(item.id)}>EDIT</button>
                    </Link>
                    <button onClick={() => handleDelete(item.id)}>
                      DELETE
                    </button>
                  </div>
                </div>
              );
            })
          : "no data available"}
      </div>
    </div>
  );
};

export default ViewNotes;
