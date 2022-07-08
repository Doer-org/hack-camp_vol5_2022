import React from "react";
import YouserCard from "../templates/YouserInfoCard";
import { youserInfo } from "../../data/youserInfo";

const YouserInfo = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h1>参加者情報一覧</h1>
      <YouserCard list={youserInfo} />
    </div>
  );
};
export default YouserInfo;
