import React, { useState } from "react";
import "./hotelsList.scss";
import Navbar from "../components/Navbar";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import SearchItem from "../components/SearchItem";

const HotelsList = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dates, setDates] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);
  const [openConditions, setOpenConditions] = useState(false);
  const [conditions, setConditions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleCounter = (name, sign) => {
    //導入得變數name是判斷adult,children還是room哪一個要加減
    //並用sign來判斷是加還是剪
    //用setConditions進來 上傳condition的數量
    setConditions((prev) => {
      //previous的縮寫
      return {
        ...prev, //一定要三個點，這個代表可以累加
        //adult: 1,  [adult]:value
        [name]:
          sign === "increase" ? conditions[name] + 1 : conditions[name] - 1,
      };
    });
  };
  return (
    <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <div className="searchTitle">搜尋</div>
            <div className="listItem">
              <label>目的地／住宿名稱：</label>
              <input
                type="text"
                className="searchInput"
                placeholder="要去哪裡?"
              />
            </div>
            <div className="listItem">
              <label>入住/退房日期</label>
              <span className="dates">
                <div
                  className="searchInput"
                  onClick={() => setOpenCalendar(!openCalendar)}
                >
                  {format(dates[0].startDate, "MM/dd/yyyy")} -{" "}
                  {format(dates[0].endDate, "MM/dd/yyyy")}
                </div>
                {openCalendar && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </span>
            </div>
            <div className="listItem">
              <div className="listItemLimitPrice">
                <span className="limitTitle">每晚最低價格</span>
                <input type="text" className="searchInput" />
              </div>
              <div className="listItemLimitPrice">
                <span className="limitTitle">每晚最高價格</span>
                <input type="text" className="searchInput" />
              </div>
              <div className="listItmConditions">
                <span
                  className="SearchText"
                  onClick={() => {
                    setOpenConditions(!openConditions);
                  }}
                >
                  {conditions.adult}位成人 · {conditions.children} 位小孩·{" "}
                  {conditions.room} 間房{" "}
                </span>
                {openConditions && (
                  <div className="conditionsContainer">
                    <div className="condition">
                      成人
                      <div className="conditionCounter">
                        <button
                          className="conditionCounterBtn"
                          disabled={conditions.adult <= 1}
                          onClick={() => handleCounter("adult", "decrease")}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span className="number"> {conditions.adult} </span>
                        <button
                          className="conditionCounterBtn"
                          onClick={() => handleCounter("adult", "increase")}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                    <div className="condition">
                      <span>
                        小孩
                        <p>0-17 歲</p>
                      </span>
                      <div className="conditionCounter">
                        <button
                          className="conditionCounterBtn"
                          disabled={conditions.children <= 0}
                          onClick={() => handleCounter("children", "decrease")}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span className="number"> {conditions.children} </span>
                        <button
                          className="conditionCounterBtn"
                          onClick={() => handleCounter("children", "increase")}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                    <div className="condition">
                      房間
                      <div className="conditionCounter">
                        <button
                          className="conditionCounterBtn"
                          disabled={conditions.room <= 1}
                          onClick={() => {
                            handleCounter("room", "decrease");
                          }}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span className="number"> {conditions.room} </span>
                        <button
                          className="conditionCounterBtn"
                          onClick={() => {
                            handleCounter("room", "increase");
                          }}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="listItem">
              <button className="searchbtn">搜尋</button>
            </div>
          </div>

          <div className="listResult">
            <div className="resultTitle">
              <h2>在台北找到505間房間</h2>
              <div className="map">
                <button>在地圖上顯示</button>
              </div>
            </div>
            <SearchItem active="active" />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsList;
