import React from "react";
import "./Profile.css";
import Sidebar from "../../components/Sidebar/Sidebar";
const Profile = () => {
  return (
    <div className=" w-full h-full px-10">
      <div className="grid grid-cols-6 gap-10">
        <div className="col-span-4 mt-4">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="capitalize text-xl font-medium">
                update your account
              </h1>
              <p className="capitalize bg-pink-500 text-white px-4 py-1">
                delete account
              </p>
            </div>
            <div className=" w-full h-full flex items-center justify-center">
              <form action="" className="flex flex-col">
                <label htmlFor="">username</label>
                <input type="text" placeholder="username" />
                <label htmlFor="">email</label>
                <input type="email" placeholder="youremail@gmail.com" />
                <label htmlFor="">password</label>
                <input type="password" placeholder="password" />
                <label htmlFor="">Profile pic</label>
                <input type="text" placeholder="paste image URL" />
                <button className="btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-2 ">
          <div className="sidebar px-10">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
