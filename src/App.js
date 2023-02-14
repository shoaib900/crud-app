import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddNotes from "./components/AddNotes/AddNotes";
import Sidebar from "./components/Sidebar/Sidebar";
import ViewNotes from "./components/ViewNotes/ViewNotes";
import EditNotes from "./components/EditNotes/EditNotes";

const getLocalItem =() => {
 let list = localStorage.getItem("objects");
 console.log(list)
 if(list){
  return JSON.parse(localStorage.getItem("objects"))
 } else{
  return []
 }
}

const App = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [records, setRecords] = useState(getLocalItem);
  
  useEffect( () => {
    localStorage.setItem("objects",JSON.stringify(records))
  },[records])
  console.log("records",records)

  const handleImage = async (e) => {
    const name = e.target.name;
    const feel = e.target.files[0];
    var base64 = await convertBase64(feel);

    console.log("image value",base64);
    setData({ ...data, [name]: base64 });
  };
  const convertBase64 = (file) => {
    return new Promise((res, rej) => {
      var fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        res(fileReader.result);
      };

      fileReader.onerror = (error) => {
        rej("error", error);
      };
    });
  };
  // const handleImage =async (e) => {
  //   const feel = (e.target.files[0])
  //   var base64 = await convertBase64(feel);
  //   const file = ({image:base64})
  //   console.log(file);
  // }
  // const convertBase64 = (file) => {
  //   return new Promise((res, rej) => {
  //     var fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       res(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       rej("error", error);
  //     };
  //   });
  // };

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <ViewNotes
                data={data}
                setData={setData}
                records={records}
                setRecords={setRecords}
              />
            }
          />
          <Route
            path="/editNotes/:id"
            element={
              <EditNotes
                handleImage={handleImage}
                data={data}
                setData={setData}
                records={records}
                setRecords={setRecords}
              />
            }
          />
          <Route
            path="/addNotes"
            element={
              <AddNotes
                handleImage={handleImage}
                data={data}
                setData={setData}
                records={records}
                setRecords={setRecords}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
