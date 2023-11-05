import React from "react";
import cardPic from "../../assets/card.jpg";
import "./Card.css";
const Card = () => {
  return (
    <div>
      <div className="w-full h-full mb-3">
        <div className="w-full h-[250px]">
          <img
            className="w-full h-full rounded-md object-cover"
            src={cardPic}
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center justify-center gap-2">
            <span>music</span>
            <span>life</span>
          </div>
          <div className="text-center font-bold capitalize text-2xl  my-2">
            <h1>lorem ipsum dolor sit amet</h1>
          </div>
          <div className="text-center mb-2">
            <span>1 hour ago</span>
          </div>
          <div>
            <p className="text-base text-justify first-letter:font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              quibusdam dolor blanditiis maxime dolores. Perferendis iusto,
              neque laboriosam excepturi voluptates eum obcaecati sequi
              temporibus quos molestiae explicabo, tempore, eius labore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
