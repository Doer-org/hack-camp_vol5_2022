import React from "react";
import UserInfoCard from "../templates/UserInfoCard";
import { userInfo } from "../../data/userInfo";

//userInfo
// name
// github
// twitter

const UserInfo = () => {
  const count = userInfo.length;
  const roomName = "テストテスト";
  const date = "2022/07/09"
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-3xl text-center mt-10 mb-5">{roomName}</h1>
      <div className="flex justify-between">
        <div>
          <span>参加人数：</span>
          <span>{count}</span>
        </div>
        <div className="text-[0.8rem]">{date}</div>
      </div>
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
