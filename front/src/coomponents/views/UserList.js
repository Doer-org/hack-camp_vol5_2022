import React,{useEffect} from "react";
import Socket from "../../ws/socket";
import { useLocation } from 'react-router-dom';

const UserList = () => {  
  
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const room = query.get('room');

  const ws = new WebSocket(`ws://localhost:8080/ws?room=${room}`);
  const socket = new Socket(ws);

  useEffect(() => {
      // connect, disconnect, message eventの追加
      socket.on("connect",onConnect);
      socket.on("disconnect",onDisConnect);
      socket.on("message",receiveMessage);

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
    }
  };

  return (
    <div>
      <div>ユーザー一覧</div>
      
    </div>
  );
};
export default UserList;
