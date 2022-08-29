import { FC, useState } from 'react'
import { useMeetHackApi } from '../hooks/useMeetHackApi'
import { TPostCreateNewRoomInput } from '../types/api/room'

import { Link } from 'react-router-dom'
import { Popup } from 'semantic-ui-react'
import InputText from '../components/templates/InputText' // "../components /templates/InputText";
import SecTitle from '../components/parts/SecTitle' // "../parts/SecTitle"; 


export const CreateRoomPage: FC = () => {
  console.log('CreateRoom')

  const { createRoom } = useMeetHackApi()

  const [count, setCount] = useState(2)

  const CountUp = (): void => {
    setCount(count + 1)
  }

  const CountDown = (): void => {
    if (count > 2) {
      setCount(count - 1)
    }
  }
  // 入力されたルーム名を保存するためのstate
  const [roomName, setRoomName] = useState('')

  const [roomId, setRoomId] = useState('')

  console.log(roomId)

  const CreateRoomId = (): void => {
    const input: TPostCreateNewRoomInput = {
      name: roomName,
      max_count: count
    }
    // Todo APIのエンドポイント変更 
    console.log("=================")
    createRoom(input)
      .then((ok) => {
        // 送信成功時の処理
        console.log("=================")
        console.log(ok)
        setRoomId(ok.id)
      })
      .catch((error) =>
        console.log(error)
      )
  }
  function copyUrlToClipboard(): void {
    const url = `https://meet-hack.vercel.app/event?room=${roomId}`
    navigator.clipboard.writeText(url)
      .then(function () {
        console.log('Async: Copying to clipboard was successful!')
      }, function (err) {
        console.error('Async: Could not copy text: ', err)
      })
  }

  return (
    <div>
      {/* 一番外枠マージン2 */}
      <div className="flex
                      h-screen
                      items-center
                      justify-center bg-thin-purple py-10">

        {/* sm以上で背景白のカード */}
        <div className="glid mb-10
                      w-5/6 grid-cols-1 rounded-xl
                      bg-white text-center
                      shadow-lg
                      sm:w-3/5
                      ">

          {/* ルーム作成テーマピンク */}
          <div className="mb-4 rounded-t-lg
                                    bg-purple
                                    py-4 text-2xl
                                    font-bold
                                    tracking-wider text-white sm:text-3xl">
            <p >ルーム作成</p>
          </div>

          {/* お知らせ文章 */}
          <p className="mt-10">
            ルームを作成して、
            <br />
            イベントに参加するメンバーにURLを共有しましょう
          </p>

          {/* インプット部分 */}
          <div className="mx-4 sm:mx-20 lg:mx-40 ">
            {/* インプット：ルーム名 */}
            <InputText
              title="ルーム名"
              id="name"
              name="name"
              value={roomName}
              setValue={setRoomName}
              pValue={"Do'er 交流会"}
            // className="text-gray-700 text-sm
            //                   font-bold rounded
            //                   w-4/5"
            />
          </div>

          {/* 人数セクション */}

          <div className="">
            <SecTitle title={'人数'} />
            <div className="mt-4 flex justify-center">
              {/* -ボタン */}
              <button
                onClick={CountDown}
                className="
                          mr-4 h-12 w-10 grow-0 rounded-full bg-grey
                          text-lg text-white shadow-lg transition
                          hover:translate-y-0.5 hover:bg-thick-grey hover:shadow-sm">
                ー
              </button>

              {/* 人数表示部分 */}
              <div className="grow-0 rounded-full bg-purple px-10
                              py-1
                              text-2xl font-bold
                              text-white
                              sm:px-20">
                {count}
              </div>

              {/* プラスボタン */}
              <button
                onClick={CountUp}
                className="
                          ml-4 h-12 w-10 grow-0 rounded-full bg-grey
                          text-lg text-white shadow-lg transition hover:translate-y-0.5
                          hover:bg-thick-grey hover:shadow-sm">
                ＋
              </button>
            </div>
          </div>

          {/* チームURL発行 */}

          <div className="m-3 py-4 md:mx-20 md:py-10">

            {/* 発行ボタン */}
            <button
              onClick={CreateRoomId}
              className="
                        my-4 inline-block
                        rounded-lg
                        bg-purple
                        py-4 px-10 text-lg
                        font-semibold text-white shadow-lg transition
                        hover:translate-y-0.5 hover:bg-thick-purple hover:shadow-sm sm:text-xl"
            >ルームURL発行
            </button>

            {/* ルームID */}
            {roomId
              ? (
                <div className="my-4 flex justify-center">
                  <Link to={`/event?room=${roomId}`} className="truncate text-blue-600 underline">
                    {`https://meet-hack.vercel.app/event?room=${roomId}`}</Link>
                  <Popup
                    trigger={
                      <button
                        onClick={(e) => copyUrlToClipboard()}
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
                          <path stroke="none" d="M0 0h24v24H0z" />
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
              )
              : (null)}

          </div>
          {/* ルームIDセクション終了 */}

        </div>
      </div>
    </div>
  )
}
