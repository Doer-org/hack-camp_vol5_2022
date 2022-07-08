import {React, useState} from "react";
import axios from "axios";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";

const CreateRoom = () =>  {
  const [count, setCount] = useState(0);
  
  const CountUp = () => {
    setCount(count+1)
  }

  const CountDown = () => {
    if (count>0){
      setCount(count-1);
    }
  }

  //入力されたルーム名を保存するためのstate
  const [roomName, setRoomName] = useState("");

  const [roomId, setRoomId] = useState("");

  const CreateRoomId = () => {
    const data = new FormData();
    data.append("max_count", count);
    data.append("name", roomName);

    axios.post('http://localhost:8080/new/room/', data)
    .then(function (response) {
    // 送信成功時の処理
    // console.log(response);
    const roomId = "12345"
    setRoomId(roomId)
    })
    .catch(function (error) {
    // 送信失敗時の処理
    console.log(error);
    });
  }

  const handleCopy = (e) => {
    e.preventDefault()
    const url = "http://localhost:3000//member/new?room="+{roomId}
    e.clipboardData.setData("Text", "あああああああああああああああ")
    console.log(url)
  } 

  return (
    <div>
      <div align="center">
        <h1 className="text-5xl mt-24">ルーム作成</h1>
      </div>

      <div type="text" align="center" className="text-4xl mt-12">
        <span>ルーム名</span>
        <form className="block text-gray-700 text-sm font-bold rounded px-8 pt-4 mb-4">
          <input value={roomName} onChange={(event) => setRoomName(event.target.value)} className="bg-thin-purple text-2xl"/>
        </form>
      </div>

      <div align="center" className="text-4xl mt-8">人数</div>
      <div className="text-5xl mt-4 flex justify-center">
        <button onClick={CountDown} className="flex-grow-0 bg-grey text-white w-12 h-12 text-lg shadow-lg rounded-full mr-4 hover:bg-thick-grey hover:shadow-sm hover:translate-y-0.5 transform transition">ー</button>
        <div className="flex-grow-0 px-20 py-1 bg-purple text-lg text-white rounded-full">{count}</div>
        <button onClick={CountUp} className="flex-grow-0 bg-grey text-white w-12 h-12 text-lg shadow-lg rounded-full ml-4 hover:bg-thick-grey hover:shadow-sm hover:translate-y-0.5 transform transition">＋</button>
      </div>

      <div align="center" className="text-xs mt-10">
        <button onClick={CreateRoomId} className="font-semibold rounded shadow-lg text-2xl bg-purple hover:bg-thick-purple text-white font-bold py-4 px-20 rounded-full inline-block hover:shadow-sm hover:translate-y-0.5 transform transition">ルームURL発行</button>
        {/* {data.id ?( */}
          <div className="mt-4 flex justify-center">
          <Link to={`http://localhost:3000//member/new?room=${data.id}`}>http://localhost:3000//member/new?room={data.id}</Link>
          <button onClick={(e) => handleCopy(e)}>
            Click
            {/* <svg class="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="8" y="4" width="12" height="12" rx="2" />  <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" /></svg> */}
          </button>
        </div>
        {/* // ):(null)} */}
        
      </div>
    </div>
    );
}


export default CreateRoom;