import React from "react";
import UserInfoCard from "../templates/UserInfoCard";
import { userInfo } from "../../data/userInfo";

const UserInfo = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-3xl text-center mt-10 mb-5">参加者情報一覧</h1>
      <ul>
        {userInfo.map((user) => {
          return (
            <li>
              <UserInfoCard user={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UserInfo;
