import React from "react";
import "./About.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import CardPic from "../../assets/card.jpg";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export const About = () => {
  return (
    <div className="px-10">
      <div className="grid grid-cols-6 gap-10">
        <div className="col-span-4 mt-4">
          <div className="w-full h-[400px]">
            <img className="w-full h-full object-cover" src={CardPic} alt="" />
            <div className="grid grid-cols-3 mt-3">
              <div></div>
              <div>
                <h1 className="text-2xl font-semibold text-center capitalize">
                  lore ipsum dolore ammet
                </h1>
              </div>
              <div className="flex items-center justify-end space-x-2 ">
                <FaEdit
                  style={{
                    fontSize: "18px",
                    color: "pink",
                    cursor: "pointer",
                  }}
                />
                <MdDelete
                  style={{
                    fontSize: "18px",
                    color: "black",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between my-4">
              <div>
                <p>
                  Autohr: <b className="capitalize">safak</b>
                </p>
              </div>
              <div>
                <p>1 day ago</p>
              </div>
            </div>
            <div>
              <p className="text-justify first-letter:font-bold first-letter:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                velit excepturi omnis porro reiciendis? Tempora fugiat
                consectetur quis dolorem reprehenderit eos ipsa labore quam, ad,
                in assumenda non sint harum! Quidem rem magni ad quis at placeat
                saepe numquam iure? Totam consequuntur praesentium deserunt
                explicabo consectetur ut illum possimus neque animi odit
                cupiditate, tempore itaque impedit perferendis cumque nesciunt
                officia. Reiciendis laboriosam at hic est dicta modi odit sunt.
                Velit eveniet laborum cum officia eius cupiditate maxime odit
                nobis animi culpa ex temporibus consequatur voluptatem quas,
                expedita cumque excepturi ipsa? Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Consequatur accusamus dolor, illum
                iusto similique incidunt. Distinctio adipisci, cupiditate, aut
                nihil error facere temporibus itaque mollitia natus repudiandae,
                id hic eos!
              </p>
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
