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

const Header = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dates, setDates] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);

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
            <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
            <span className="searchText">3位成人，2位小孩，一間房</span>
          </div>
          <button className="searchBarBtn">搜尋</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
