import React from "react";
import "./Sidebar.css";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import aboutPic from "../../assets/card.jpg";
import { BiLogoPinterest } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar__subheadings">
        <h1>about me</h1>
      </div>
      <div className="w-full h-[350px]">
        <img className="w-full h-full object-cover" src={aboutPic} alt="" />
      </div>
      <div className="my-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          eligendi mollitia ad, asperiores voluptate molestiae iste incidunt
          quia eaque illum minima eveniet! Earum vel debitis blanditiis dolor,
          perferendis iure porro!
        </p>
      </div>
      <div className="sidebar__subheadings">
        <h1>categories</h1>
      </div>
      <div>
        <span>life</span>
        <span>sport</span>
        <span>tech</span>
        <span>music</span>
        <span>styel</span>
        <span>cinema</span>
      </div>
      <div className="sidebar__subheadings">
        <h1>follow us</h1>
      </div>
      <div
        className="flex space-x-3 text-2xl items-center
            justify-center"
      >
        <AiFillGithub />
        <AiFillFacebook />
        <BiLogoPinterest />
      </div>
    </div>
  );
};

export default Sidebar;
