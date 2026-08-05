import React, { useState } from "react";
import Icon from "./SvgComponents";
import { AnimatePresence, motion } from "framer-motion";

const SideCate = ({ changeWidth, setcateActive, cateActive }) => {
  const [thiscate, setThiscate] = useState(false);
  const sideCateMenus = [
    {
      id: "1",
      title: "RPG",
      svg: Icon.rpg,
      btn: Icon.down,
      tags: ["MMORPG", "MORPG", "액션RPG", "SRPG", "롤플레잉"],
    },
    {
      id: "2",
      title: "액션",
      svg: Icon.action,
      btn: Icon.down,
      tags: ["대전액션", "FPS", "TPS", "슈팅", "비행액션"],
    },
    {
      id: "3",
      title: "전략",
      svg: Icon.rts,
      btn: Icon.down,
      tags: ["RTS", "AOS", "TCG"],
    },
    {
      id: "4",
      title: "시뮬레이션",
      svg: Icon.simul,
      btn: Icon.down,
      tags: ["육성시뮬", "경영시뮬", "연애시뮬"],
    },
    {
      id: "5",
      title: "스포츠",
      svg: Icon.sport,
      btn: Icon.down,
      tags: ["레이싱", "스포츠"],
    },
    {
      id: "6",
      title: "리듬",
      svg: Icon.music,
      btn: Icon.down,
      tags: ["리듬액션"],
    },
    {
      id: "7",
      title: "어드벤처",
      svg: Icon.adven,
      btn: Icon.down,
      tags: ["어드벤처", "비주얼노벨"],
    },
    {
      id: "8",
      title: "기타",
      svg: Icon.other,
      btn: Icon.down,
      tags: ["소셜게임", "기능성게임"],
    },
  ];
  const sideCateMenu = [
    { id: "RPG", svg: Icon.rpg, btn: "/images/icon/chevron-down.png" },
    { id: "MMORPG" },
    { id: "MORPG" },
    { id: "액션RPG" },
    { id: "SRPG" },
    { id: "롤플레잉" },
    { id: "액션", svg: Icon.action, btn: "/images/icon/chevron-down.png" },
    { id: "대전액션" },
    { id: "FPS" },
    { id: "TPS" },
    { id: "슈팅" },
    { id: "비행액션" },
    { id: "전략", svg: Icon.rts, btn: "/images/icon/chevron-down.png" },
    { id: "RTS" },
    { id: "AOS" },
    { id: "TCG" },
    { id: "시뮬레이션", svg: Icon.simul, btn: "/images/icon/chevron-down.png" },
    { id: "육성시뮬" },
    { id: "경영시뮬" },
    { id: "연애시뮬" },
    { id: "스포츠", svg: Icon.sport, btn: "/images/icon/chevron-down.png" },
    { id: "레이싱" },
    { id: "스포츠" },
    { id: "리듬", svg: Icon.music, btn: "/images/icon/chevron-down.png" },
    { id: "리듬액션" },
    { id: "어드벤쳐", svg: Icon.adven, btn: "/images/icon/chevron-down.png" },
    { id: "어드벤쳐" },
    { id: "비주얼노벨" },
    { id: "기타", svg: Icon.other, btn: "/images/icon/chevron-down.png" },
    { id: "소셜게임" },
    { id: "기능성게임" },
  ];
  return (
    <div className="side_cate">
      <div className="cate_title" onClick={() => setcateActive(!cateActive)}>
        <span>모든 카테고리</span>
        {changeWidth <= 1024 ? <Icon.down /> : <></>}
      </div>
      <ul className="side_cate_list">
        {sideCateMenus.map((itme) => {
          const SvgIcon = itme.svg;
          const BtnIcon = itme.btn;
          return (
            <li key={itme.id}>
              <div
                className="tags_name"
                onClick={() => {
                  setThiscate(thiscate === itme.id ? null : itme.id);
                }}
              >
                <p>
                  {SvgIcon && <SvgIcon />}
                  <span>{itme.title}</span>
                </p>
                <button className="drop">{BtnIcon && <BtnIcon />}</button>
              </div>
              <AnimatePresence>
                {thiscate === itme.id && (
                  <motion.ul
                    className="detail_tags"
                    initial={{ height: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    {itme.tags.map((tags) => (
                      <li key={tags}>
                        <span>{tags}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
              {/* <ul className="detail_tags">
                {itme.tags.map((tags) => (
                  <li key={tags}>
                    <span>{tags}</span>
                  </li>
                ))}
              </ul> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideCate;
