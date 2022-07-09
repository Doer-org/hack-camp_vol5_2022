import {React, useState} from "react";
import axios from "axios";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import { Popup } from 'semantic-ui-react'
import InputText from "../templates/InputText";
import SecTitle from "../parts/SecTitle";


const CreateRoom = () =>  {
  const [count, setCount] = useState(2);
  
  const CountUp = () => {
    setCount(count+1)
  }

  const CountDown = () => {
    if (count>2){
      setCount(count-1);
    }
  }

  //入力されたルーム名を保存するためのstate
  const [roomName, setRoomName] = useState("");

  const [roomId, setRoomId] = useState("");

  console.log(roomId)

  const CreateRoomId = () => {
    const data = new FormData();
    data.append("max_count", count);
    data.append("name", roomName);

    //Todo APIのエンドポイント変更
    axios.post('https://go-server-doer-vol5.herokuapp.com/room/new', data)
    .then((res)=>{
      // 送信成功時の処理
      setRoomId(res.data.data.id)
    })
    .catch((err)=> {
      // 送信失敗時の処理
      console.log(err);
    });
  }

  function copyUrlToClipboard() {
    const url = `http://localhost:3000/event?room=${roomId}`
    navigator.clipboard.writeText(url)
    .then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  return (
    <div>
      <div className="py-10 bg-thin-purple px-2 h-screen ">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg"></div>
            <div className="card flex flex-col items-center justify-center p-4 mx-2">
              <div className="block  mb-12 rounded-lg shadow-lg bg-white max-w-sm text-center">
                  
                <div className="text-3xl rounded-t-lg py-4 mb-4 bg-purple text-white font-bold tracking-wider">
                  <p >ルーム作成</p>
                </div>

                <div className="px-12 py-4 ">

                  <div type="text" align="center" className="mt-12 ">
                    <p>
                      ルームを作成してイベントに参加するメンバーにURLを共有しましょう
                    </p>
                    <div className="block text-gray-700 text-sm font-bold rounded px-8 pt-4 mb-4">

                      <InputText 
                        title="ルーム名" 
                        id="name" 
                        name="name"
                        value={roomName} 
                        setValue={setRoomName} 
                        pValue={"Do'er 交流会"}
                      />

                    </div>

                  </div>

                  <SecTitle title={"人数"} />

                  <div className="text-5xl mt-4 flex justify-center">
                    <button 
                      onClick={CountDown} 
                      className="
                        flex-grow-0 bg-grey text-white w-10 h-12 text-lg 
                        shadow-lg rounded-full mr-4 hover:bg-thick-grey 
                        hover:shadow-sm hover:translate-y-0.5 transform transition"
                      >ー</button>
                    <div className="flex-grow-0 px-20 py-1 bg-purple text-3xl font-bold text-white rounded-full">
                        {count}
                      </div>
                    <button 
                      onClick={CountUp} 
                      className="
                        flex-grow-0 bg-grey text-white w-10 h-12 text-lg 
                        shadow-lg rounded-full ml-4 hover:bg-thick-grey hover:shadow-sm 
                        hover:translate-y-0.5 transform transition"
                      >＋</button>
                  </div>

                  <div align="center" className="text-xs mt-10">
                    <button 
                      onClick={CreateRoomId} 
                      className="
                        font-semibold rounded shadow-lg text-2xl bg-purple mt-8 mb-4
                        hover:bg-thick-purple text-white font-bold py-4 px-10 
                        rounded-full inline-block hover:shadow-sm hover:translate-y-0.5 
                        transform transition"
                      >ルームURL発行</button>
                    {roomId ?(
                      <div className="mt-4 flex justify-center mb-4">
                        <Link to={`/event?room=${roomId}`} className="underline text-blue-600 truncate">{`http://localhost:3000/event?room=${roomId}`}</Link>
                        <Popup
                          trigger={
                            <button 
                              onClick={(e) => copyUrlToClipboard(e)} 
                              type="button" 
                              data-bs-toggle="popover" 
                              data-bs-placement="top" 
                              data-bs-content="Right popover"
                            >
                              <svg 
                                className="h-8 w-8 text-black"  
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                strokeWidth="2" 
                                stroke="currentColor" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round">  
                                <path stroke="none" d="M0 0h24v24H0z"/>  
                                <rect x="8" y="4" width="12" height="12" rx="2" />  
                                <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" />
                              </svg>
                            </button>
                          }
                          content='Copied!'
                          on='click'
                          position='right center'
                        />
                      </div>    
                    ):(null)}
                  </div>

              </div>


            </div>
          </div>
        </div>
    </div>
    );
}



export default CreateRoom;