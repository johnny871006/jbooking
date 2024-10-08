import React from "react";
import "./feature.scss";
import Categories from "../subComponents/Categories";
import { CategoriesType, CategoriesCities, PopularHotelsData } from "../data";
import PostCards from "../subComponents/PostCards";
import PopularHotels from "../subComponents/PopularHotels";

const Feature = () => {
  return (
    <div className="feature">
      <div className="container">
        <div className="listTitle">
          <h2>依住宿類型瀏覽</h2>
        </div>
        <div className="listItems">
          <Categories dataArray={CategoriesType} />
        </div>
        <div className="listItems">
          <PostCards />
        </div>
        <div className="listTitle">
          <h3>探索台灣</h3>
          <p>這些熱門目的地魅力無窮，等你來體驗！</p>
        </div>
        <div className="listItems">
          <Categories dataArray={CategoriesCities} />
        </div>
        <div className="listTitle">
          <h2>人氣民宿、公寓類型住宿</h2>
        </div>
        <div className="listItems">
          <PopularHotels dataArray={PopularHotelsData} />
        </div>
      </div>
    </div>
  );
};

export default Feature;
