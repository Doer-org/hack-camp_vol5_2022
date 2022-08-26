import { TGetRoomMembersOutput } from '@/types/api/member'
import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import robot from '../assets/img/robot.png'
import UserInfoCard from '../components/templates/UserInfoCard'
import { useMeetHackApi } from '../hooks/useMeetHackApi'
import { TGetRoomInfoOutput } from '../types/api/room' 

export const UserInfoPage: FC = () => {
  const { getRoomInfo, getRoomMembers } = useMeetHackApi()

  // query paramの取得
  const search = useLocation().search
  const query = new URLSearchParams(search)
  const roomID = query.get('room') ?? undefined

  const [roomInfo, setRoomInfo] = useState<TGetRoomInfoOutput>()
  const [users, setUsers] = useState<TGetRoomMembersOutput[]>([])
    
  useEffect(() => {
    if (typeof (roomID) === 'undefined') {
      console.log('クエリパラメータからroomIDを取得できませんでした。')
    } else { 
      getRoomInfo({ roomID })
      .then((ok) => setRoomInfo(ok) )
      .catch((error) => console.log(error)) 

      getRoomMembers({ roomID })
      .then((ok) => setUsers(ok))
      .catch((error) => console.log(error)) 
    }
  }, [])

  return (
    <div>
      {/* 一番外枠マージン2 */}
      <div className="flex
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
            <p >{roomInfo?.name}</p>
          </div>

          <div className="bg-grey-light mx-auto mx-10 mt-8 mb-2 rounded-lg bg-gray-100 p-4 shadow-lg">
            <p className="text-blue-darkest text-lg italic leading-normal">
              イベントお疲れ様でした<br />
            </p>
            <p className="text-grey-darker pt-8 text-center text-sm">
              イベント後も皆さんの情報を管理します🤖<br />
              気になる方のプロフィールを確認してみましょう！
            </p>
          </div>

          <div className="mb-8 flex justify-center">
            <img src={robot} width="100px" />
          </div>

          <div className="mx-6 flex justify-between text-lg sm:block">
            <div>
              <span>参加人数：</span>
              <span>{users.length}</span>
            </div>
            <div className="text-[0.8rem]">Date : {(roomInfo != null) && roomInfo.create_at ? roomInfo.create_at.toString().slice(0, 10) : null}</div>
          </div>
          <ul className="mx-6 my-8 sm:flex sm:justify-around">
            {users.map((user) => {
              return (
                <li className="sm:mb-10 sm:w-[45%]">
                  <UserInfoCard user={user} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
