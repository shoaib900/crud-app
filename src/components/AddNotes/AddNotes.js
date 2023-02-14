import React from "react";
import style from "./addnotes.module.css";

const AddNotes = ({ data, setData, records, setRecords,handleImage }) => {
  // const handleTitle = (e) => {
  //   setTitle({ e.target.value });
  //   console.log(title);
  // };
  // const handleDescription = (e) => {
  //   setDescription(e.target.value);
  //   console.log(description);
  // };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("value",value);

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecords = { ...data, id: new Date().getTime() };
    setRecords([...records, newRecords]);
    setData({title:"",description:"",image:""})
  };

  return (
    <div className={style.addnotes}>
      <h1>Add Note</h1>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            id="title"
            placeholder="Enter the title here"
          />
        </label>
        <label htmlFor="descriptions">
          Description:
          <textarea
            value={data.description}
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
            defaultValue={data.image}
            onChange={handleImage}
            accept="image/png, image/gif, image/jpeg, image/jpg"
          />
        </label>
        <div className={style.btnDiv}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddNotes;
