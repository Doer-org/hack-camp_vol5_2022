import React, { useState } from "react";
import UserInfoCard from "../templates/UserInfoCard";
// import { userInfo } from "../../data/userInfo";
import axios from "axios";
// import { useLocation } from "react-router-dom";

//userInfo
// name
// github
// twitter

const UserInfo = () => {
  // query paramの取得
  // const search = useLocation().search;
  // const query = new URLSearchParams(search);
  // const roomId = query.get("room");

  const roomId =
    "46e96c86ab6db490de247c05b95a905e19eee8985f341856cb162b1e84d73241";
  const [roomInfo, setRoomInfo] = useState("");
  axios
    .get(`https://go-server-doer-vol5.herokuapp.com/room/${roomId}`)
    .then((response) => {
      console.log(response.data);
      setRoomInfo(response.data.status);
    })
    .catch((err) => {
      console.log(err);
    });

  const [users, setUsers] = useState([]);
  axios
    .get(`https://go-server-doer-vol5.herokuapp.com/member/all?room=${roomId}`)
    .then((response) => {
      console.log(response.data);
      setUsers(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  const count = users.length;
  const roomName = roomInfo.name;
  const str = roomInfo.created_at;
  function toDate(str, delim) {
    const arr = str.split(delim);
    return new Date(arr[0], arr[1] - 1, arr[2]);
  }
  const date = toDate(str, "-");
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
        {users.map((user) => {
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
