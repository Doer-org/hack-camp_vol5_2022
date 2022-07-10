import React, { useEffect, useState } from "react";
import UserInfoCard from "../templates/UserInfoCard";
// import { userInfo } from "../../data/userInfo";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UserInfo = () => {
  // query paramの取得
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const room = query.get("room");

  const [roomInfo, setRoomInfo] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
    .get(`https://go-server-doer-vol5.herokuapp.com/room/${room}`)
    .then((res) => {
      setRoomInfo(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });

  axios
    .get(`https://go-server-doer-vol5.herokuapp.com/member/all?room=${room}`)
    .then((res) => {
      setUsers(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);


  // const count = users.length;
  // const roomName = roomInfo.name;
  // const str = roomInfo.created_at;
  // function toDate(str, delim) {
  //   const arr = str.split(delim);
  //   return new Date(arr[0], arr[1] - 1, arr[2]);
  // }
  // const date = toDate(str, "-");
  return (

    <div className="py-10 bg-thin-purple px-2 h-full h-auto">
        <div className="card flex flex-col items-center justify-center p-4">

          <div className="block  mb-12 rounded-lg shadow-lg bg-white max-w-sm text-center">


            <div className="w-10/12 mx-auto">
              <h1 className="text-3xl text-center mt-10 mb-5">{roomInfo.name}</h1>
              <div className="flex justify-between">
                <div>
                  <span>参加人数：</span>
                  <span>{users.length}</span>
                </div>
                <div className="text-[0.8rem]">{roomInfo.created_at}</div>
              </div>
              <ul className="">
                {users.map((user) => {
                  return (
                    <li>
                      <UserInfoCard user={user} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};
export default UserInfo;
