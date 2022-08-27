import { FC, useState, useEffect } from 'react'
import InputText from '../components/templates/InputText'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.png'

import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'

import { useMeetHackApi } from '../hooks/useMeetHackApi'
import { TPostAddNewMemberInput } from '@/types/api/member'
import { TApiError } from '@/types/api/apiError.js'
import { TGetRoomInfoOutput } from '@/types/api/room'

export const RegisterUserPage: FC = () => {
  const { createRoom, addNewMember, getRoomInfo, getRoomMembers } =
    useMeetHackApi()

  // query paramの取得
  const search = useLocation().search
  const query = new URLSearchParams(search)
  const roomID: string | undefined = query.get('room') ?? undefined

  // createUser data
  const [name, setName] = useState('') // 必須
  const [lang, setLang] = useState('') // 必須
  const [comment, setComment] = useState('')
  const [github, setGithub] = useState('')
  const [twitter, setTwitter] = useState('')
  const [question, setQuestion] = useState('') // 必須

  // Step bar
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)

  // room status
  const [roomStatus, setRoomStatus] = useState('')

  const navigate = useNavigate()

  const createUserData = () => {
    console.log(roomID)
    if (typeof roomID === 'undefined') {
      console.log('roomIDをクエリパラメータから取得できませんでした。')
    } else {
      const input: TPostAddNewMemberInput = {
        name,
        lang,
        comment,
        github,
        twitter,
        question,
        roomID
      }

      pipe(
        addNewMember(input),
        TE.match(
          (error: TApiError) =>
            console.log('Error: createUserData ' + error.error),
          (ok) => navigate(`/event/prepare?room=${roomID}`)
        )
      )()
    }
  }

  useEffect(() => {
    if (typeof roomID === 'undefined') {
      console.log('roomIDをクエリパラメータから取得できませんでした。')
    } else {
      pipe(
        getRoomInfo({ roomID }),
        TE.match(
          (error: TApiError) =>
            console.log('Error : getRoomInfo ' + error.error),
          (ok: TGetRoomInfoOutput) => {
            if (ok.status === 'finished') {
              navigate(`/event/user/list?room=${roomID}`)
            }
          }
        )
      )()
    }
  }, [])

  return (
    <div className="h-screen bg-thin-purple py-10 px-2">
      <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-lg md:max-w-lg"></div>
      <div className="card flex flex-col items-center justify-center p-4 ">
        {!first && !second && !third ? (
          <>
            {/* ----- 0 step ------ */}
            <div className="mb-12  block max-w-sm rounded-lg bg-white text-center shadow-lg">
              <div className="mb-4 rounded-t-lg bg-purple py-4 text-3xl font-bold tracking-wider text-white">
                <p>ユーザー登録</p>
              </div>

              <div className="px-12 py-4 ">
                <div className="my-2 w-full w-60 px-2 py-1">
                  <img src={logo} className="mb-4" />
                  <p>ユーザーの登録フォームです</p>
                  <br></br>
                  <div className="rounded-xl bg-green-100 p-2 shadow-lg">
                    <small className="m-2 block text-sm font-bold text-gray-800">
                      Tips 💡
                    </small>
                    <p className="text-sm text-gray-700">
                      イベント終了後に入力した<br></br>
                      情報がRoomメンバーに<br></br>
                      共有されます！<br></br>
                      できる限り埋めましょう！
                    </p>
                  </div>
                </div>

                <button
                  className="
                            mb-4 inline-block rounded rounded-full
                            bg-purple py-2 px-8 text-2xl
                            font-semibold font-bold text-white shadow-lg transition
                            hover:translate-y-0.5 hover:bg-thick-purple hover:shadow-sm
                          "
                  onClick={() => {
                    setFirst(!first)
                  }}
                >
                  Start
                </button>
              </div>
            </div>

            {/* ----- step bar ------ */}
            <div className="mx-auto w-11/12 lg:w-2/6">
              <div className="flex h-1 items-center justify-between bg-gray-200">
                <div className="relative -mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow">
                  <div className="h-3 w-3 rounded-full bg-fuchsia-500"></div>
                  <div className="absolute right-0 -mr-2">
                    <div className="relative mt-16 -mr-24 w-36 rounded bg-white px-2 py-1 shadow-lg">
                      <p
                        tabIndex={0}
                        className="text-base font-bold text-fuchsia-700 focus:outline-none"
                      >
                        Step 0 : ようこそ！
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex w-1/3 justify-end">
                  <div className="h-6 w-6 rounded-full bg-white shadow"></div>
                </div>

                <div className="flex w-1/3 justify-end">
                  <div className="h-6 w-6 rounded-full bg-white shadow"></div>
                </div>

                <div className="flex w-1/3 justify-end">
                  <div className="h-6 w-6 rounded-full bg-white shadow"></div>
                </div>
              </div>
            </div>
            {/* ----- step bar ------ */}
          </>
        ) : null}
        {first && !second && !third ? (
          <>
            {/* ----- 1 step ------ */}
            <div className="mb-12  block max-w-sm rounded-lg bg-white text-center shadow-lg">
              <div className="mb-4 rounded-t-lg bg-purple py-4 text-3xl font-bold tracking-wider text-white">
                <p>ユーザー登録</p>
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
                    pValue={'React, Golang, ...'}
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
                    pValue={'よろしくお願いします！'}
                  />
                </div>

                <button
                  className="
                        mb-4 inline-block rounded rounded-full
                        bg-purple py-2 px-8 text-2xl
                        font-semibold font-bold text-white shadow-lg transition
                        hover:translate-y-0.5 hover:bg-thick-purple hover:shadow-sm
                      "
                  onClick={() => {
                    setSecond(!second)
                  }}
                  disabled={!name}
                >
                  Next
                </button>
              </div>
            </div>

            {/* ----- step bar ------ */}
            <div className="mx-auto w-11/12 lg:w-2/6">
              <div className="flex h-1 items-center justify-between bg-gray-200">
                <div className="relative flex h-1 w-1/3 items-center justify-between bg-fuchsia-500">
                  <div className="absolute right-0 -mr-2">
                    <div className="relative mt-16 -mr-24 w-48 rounded bg-white px-2 py-1 shadow-lg">
                      <p
                        tabIndex={0}
                        className="text-base font-bold text-fuchsia-700 focus:outline-none"
                      >
                        Step 1 : 基本情報の入力
                      </p>
                    </div>
                  </div>

                  <div className="-ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-500 shadow">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg"
                      alt="check"
                    />
                  </div>
                  <div className="relative -mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow">
                    <div className="h-3 w-3 rounded-full bg-fuchsia-500"></div>
                  </div>
                </div>

                <div className="flex w-1/3 justify-end">
                  <div className="h-6 w-6 rounded-full bg-white shadow"></div>
                </div>

                <div className="flex w-1/3 justify-end">
                  <div className="h-6 w-6 rounded-full bg-white shadow"></div>
                </div>
              </div>
            </div>
            {/* ----- step bar ------ */}
          </>
        ) : null}
        {second && !third ? (
          <>
            {/* ----- 2 step ------ */}
            <div className="mb-12  block max-w-sm rounded-lg bg-white text-center shadow-lg">
              <div className="mb-4 rounded-t-lg bg-purple py-4 text-3xl font-bold tracking-wider text-white">
                <p>ユーザー登録</p>
              </div>

              <div className="px-12 py-4">
                <div className="form-group mb-6 w-60">
                  <InputText
                    title="GitHub ( ユーザー名 )"
                    id="github"
                    name="github"
                    value={github}
                    setValue={setGithub}
                    pValue={'Doer-org'}
                  />
                </div>

                <div className="form-group mb-6">
                  <InputText
                    title="Twitter ( ユーザーID )"
                    id="twitter"
                    name="twitter"
                    value={twitter}
                    setValue={setTwitter}
                    pValue={'du_doer'}
                  />
                  <small className="block text-xs text-gray-600">
                    @以降のIDの入力をお願いします
                  </small>
                </div>

                <button
                  className="
                        mb-4 inline-block rounded rounded-full
                        bg-purple py-2 px-8 text-2xl
                        font-semibold font-bold text-white shadow-lg transition
                        hover:translate-y-0.5 hover:bg-thick-purple hover:shadow-sm
                      "
                  onClick={() => {
                    setThird(!third)
                  }}
                >
                  Next
                </button>
              </div>
            </div>

            {/* ----- step bar ------ */}
            <div className="mx-auto w-11/12 lg:w-2/6">
              <div className="flex h-1 items-center justify-between bg-gray-200">
                <div className="flex h-1 w-1/3 items-center bg-fuchsia-500">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-500 shadow">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg"
                      alt="check"
                    />
                  </div>
                </div>

                <div className="relative flex h-1 w-1/3 items-center justify-between bg-fuchsia-500">
                  <div className="absolute right-0 -mr-2">
                    <div className="relative mt-16 -mr-24 w-44 rounded bg-white px-2 py-1 shadow-lg">
                      <p
                        tabIndex={0}
                        className="text-base font-bold text-fuchsia-700 focus:outline-none"
                      >
                        Step 2 : SNS情報入力
                      </p>
                    </div>
                  </div>

                  <div className="-ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-500 shadow">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg"
                      alt="check"
                    />
                  </div>
                  <div className="relative -mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow">
                    <div className="h-3 w-3 rounded-full bg-fuchsia-500"></div>
                  </div>
                </div>

                <div className="flex w-1/3 justify-end">
                  <div className="h-6 w-6 rounded-full bg-white shadow"></div>
                </div>
              </div>
            </div>
            {/* ----- step bar ------ */}
          </>
        ) : null}
        {third ? (
          <>
            {/* ----- 3 step ------ */}
            <div className="mb-12  block max-w-sm rounded-lg bg-white text-center shadow-lg">
              <div className="mb-4 rounded-t-lg bg-purple py-4 text-3xl font-bold tracking-wider text-white">
                <p>ユーザー登録</p>
              </div>

              <div className="px-12 py-4">
                <div className="form-group mb-6 w-60">
                  <InputText
                    title="他の人に聞いてみたい質問"
                    id="question"
                    name="question"
                    value={question}
                    setValue={setQuestion}
                    pValue={'得意な言語は?'}
                  />
                  <small className="block text-xs text-red-400">
                    Column "question" cannot be null 🐬
                  </small>
                </div>

                <button
                  className="
                        mb-4 inline-block rounded rounded-full
                        bg-purple py-2 px-8 text-2xl
                        font-semibold font-bold text-white shadow-lg transition
                        hover:translate-y-0.5 hover:bg-thick-purple hover:shadow-sm
                      "
                  onClick={createUserData}
                  disabled={!question}
                >
                  Send
                </button>
              </div>
            </div>

            {/* ----- step bar ------ */}
            <div className="mx-auto w-11/12 lg:w-2/6">
              <div className="flex h-1 items-center justify-between bg-gray-200">
                <div className="flex h-1 w-1/3 items-center bg-fuchsia-500">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-500 shadow">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg"
                      alt="check"
                    />
                  </div>
                </div>

                <div className="flex h-1 w-1/3 items-center bg-fuchsia-500">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-500 shadow">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg"
                      alt="check"
                    />
                  </div>
                </div>

                <div className="relative flex h-1 w-1/3 items-center justify-between bg-fuchsia-500">
                  <div className="absolute right-0 -mr-2">
                    <div className="relative mt-16 w-40 rounded bg-white px-2 py-1 shadow-lg">
                      <p
                        tabIndex={0}
                        className="text-base font-bold text-fuchsia-700 focus:outline-none"
                      >
                        Step 3 : 質問の入力
                      </p>
                    </div>
                  </div>

                  <div className="-ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-500 shadow">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg"
                      alt="check"
                    />
                  </div>
                  <div className="relative -mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow">
                    <div className="h-3 w-3 rounded-full bg-fuchsia-500"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* ----- step bar ------ */}
          </>
        ) : null}
      </div>
    </div>
  )
}
