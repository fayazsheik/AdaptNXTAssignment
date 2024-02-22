import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Slidebar";

function App() {
  const [selectedTab, setSelectedTab] = useState("Orders");
  return (
    <>
      <Header />
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </>
  );
}

export default App;
