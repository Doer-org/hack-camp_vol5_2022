import React,{useEffect, useState} from "react";
import Socket from "../../ws/socket";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import User from "../parts/User";

const UserList = () => {  
  
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const room = query.get('room');

  // websocket接続準備
  const ws = new WebSocket(`ws://localhost:8080/ws?room=${room}`);
  const socket = new Socket(ws);

  const [userList, setUserList] = useState([]);

  const [roomName, setRoomName] = useState("");
  const [maxCount, setMaxCount] = useState(0);
  const [nowCount, setNowCount] = useState(0);

  useEffect(() => {
      // connect, disconnect, message eventの追加
      socket.on("connect",onConnect);
      socket.on("disconnect",onDisConnect);
      socket.on("message",receiveMessage);

      // 初回のmemberアクセス
      axios
        .get(`http://localhost:8080/member/all?room=${room}`)
        .then((res)=>{
          setUserList(res.data.data)
        })
        .catch((err)=>{
          console.log(err)
        })
  }, []);

  const onConnect = ()=>{
    console.log("ws connect")
    ws.send("connect")
  };

  const onDisConnect = ()=>{
    console.log("ws disconnect")
  };

  const receiveMessage = (data)=>{
    // websocketで通信を受け取るたびにmember更新
    // websocketもどき
    if (data){
      //get member
      console.log("receive data",data)
      axios
        .get(`http://localhost:8080/member/all?room=${room}`)
        .then((res)=>{
          setUserList(res.data.data)
          setNowCount(res.data.data.length)
        })
        .catch((err)=>{
          console.log(err)
        })

      axios
        .get(`http://localhost:8080/room/${room}`)
        .then((res)=>{
          setRoomName(res.data.data.name)
          setMaxCount(res.data.data.max_count)
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  };

  return (
    <>
      <div className="py-10 h-screen bg-gray-300 px-2">
          <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-lg">
              <div className="md:flex">
                  <div className="w-full p-4">
                    {
                      maxCount!==nowCount ? 
                      <div className="">
                        <p className="flex justify-center p-2 text-gray-800">Room <span className="text-2xl mx-4">{roomName}</span></p>

                        <p className="flex justify-center">他のmemberを待っています...</p>
                        <p className="flex justify-center">現在 {nowCount} / {maxCount}</p>
                        <div className="flex justify-center">
                          <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
                        </div>
                      </div>
                
                      :
                      <>
                        <h1>準備完了</h1>
                        {roomName}
                      </>
                    }
                      <ul>
                          {
                            userList.map((user, idx)=>{
                                return <User user={user} key={idx} />
                              })
                          }
                      </ul>
                      {
                        maxCount!==nowCount ? 
                        <>
                        </>
                  
                        :
                        <>
                          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Button
                          </button>
                        </>
                      }
                  </div>

              </div>
          </div>
      </div>
    </>
    

  );
};
export default UserList;
