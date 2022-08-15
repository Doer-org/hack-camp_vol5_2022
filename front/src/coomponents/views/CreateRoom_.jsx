import React, {useState} from "react";
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
    const url = `https://meet-hack.vercel.app/event?room=${roomId}`
    navigator.clipboard.writeText(url)
    .then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  return (
    <div>
      {/* 一番外枠マージン2 */}
      <div className="bg-thin-purple 
                      py-10 
                      h-screen
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
                        <p >ルーム作成</p>
                    </div>
        

                    
                      
                          {/* お知らせ文章 */}
                          <p className="mt-10">
                            ルームを作成して、
                            <br/>
                            イベントに参加するメンバーにURLを共有しましょう
                          </p>

                          {/* インプット部分 */}
                          <div className="mx-4 sm:mx-20 lg:mx-40 
                                          ">
                          {/* インプット：ルーム名 */}
                              <InputText 
                                title="ルーム名" 
                                id="name" 
                                name="name"
                                value={roomName} 
                                setValue={setRoomName} 
                                pValue={"Do'er 交流会"}
                                className="text-gray-700 text-sm 
                                font-bold rounded
                                w-4/5"
                              />
                      </div>

                            {/* 人数セクション */}

                            <div className="">
                              <SecTitle title={"人数"} />
                              <div className="mt-4 flex justify-center">
                                        {/* -ボタン */}
                                        <button 
                                          onClick={CountDown} 
                                          className="
                                            flex-grow-0 bg-grey text-white w-10 h-12 text-lg 
                                            shadow-lg rounded-full mr-4 hover:bg-thick-grey 
                                            hover:shadow-sm hover:translate-y-0.5 transform transition">
                                            ー
                                        </button>

                                        {/* 人数表示部分 */}
                                        <div className="flex-grow-0 px-10 sm:px-20 py-1 
                                                      bg-purple 
                                                      text-2xl font-bold 
                                                      text-white 
                                                      rounded-full">
                                            {count}
                                        </div>

                                        {/* プラスボタン */}
                                        <button 
                                          onClick={CountUp} 
                                          className="
                                            flex-grow-0 bg-grey text-white w-10 h-12 text-lg 
                                            shadow-lg rounded-full ml-4 hover:bg-thick-grey hover:shadow-sm 
                                            hover:translate-y-0.5 transform transition">
                                          ＋
                                        </button>
                              </div>
                          </div>

                            {/* チームURL発行 */}
                            
                            <div className="my-3 mx-3 md:mx-20
                                            py-4 md:py-10">

                                          {/* 発行ボタン */}
                                            <button 
                                              onClick={CreateRoomId} 
                                              className="
                                                font-semibold shadow-lg 
                                                text-lg
                                                sm:text-xl 
                                                bg-purple mt-4 mb-4
                                                hover:bg-thick-purple text-white py-4 px-10 
                                                rounded-lg inline-block hover:shadow-sm hover:translate-y-0.5 
                                                transform transition"
                                              >ルームURL発行
                                            </button>

                                {/* ルームID */}
                                {roomId ?(
                                <div className="mt-4 flex justify-center mb-4">
                                  <Link to={`/event?room=${roomId}`} className="underline text-blue-600 truncate">
                                    {`https://meet-hack.vercel.app/event?room=${roomId}`}</Link>
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
                                          className="h-8 w-8 text-black text-gray-400"  
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
                            {/* ルームIDセクション終了 */}

          </div>
      </div>
    </div>
    );
}



export default CreateRoom;