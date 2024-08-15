import React from "react";
import "./postCard.scss";

const PostCard = ({ dataArray }) => {
  return (
    <>
      {dataArray.map((item, index) => {
        return (
          <div className="cardContainer" key={index}>
            <img src={item.img} alt="" className="imgBg" />
            <div className="itemInfo">
              <h1>
                {item.name} <img src={item.flag} alt="" />
              </h1>
              <p>{item.amount}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostCard;
