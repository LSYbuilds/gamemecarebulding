import React, { useState } from "react";
import Icon from "./SvgComponents";
import { MobileSideCateWrap } from "../../styles/gameinfo.styled";
import { AnimatePresence, motion } from "framer-motion";

const MobileSideCate = ({
  changeWidth,
  cateActive,
  setcateActive,
  setMobileCate,
  mobilecate,
}) => {
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
  return (
    <MobileSideCateWrap
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.3 }}
    >
      <div className="cate_title" onClick={() => setMobileCate(!mobilecate)}>
        <span>모든 카테고리</span>
        <Icon.down />
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
                {thiscate == itme.id && (
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
            </li>
          );
        })}
      </ul>
    </MobileSideCateWrap>
  );
};

export default MobileSideCate;
