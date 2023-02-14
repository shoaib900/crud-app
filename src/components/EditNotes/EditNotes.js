import React from "react";
import style from "./editNotes.module.css";
import { useNavigate } from "react-router-dom";

const EditNotes = ({ data, setData, records, setRecords,handleImage }) => {
  const navigation = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("value",value);
    // setData({[name]: value });
  };
  console.log("records",records)

  const handleSubmit = (e) => {
    e.preventDefault();

    setRecords([...records]);
    navigation("/")
  };


  return (
    <div className={style.addnotes}>
      <h1>update Note</h1>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            value={records.title}
            onChange={handleChange}
            id="title"
            placeholder="Enter the title here"
          />
        </label>
        <label htmlFor="descriptions">
          Description:
          <textarea
            value={records.description}
            onChange={handleChange}
            name="description"
            id="descriptions"
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <label htmlFor="picture">
          Image
          <input
            type="file"
            name="image"
            defaultValue={records.image}
            onChange={handleImage}
            accept="image/png, image/gif, image/jpeg, image/jpg"
          />
        </label>
        <div className={style.btnDiv}>
          <button>update</button>
        </div>
      </form>
    </div>
  );
};

export default EditNotes;
