import React from "react";
import "./Navbar.css";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { BiLogoPinterest } from "react-icons/bi";
import profile from "../../assets/profile.jpg";
const Navbar = () => {
  return (
    <div>
      <div className=" w-full h-[50px] flex items-center justify-between bg-gray-200 px-16">
        <div className="flex space-x-3">
          <AiFillGithub />
          <AiFillFacebook />
          <BiLogoPinterest />
        </div>

        <div>
          <div className="space-x-8 uppercase font-medium ">
            <a href="/">home</a>
            <a href="/about">about</a>
            <a href="#">contact</a>
            <a href="/write">write</a>
            <a href="#">logout</a>
          </div>
        </div>

        <div className="flex space-x-2">
          <a href="/profile">
            <img
              className="w-8 object-center rounded-full"
              src={profile}
              alt=""
            />
          </a>
          <input className="px-3 rounded-sm" type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
