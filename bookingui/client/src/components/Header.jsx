import React, { useState } from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import * as locales from "react-date-range/dist/locale";
//用它來叫出不同版本的語言翻譯，把日曆換成中文
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); //傳資料出去 與useLocation(接受資料)一起用
  const [destination, setDestination] = useState("");
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
  console.log(destination, dates, conditions);

  const handleSearchBarBtnSubmit = () => {
    navigate("/hotelsList", { state: { destination, dates, conditions } });
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">尋找下趟住宿</h1>
        <p className="headerDes">
          搜尋飯店、民宿及其他住宿類型的優惠… <br />
          Booking.com clone挑戰（為Johnny Demo使用不為盈利）
        </p>
        <div className="headerSearchBar">
          <div className="searchBarItem">
            <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
            <input
              className="searchInput"
              type="search"
              placeholder="你要去哪裡?"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="searchBarItem">
            <FontAwesomeIcon
              icon={faCalendar}
              onClick={() => setOpenCalendar(!openCalendar)}
            />
            <span
              className="searchText"
              onClick={() => setOpenCalendar(!openCalendar)}
            >
              {format(dates[0].startDate, "yyyy/MM/dd")} -{" "}
              {format(dates[0].endDate, "yyyy/MM/dd")}
            </span>
            {openCalendar && (
              <DateRange
                editableDateInputs={true} //可以讓日期被選取並輸入等等的
                onChange={(item) => setDates([item.selection])} //onChange把紀錄到的改動都紀錄到state date 裡面我們暫存器就會有選好的日期範圍，等於是輸入到暫存器
                moveRangeOnFirstSelection={false}
                className="calendar"
                ranges={dates} //才可以選範圍並範圍更改會re-render useState的date等於這是個抓取date範圍並顯示在日曆上，等於是從暫存器輸入到日曆顯示上面
                minDate={new Date()}
                // locale={locales["zhTW"]}
                //最後這邊就是語言版本使用繁體中文zhTW概念
                //就可以用到上面的import * as locales from 'react-date-range/dist/locale';
              />
            )}
          </div>
          <div className="searchBarItem">
            <FontAwesomeIcon
              icon={faPeopleGroup}
              onClick={() => {
                setOpenConditions(!openConditions);
              }}
            />
            <span
              className="searchText"
              onClick={() => {
                setOpenConditions(!openConditions);
              }}
            >
              {conditions.adult}位成人， {conditions.children}位小孩，
              {conditions.room}間房
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
          <button className="searchBarBtn" onClick={handleSearchBarBtnSubmit}>
            搜尋
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
