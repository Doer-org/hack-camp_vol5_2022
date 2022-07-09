import React,{useEffect, useState} from "react";
import Socket from "../../ws/socket";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import UserInfoCard from "../templates/UserInfoCard";
import UserPrepareCard from "../templates/UserPrepareCard";

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
        .get(`https://go-server-doer-vol5.herokuapp.com/member/all?room=${room}`)
        .then((res)=>{
          setUserList(res.data.data)
        })
        .catch((err)=>{
          console.log(err)
        })
        console.log("useEffect called")
      return ()=>{socket.ws.close()}
  }, []);

  const onConnect = ()=>{
    console.log("ws connect")
    ws.send("connect")
  };

  const onDisConnect = ()=>{
    console.log("ws disconnect")
  };

  console.log("list",userList)

  const receiveMessage = (data)=>{
    // websocketで通信を受け取るたびにmember更新
    if (data){
      //get member
      console.log("receive data",data)
      axios
        .get(`https://go-server-doer-vol5.herokuapp.com/member/all?room=${room}`)
        .then((res)=>{
          setUserList(res.data.data)
          setNowCount(res.data.data.length)
        })
        .catch((err)=>{
          console.log(err)
        })

      axios
        .get(`https://go-server-doer-vol5.herokuapp.com/room/${room}`)
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
      <div className="py-10  bg-thin-purple px-2 h-screen">
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg">
              <div className="md:flex">
                  <div className="w-full p-4 bg-white">
                    {
                      maxCount>nowCount ? 
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
                            {userList.map((user) => {
                              console.log("AAA",user)
                              return (
                                <li>
                                  <UserPrepareCard user={user} />
                                </li>
                              );
                            })}
                      </ul>
                    {
                      maxCount<=nowCount ? 
                      <>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Button
                        </button>
                      </>
                      :null
                    }
                  </div>

              </div>
          </div>
      </div>
    </>
    

  );
};
export default UserList;
