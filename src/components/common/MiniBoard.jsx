import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MiniBoard_wrap } from "../../styles/miniboard.styled";
import dashBoardData from "../../data/dashBoardData.json";


const MiniBoard = ({Path}) => {
    const [boardList] = useState(dashBoardData.gameDashboard);
    console.log(Path);
  return (
    <MiniBoard_wrap $path={Path}>
      <div className="pop board_list">
        <div className="board_title">
          <p>인기게임순위</p>
        </div>
        <ul className="list">
          {boardList
            .find((item) => item.type === "popularGames")
            .list.map((item) => (
              <li key={item.id}>
                <Link to="#">
                  <span className="number">{item.id}</span>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="rank board_list">
        <div className="board_title">
          <p>순위분석</p>
        </div>
        <ul className="list">
          {boardList
            .find((item) => item.type === "gameAnalysis")
            .list.map((item) => (
              <li key={item.id}>
                <Link to="#">
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="game board_list">
        <div className="board_title">
          <p>게임공략</p>
        </div>
        <ul className="list">
          {boardList
            .find((item) => item.type === "strategyGuides")
            .list.map((item) => (
              <li key={item.id}>
                <Link to="#">
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </MiniBoard_wrap>
  );
};

export default MiniBoard;
