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

    <div>
    {/* 一番外枠マージン2 */}
    <div className="bg-thin-purple 
                    py-10 
                    
                    flex justify-center items-center">

        {/* sm以上で背景白のカード */}
        <div className="w-5/6 sm:w-3/5
                    bg-white shadow-lg rounded-xl 
                    glid grid-cols-1
                    mb-10
                    text-center
                    ">

                  {/* ルーム作成テーマピンク */}
                  <div className="text-2xl sm:text-3xl 
                                  rounded-t-lg 
                                  py-4 mb-4 
                                  bg-purple 
                                  text-white font-bold tracking-wider">
                      <p >{roomInfo.name}</p>
                  </div>


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
  );
};
export default UserInfo;
