import React, { useEffect, useState } from "react";
import UserInfoCard from "../templates/UserInfoCard";
// import { userInfo } from "../../data/userInfo";
import axios from "axios";
import { useLocation } from "react-router-dom";
import robot from "../../assets/img/robot.png";

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

                  <div class="mt-8 mb-2 mx-auto bg-grey-light rounded-lg shadow-lg p-4 bg-gray-100 mx-10">
                    <p class="italic text-blue-darkest leading-normal text-lg">
                      イベントお疲れ様でした<br/>
                    </p>
                    <p class="text-center pt-8 text-grey-darker text-sm">
                      イベント後も皆さんの情報を管理します🤖<br/>
                      気になる方のプロフィールを確認してみましょう！
                    </p>
                  </div>
                
                <div className="flex justify-center mb-8">
                  <img src={robot} width="100px"/>
                </div>

          <div className="text-lg flex justify-between mx-6 sm:block">
            <div>
              <span>参加人数：</span>
              <span>{users.length}</span>
            </div>

            <div className="text-[0.8rem]">Date : {roomInfo && roomInfo.created_at ? roomInfo.created_at.slice(0,10) : null}</div>
          </div>
          <ul className="mx-6 my-8 sm:flex sm:justify-around">
            {users.map((user) => {
              return (
                <li className="sm:w-[45%] sm:mb-10">
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
