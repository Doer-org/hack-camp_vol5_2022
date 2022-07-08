import React from "react";
import UserCard from "../templates/UserInfoCard";
import { userInfo } from "../../data/userInfo";

const UserInfo = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h1>参加者情報一覧</h1>
      <UserCard list={userInfo} />
    </div>
  );
};
export default UserInfo;
