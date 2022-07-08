import React,{useEffect, useState} from "react";
import Socket from "../../ws/socket";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {  
  
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const room = query.get('room');

  const ws = new WebSocket(`ws://localhost:8080/ws?room=${room}`);
  const socket = new Socket(ws);

  const [userList, setUserList] = useState([]);

  useEffect(() => {
      // connect, disconnect, message eventの追加
      socket.on("connect",onConnect);
      socket.on("disconnect",onDisConnect);
      socket.on("message",receiveMessage);

      axios
        .get(`http://localhost:8080/member/all?room=${room}`)
        .then((data)=>{console.log("member: ",data)})
        .catch((err)=>{
          console.log(err)
        })
  }, []);

  const onConnect = ()=>{
    console.log("ws connect")
  };

  const onDisConnect = ()=>{
    console.log("ws disconnect")
  };

  const receiveMessage = (data)=>{
    if (data){
      //get member
      console.log("receive data",data)

    }
  };

  const wsfunc = ()=>{
    socket.send("hello")
  }

  return (
    <div>
      <div>ユーザー一覧</div>
      <button className="bg-blue-500 hover:bg-blue-400 text-white rounded px-4 py-2" onClick={wsfunc}>Send</button>
      
    </div>
  );
};
export default UserList;
