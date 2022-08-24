import React, { FC, useEffect, useState } from "react";
import Socket from "../ws/socket_ts";

import { useLocation, useNavigate } from 'react-router-dom';
import UserList from "../components/views/UserList";
import UserInfoCard from "../components/templates/UserInfoCard";
import UserPrepareCard from "../components/templates/UserPrepareCard";
import robot from "../assets/img/robot.png";

import { useMeetHackApi } from "../hooks/useMeetHackApi"
import { TGetRoomMembersOutput } from "@/types/api/member";

import axios from 'axios';
import * as E from 'fp-ts/Either'
import { pipe } from "fp-ts/lib/function";
import * as TE from 'fp-ts/TaskEither';

export const UserListPage: FC = () => {
  const { createRoom, addNewMember, getRoomInfo, getRoomMembers,getRoomFinish } = useMeetHackApi()

  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const roomID = query.get('room') ?? undefined;

  // websocket接続準備 
  // const ws = new WebSocket(`wss://go-server-doer-vol5.herokuapp.com/ws?room=${roomID}`);
  const ws = new WebSocket(`wss://localhost/ws?room=${roomID}`);
  const socket = new Socket(ws);

  const [userList, setUserList] = useState<TGetRoomMembersOutput[]>([]);
  const [roomName, setRoomName] = useState("");
  const [maxCount, setMaxCount] = useState(0);
  const [nowCount, setNowCount] = useState(0);

  const onConnect = () => {
    console.log("ws connect")
    ws.send("connect")
  };

  const onDisConnect = () => {
    console.log("ws disconnect")
  };

  const receiveMessage = (data) => {
    // websocketで通信を受け取るたびにmember更新
    if (data) {
      // //get member
      console.log("receive data", data)
      if (typeof (roomID) == "undefined") {
        console.log("クエリパラメータからroomIDを取得できませんでした。")
      } else {
        pipe(
          getRoomMembers({ roomID: roomID }),
          TE.match(
            (error) => console.log("Error: getRoomMembers " + error.error),
            (ok) => {
              setUserList(ok)
              setNowCount(ok.length)
            }
          )
        )()
        pipe(
          getRoomInfo({ roomID: roomID }),
          TE.match(
            (error) => console.log("Error: getRoomInfo " + error.error),
            (ok) => {
              setRoomName(ok.name)
              setMaxCount(ok.max_count)
            }
          )
        )()
      }
    }
  };
  useEffect(() => {
    // connect, disconnect, message eventの追加
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisConnect);
    socket.on("message", receiveMessage);

    // 初回のmemberアクセス

    if (typeof (roomID) == "undefined") {
      console.log("クエリパラメータからroomIDを取得できませんでした。")
    } else {
      pipe(
        getRoomMembers({ roomID: roomID }),
        TE.match(
          (e) => console.log("Error : getRoomMembers"),
          (ok) => setUserList(ok)
        )
      )()
    }
    console.log("useEffect called") 
    return () => { socket.ws.close() }
  }, []);


  const navigate = useNavigate();

  const eventStart = () => {
    socket.ws.close() 
    pipe(
      getRoomFinish(roomID),
      TE.match(
        (error) => console.log(error),
        (ok) => navigate(`/event/questions?room=${roomID}`)
      )
    )
    // axios 
    //   // .get(`https://go-server-doer-vol5.herokuapp.com/room/finish/${roomID}`)
    //   .get(`http://localhost:8080/room/finish/${roomID}`)
    //   .then(() => { 
    //     navigate(`/event/questions?room=${roomID}`);
    //   })
    //   .catch((err) => { 
    //     console.log(err)
    //   })
  }

  return (
    <>
      <div className="py-10 bg-thin-purple px-2 h-screen">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg"></div>
        <div className="card flex flex-col items-center justify-center p-4 ">

          <div className="block  mb-12 rounded-lg shadow-lg bg-white max-w-sm text-center">

            <div className="text-2xl rounded-t-lg py-4 mb-4 px-4 bg-purple text-white font-bold tracking-wider">
              <p >{roomName}</p>
            </div>
            <div className="px-12 py-4">
              {
                maxCount > nowCount ?
                  <>
                    <p className="text-2xl text-gray-800 font-bold">準備中...</p>
                    <div className="flex justify-center">
                      <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
                    </div>

                    <div className="mt-8 mb-2 mx-auto bg-grey-light rounded-lg shadow-lg p-4 bg-gray-100">
                      <p className="italic text-blue-darkest leading-normal text-lg">
                        他のmemberを待っています<br />
                        現在 {nowCount} / {maxCount} 待機中
                      </p>
                    </div>

                    <div className="flex justify-center mb-8">
                      <img src={robot} width="100px" />
                    </div>
                  </>
                  :
                  <>
                    <p className="text-2xl text-gray-800 font-bold">準備完了！</p>

                    <div className="mt-8 mb-2 mx-auto bg-grey-light rounded-lg shadow-lg p-4 bg-gray-100">
                      <p className="italic text-blue-darkest leading-normal text-lg">
                        イベントを開始する準備ができました<br />
                        皆さんは準備できましたか？
                      </p>
                      <p className="text-center pt-8 text-grey-darker text-sm">
                        イベントを開始する場合はページ下部の<br />
                        "Start"ボタンを押してください
                      </p>
                    </div>

                    <div className="flex justify-center mb-8">
                      <img src={robot} width="100px" />
                    </div>
                  </>
              }
              <ul>
                {userList.map((user) => {
                  return (
                    <li>
                      <UserPrepareCard user={user} />
                    </li>
                  );
                })}
              </ul>
              {
                maxCount <= nowCount ?
                  <>

                    <button
                      className="
                    font-semibold rounded shadow-lg text-2xl 
                    bg-purple hover:bg-thick-purple text-white font-bold 
                    py-2 px-8 rounded-full inline-block hover:shadow-sm 
                    hover:translate-y-0.5 transform transition
                    mb-4
                  "
                      onClick={eventStart}
                    >
                      Start
                    </button>
                  </>
                  : null
              }


            </div>
          </div>
        </div>
      </div>


    </>


  );
}
