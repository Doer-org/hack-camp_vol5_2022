import React, { FC } from "react";
import { useState, useEffect } from "react";
import RegisterUser from "../components/views/RegisterUser.jsx"
import InputText from "../components/templates/InputText"
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/img/logo.png";

import * as TE from 'fp-ts/TaskEither';
import { pipe } from 'fp-ts/function'

import { useMeetHackApi } from "../hooks/useMeetHackApi"
import { TPostAddNewMemberInput } from "@/types/api/member";
import { TApiError } from "@/types/api/apiError";
import { TGetRoomInfoOutput } from "@/types/api/room";

export const RegisterUserPage: FC = () => {

  const { createRoom, addNewMember, getRoomInfo, getRoomMembers } = useMeetHackApi()

  // query paramの取得
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const roomID: string | undefined = query.get('room') ?? undefined;

  // createUser data
  const [name, setName] = useState(""); //必須
  const [lang, setLang] = useState("");    //必須
  const [comment, setComment] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [question, setQuestion] = useState(""); //必須

  // Step bar
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  // room status
  const [roomStatus, setRoomStatus] = useState("");

  const navigate = useNavigate();

  const createUserData = () => {
    console.log(roomID)
    if (typeof (roomID) == "undefined") {
      console.log("roomIDをクエリパラメータから取得できませんでした。")
    } else {
      const input: TPostAddNewMemberInput =
      {
        name: name,
        lang: lang,
        comment: comment,
        github: github,
        twitter: twitter,
        question: question,
        roomID: roomID
      }

      pipe(
        addNewMember(input),
        TE.match(
          (error: TApiError) => console.log("Error: createUserData " + error.error),
          (ok) => navigate(`/event/prepare?room=${roomID}`)
        )
      )()
    }
  }


  useEffect(() => {
    if (typeof (roomID) == "undefined") {
      console.log("roomIDをクエリパラメータから取得できませんでした。")
    } else {
      pipe(
        getRoomInfo({ roomID: roomID }),
        TE.match(
          (error: TApiError) => console.log("Error : getRoomInfo " + error.error),
          (ok: TGetRoomInfoOutput) => {
            if (ok.status === "finished") {
              navigate(`/event/user/list?room=${roomID}`);
            }
          }
        )
      )()
    }
  }, []);

  return (
    <div className="py-10 bg-thin-purple px-2 h-screen">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg"></div>
      <div className="card flex flex-col items-center justify-center p-4 ">
        {
          (first === false && second === false && third === false) ?
            <>
              {/* ----- 0 step ------ */}
              <div className="block  mb-12 rounded-lg shadow-lg bg-white max-w-sm text-center">

                <div className="text-3xl rounded-t-lg py-4 mb-4 bg-purple text-white font-bold tracking-wider">
                  <p >ユーザー登録</p>
                </div>

                <div className="px-12 py-4 ">

                  <div className="my-2 px-2 py-1 w-full mt-2 w-60">
                    <img src={logo} className="mb-4" />
                    <p>ユーザーの登録フォームです</p><br></br>
                    <div className="bg-green-100 p-2 rounded-xl shadow-lg">
                      <small className="block text-sm text-gray-800 font-bold m-2">
                        Tips 💡
                      </small>
                      <p className="text-gray-700 text-sm">
                        イベント終了後に入力した<br></br>
                        情報がRoomメンバーに<br></br>
                        共有されます！<br></br>
                        できる限り埋めましょう！</p>
                    </div>

                  </div>

                  <button
                    className="
                            font-semibold rounded shadow-lg text-2xl 
                            bg-purple hover:bg-thick-purple text-white font-bold 
                            py-2 px-8 rounded-full inline-block hover:shadow-sm 
                            hover:translate-y-0.5 transform transition
                            mb-4
                          "
                    onClick={() => { setFirst(!first) }}
                  >
                    Start
                  </button>

                </div>
              </div>


              {/* ----- step bar ------ */}
              <div className="w-11/12 lg:w-2/6 mx-auto">
                <div className="bg-gray-200 h-1 flex items-center justify-between">

                  <div className="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                    <div className="h-3 w-3 bg-fuchsia-500 rounded-full"></div>
                    <div className="absolute right-0 -mr-2">
                      <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-24 w-36">
                        <p tabIndex={0} className="focus:outline-none text-fuchsia-700 text-base font-bold">Step 0 : ようこそ！</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/3 flex justify-end">
                    <div className="bg-white h-6 w-6 rounded-full shadow"></div>
                  </div>

                  <div className="w-1/3 flex justify-end">
                    <div className="bg-white h-6 w-6 rounded-full shadow"></div>
                  </div>

                  <div className="w-1/3 flex justify-end">
                    <div className="bg-white h-6 w-6 rounded-full shadow"></div>
                  </div>

                </div>
              </div>
              {/* ----- step bar ------ */}

            </>
            : null
        }
        {
          (first === true && second === false && third === false) ?
            <>
              {/* ----- 1 step ------ */}
              <div className="block  mb-12 rounded-lg shadow-lg bg-white max-w-sm text-center">

                <div className="text-3xl rounded-t-lg py-4 mb-4 bg-purple text-white font-bold tracking-wider">
                  <p >ユーザー登録</p>
                </div>

                <div className="px-12 py-4">

                  <div className="form-group mb-6 w-60">
                    <InputText
                      title="呼ばれたい名前 || あだな "
                      id="name"
                      name="name"
                      value={name}
                      setValue={setName}
                      pValue={"Do'erくん"}
                    />
                    <small className="block text-xs text-red-400">
                      Column "name" cannot be null 🐬
                    </small>
                  </div>

                  <div className="form-group mb-6">
                    <InputText
                      title="好きな言語 || 好きなライブラリ"
                      id="lang"
                      name="lang"
                      value={lang}
                      setValue={setLang}
                      pValue={"React, Golang, ..."}
                    />
                    {/* <small className="block text-xs text-gray-600">
                        複数入力可能
                      </small> */}
                  </div>

                  <div className="form-group mb-6">
                    <InputText
                      title="ひとことコメント！"
                      id="comment"
                      name="comment"
                      value={comment}
                      setValue={setComment}
                      pValue={"よろしくお願いします！"}
                    />
                  </div>


                  <button
                    className="
                        font-semibold rounded shadow-lg text-2xl 
                        bg-purple hover:bg-thick-purple text-white font-bold 
                        py-2 px-8 rounded-full inline-block hover:shadow-sm 
                        hover:translate-y-0.5 transform transition
                        mb-4
                      "
                    onClick={() => { setSecond(!second) }}
                    disabled={!name}
                  >
                    Next
                  </button>

                </div>
              </div>




              {/* ----- step bar ------ */}
              <div className="w-11/12 lg:w-2/6 mx-auto">
                <div className="bg-gray-200 h-1 flex items-center justify-between">

                  <div className="w-1/3 flex justify-between bg-fuchsia-500 h-1 items-center relative">
                    <div className="absolute right-0 -mr-2">
                      <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-24 w-48">
                        <p tabIndex={0} className="focus:outline-none text-fuchsia-700 text-base font-bold">Step 1 : 基本情報の入力</p>
                      </div>
                    </div>

                    <div className="bg-fuchsia-500 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check" />
                    </div>
                    <div className="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                      <div className="h-3 w-3 bg-fuchsia-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="w-1/3 flex justify-end">
                    <div className="bg-white h-6 w-6 rounded-full shadow"></div>
                  </div>

                  <div className="w-1/3 flex justify-end">
                    <div className="bg-white h-6 w-6 rounded-full shadow"></div>
                  </div>

                </div>
              </div>
              {/* ----- step bar ------ */}

            </>
            : null
        }
        {
          (second === true && third === false) ?
            <>
              {/* ----- 2 step ------ */}
              <div className="block  mb-12 rounded-lg shadow-lg bg-white max-w-sm text-center">

                <div className="text-3xl rounded-t-lg py-4 mb-4 bg-purple text-white font-bold tracking-wider">
                  <p >ユーザー登録</p>
                </div>

                <div className="px-12 py-4">

                  <div className="form-group mb-6 w-60">
                    <InputText
                      title="GitHub ( ユーザー名 )"
                      id="github"
                      name="github"
                      value={github}
                      setValue={setGithub}
                      pValue={"Doer-org"}
                    />
                  </div>

                  <div className="form-group mb-6">
                    <InputText
                      title="Twitter ( ユーザーID )"
                      id="twitter"
                      name="twitter"
                      value={twitter}
                      setValue={setTwitter}
                      pValue={"du_doer"}
                    />
                    <small className="block text-xs text-gray-600">
                      @以降のIDの入力をお願いします
                    </small>
                  </div>

                  <button
                    className="
                        font-semibold rounded shadow-lg text-2xl 
                        bg-purple hover:bg-thick-purple text-white font-bold 
                        py-2 px-8 rounded-full inline-block hover:shadow-sm 
                        hover:translate-y-0.5 transform transition
                        mb-4
                      "
                    onClick={() => { setThird(!third) }}
                  >
                    Next
                  </button>

                </div>
              </div>


              {/* ----- step bar ------ */}
              <div className="w-11/12 lg:w-2/6 mx-auto">
                <div className="bg-gray-200 h-1 flex items-center justify-between">
                  <div className="w-1/3 bg-fuchsia-500 h-1 flex items-center">
                    <div className="bg-fuchsia-500 h-6 w-6 rounded-full shadow flex items-center justify-center">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check" />
                    </div>
                  </div>


                  <div className="w-1/3 flex justify-between bg-fuchsia-500 h-1 items-center relative">
                    <div className="absolute right-0 -mr-2">
                      <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-24 w-44">
                        <p tabIndex={0} className="focus:outline-none text-fuchsia-700 text-base font-bold">Step 2 : SNS情報入力</p>
                      </div>
                    </div>

                    <div className="bg-fuchsia-500 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check" />
                    </div>
                    <div className="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                      <div className="h-3 w-3 bg-fuchsia-500 rounded-full"></div>
                    </div>
                  </div>


                  <div className="w-1/3 flex justify-end">
                    <div className="bg-white h-6 w-6 rounded-full shadow"></div>
                  </div>
                </div>
              </div>
              {/* ----- step bar ------ */}

            </>

            : null
        }
        {
          (third === true) ?
            <>
              {/* ----- 3 step ------ */}
              <div className="block  mb-12 rounded-lg shadow-lg bg-white max-w-sm text-center">

                <div className="text-3xl rounded-t-lg py-4 mb-4 bg-purple text-white font-bold tracking-wider">
                  <p >ユーザー登録</p>
                </div>

                <div className="px-12 py-4">

                  <div className="form-group mb-6 w-60">
                    <InputText
                      title="他の人に聞いてみたい質問"
                      id="question"
                      name="question"
                      value={question}
                      setValue={setQuestion}
                      pValue={"得意な言語は?"}
                    />
                    <small className="block text-xs text-red-400">
                      Column "question" cannot be null 🐬
                    </small>
                  </div>

                  <button
                    className="
                        font-semibold rounded shadow-lg text-2xl 
                        bg-purple hover:bg-thick-purple text-white font-bold 
                        py-2 px-8 rounded-full inline-block hover:shadow-sm 
                        hover:translate-y-0.5 transform transition
                        mb-4
                      "
                    onClick={createUserData}
                    disabled={!question}
                  >
                    Send
                  </button>

                </div>
              </div>


              {/* ----- step bar ------ */}
              <div className="w-11/12 lg:w-2/6 mx-auto">
                <div className="bg-gray-200 h-1 flex items-center justify-between">

                  <div className="w-1/3 bg-fuchsia-500 h-1 flex items-center">
                    <div className="bg-fuchsia-500 h-6 w-6 rounded-full shadow flex items-center justify-center">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check" />
                    </div>
                  </div>

                  <div className="w-1/3 bg-fuchsia-500 h-1 flex items-center">
                    <div className="bg-fuchsia-500 h-6 w-6 rounded-full shadow flex items-center justify-center">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check" />
                    </div>
                  </div>

                  <div className="w-1/3 flex justify-between bg-fuchsia-500 h-1 items-center relative">
                    <div className="absolute right-0 -mr-2">
                      <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-16 w-40">
                        <p tabIndex={0} className="focus:outline-none text-fuchsia-700 text-base font-bold">Step 3 : 質問の入力</p>
                      </div>
                    </div>

                    <div className="bg-fuchsia-500 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check" />
                    </div>
                    <div className="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                      <div className="h-3 w-3 bg-fuchsia-500 rounded-full"></div>
                    </div>
                  </div>

                </div>
              </div>
              {/* ----- step bar ------ */}

            </>
            : null
        }

      </div>
    </div>
  );
}
