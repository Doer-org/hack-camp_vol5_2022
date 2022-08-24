import { FC, useEffect, useState } from 'react'
import Socket from '../ws/socket'

import { useLocation, useNavigate } from 'react-router-dom'
import UserPrepareCard from '../components/templates/UserPrepareCard'
import robot from '../assets/img/robot.png'

import { useMeetHackApi } from '../hooks/useMeetHackApi'
import { TGetRoomMembersOutput } from '@/types/api/member'
 
import { pipe } from 'fp-ts/lib/function'
import * as TE from 'fp-ts/TaskEither'
import axios from 'axios'

export const UserListPage: FC = () => {
  const { getRoomInfo, getRoomMembers,getRoomFinish } = useMeetHackApi()

  const search = useLocation().search
  const query = new URLSearchParams(search)
  const roomID = query.get('room') ?? undefined

  // websocket接続準備 
  // const ws = new WebSocket(`wss://go-server-doer-vol5.herokuapp.com/ws?room=${roomID}`)
  const ws = new WebSocket(`ws://localhost:3000/ws?room=${roomID}`)
  const socket = new Socket(ws)

  const [userList, setUserList] = useState<TGetRoomMembersOutput[]>([])
  const [roomName, setRoomName] = useState('')
  const [maxCount, setMaxCount] = useState(0)
  const [nowCount, setNowCount] = useState(0)

  const onConnect = () => {
    console.log('ws connect')
    ws.send('connect')
  }

  const onDisConnect = () => {
    console.log('ws disconnect')
  }

  const receiveMessage = (data) => {
    // websocketで通信を受け取るたびにmember更新
    if (data) {
      // //get member
      console.log('receive data', data)
      if (typeof (roomID) === 'undefined') {
        console.log('クエリパラメータからroomIDを取得できませんでした。')
      } else {
        pipe(
          getRoomMembers({ roomID }),
          TE.match(
            (error) => console.log('Error: getRoomMembers ' + error.error),
            (ok) => {  
              setUserList(ok)
              setNowCount(ok.length)
            }
          )
        )()
        pipe(
          getRoomInfo({ roomID }),
          TE.match(
            (error) => console.log('Error: getRoomInfo ' + error.error),
            (ok) => {
              setRoomName(ok.name)
              setMaxCount(ok.max_count)
            }
          )
        )()
      }
    }
  }
  useEffect(() => {
    // connect, disconnect, message eventの追加
    socket.on('connect', onConnect)
    socket.on('disconnect', onDisConnect)
    socket.on('message', receiveMessage)

    // 初回のmemberアクセス

    if (typeof (roomID) === 'undefined') {
      console.log('クエリパラメータからroomIDを取得できませんでした。')
    } else {
      // pipe(
      //   getRoomMembers({ roomID }),
      //   TE.match(
      //     (e) => console.log('Error : getRoomMembers'),
      //     (ok) => {
            
      //       // console.log(ok)
      //       setUserList(ok)
      //     }
      //   )
      // )()
      console.log("bbbbb")
      axios
      .get(`http://localhost:8080/member/all?room=${roomID}`)
      .then((res)=> {
        console.log("aaaaa")
        setUserList(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })

    }
    console.log('useEffect called')
    // return () => { socket.ws.close() }
  }, [])

  const navigate = useNavigate()

  const eventStart = () => {
    socket.ws.close() 
    // pipe(
    //   getRoomFinish(roomID),
    //   TE.match(
    //     (error) => console.log(error),
    //     (ok) => navigate(`/event/questions?room=${roomID}`)
    //   )
    // )
    axios 
      // .get(`https://go-server-doer-vol5.herokuapp.com/room/finish/${roomID}`)
      .get(`http://localhost:8080/room/finish/${roomID}`)
      .then(() => { 
        navigate(`/event/questions?room=${roomID}`);
      })
      .catch((err) => { 
        console.log(err)
      })
  }

  return (
    <>
      <div className="h-screen bg-thin-purple py-10 px-2">
        <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-lg md:max-w-lg"></div>
        <div className="card flex flex-col items-center justify-center p-4 ">

          <div className="mb-12  block max-w-sm rounded-lg bg-white text-center shadow-lg">

            <div className="mb-4 rounded-t-lg bg-purple p-4 text-2xl font-bold tracking-wider text-white">
              <p >{roomName}</p>
            </div>
            <div className="px-12 py-4">
              {
                maxCount > nowCount
                  ? <>
                    <p className="text-2xl font-bold text-gray-800">準備中...</p>
                    <div className="flex justify-center">
                      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
                    </div>

                    <div className="bg-grey-light mx-auto mt-8 mb-2 rounded-lg bg-gray-100 p-4 shadow-lg">
                      <p className="text-blue-darkest text-lg italic leading-normal">
                        他のmemberを待っています<br />
                        現在 {nowCount} / {maxCount} 待機中
                      </p>
                    </div>

                    <div className="mb-8 flex justify-center">
                      <img src={robot} width="100px" />
                    </div>
                  </>
                  : <>
                    <p className="text-2xl font-bold text-gray-800">準備完了！</p>

                    <div className="bg-grey-light mx-auto mt-8 mb-2 rounded-lg bg-gray-100 p-4 shadow-lg">
                      <p className="text-blue-darkest text-lg italic leading-normal">
                        イベントを開始する準備ができました<br />
                        皆さんは準備できましたか？
                      </p>
                      <p className="text-grey-darker pt-8 text-center text-sm">
                        イベントを開始する場合はページ下部の<br />
                        "Start"ボタンを押してください
                      </p>
                    </div>

                    <div className="mb-8 flex justify-center">
                      <img src={robot} width="100px" />
                    </div>
                  </>
              }
              <ul>
                {userList.map((user) => {
                  return (
                    <li>
                      <UserPrepareCard user={user} />
                    </li>
                  )
                })}
              </ul>
              {
                maxCount <= nowCount
                  ? <>

                    <button
                      className="
                    mb-4 inline-block rounded rounded-full
                    bg-purple py-2 px-8 text-2xl
                    font-semibold font-bold text-white shadow-lg transition
                    hover:translate-y-0.5 hover:bg-thick-purple hover:shadow-sm
                  "
                      onClick={eventStart}
                    >
                      Start
                    </button>
                  </>
                  : null
              }

            </div>
          </div>
        </div>
      </div>

    </>

  )
}
