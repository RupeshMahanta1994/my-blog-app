import React from "react";
import "./HomePage.css";
import Card from "../../components/Card/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
const HomePage = () => {
  return (
    <div className="px-10">
      HomePage
      <div className="grid grid-cols-6 gap-10">
        <div className="col-span-4 ">
          <div className="grid grid-cols-2 gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className=" col-span-2  ">
          <div className="sidebar px-10 ">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
