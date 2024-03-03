import React, { useState } from "react";
import "./main.css";
const YourComponent = () => {
  const str = "이거는 견적";

  return (
    <div className="main">
      <div className="header">여백</div>
      <div className="middle">
        <div className="visual">아무튼 인테리어 들어갈 공간</div>
        <div className="user">
          <div className="menue">
            <button className="Category">Category1</button>
            <h2 className="itemsC1">
              {/* Category 1 items */}
              <button className="item">item 1</button>
              <button className="item">item 2</button>
              <button className="item">item 3</button>
              <button className="item">item 4</button>
            </h2>
            <button className="Category">Category2</button>
            <h2 className="itemsC2">
              {/* Category 2 items */}
              <button className="item">item 1</button>
              <button className="item">item 2</button>
              <button className="item">item 3</button>
              <button className="item">item 4</button>
            </h2>{" "}
            <button className="Category">Category3</button>
            <h2 className="itemsC3">
              {/* Category 3 items */}
              <button className="item">item 1</button>
              <button className="item">item 2</button>
              <button className="item">item 3</button>
              <button className="item">item 4</button>
            </h2>
          </div>
          <div className="estimate">{str}</div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
