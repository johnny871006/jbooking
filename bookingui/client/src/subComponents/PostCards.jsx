import React from "react";
import "./postCards.scss";
import { Attractions } from "../data";
import PostCard from "./PostCard";

const PostCards = () => {
  return (
    <div className="postCards">
      <div className="line">
        <PostCard dataArray={Attractions.slice(0, 2)} />
      </div>
      <div className="line">
        <PostCard dataArray={Attractions.slice(2, 5)} />
      </div>
    </div>
  );
};

export default PostCards;
