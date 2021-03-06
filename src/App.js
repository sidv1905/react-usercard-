import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";

import CardListContainer from "./components/CardListContainer";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(false);

  const setLoader = (loader) => {
    setloading(loader);
    console.log(loader);
  };
  const setData = (userdata) => {
    setUsers(userdata);
    console.log(users, "main app me");
  };
  return (
    <div>
      <Header getData={setData} setLoader={setLoader} />
      <CardListContainer usersFinal={users.data} loadingstate={loading} />
    </div>
  );
}

export default App;
