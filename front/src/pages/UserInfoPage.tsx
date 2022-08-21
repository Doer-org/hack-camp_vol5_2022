import { TGetRoomMembersInput, TGetRoomMembersOutput } from "@/types/api/member";
import React, { FC } from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import robot from "../assets/img/robot.png";
import UserInfoCard from "../components/templates/UserInfoCard";
import { useMeetHackApi } from "../hooks/useMeetHackApi"
import { TPostCreateNewRoomInput, TGetRoomInfoOutput } from "../types/api/room";
import * as TE from 'fp-ts/TaskEither';
import { pipe } from 'fp-ts/function'

export const UserInfoPage: FC = () => {

  const { createRoom, addNewMember, getRoomInfo, getRoomMembers } = useMeetHackApi()

  // query paramの取得
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const roomID = query.get("room") ?? undefined;

  const [roomInfo, setRoomInfo] = useState<TGetRoomInfoOutput>();
  const [users, setUsers] = useState<TGetRoomMembersOutput[]>([]);

  useEffect(() => {
    if (typeof (roomID) == "undefined") {
      console.log("クエリパラメータからroomIDを取得できませんでした。")
    } else {
      pipe(
        getRoomInfo({ roomID: roomID }),
        TE.match(
          (error) => console.log("Error: getRoomInfo" + error),
          (ok) => setRoomInfo(ok)
        )
      )()
      pipe(
        getRoomMembers({ roomID: roomID }),
        TE.match(
          (error) => console.log("Error: getRoomMembers" + error),
          (ok) => setUsers(ok)
        )
      )()
    }
  }, [])

  return (
    <div>
      {/* 一番外枠マージン2 */}
      <div className="bg-thin-purple 
                    py-10 
                    
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
            <p >{roomInfo?.name}</p>
          </div>

          <div className="mt-8 mb-2 mx-auto bg-grey-light rounded-lg shadow-lg p-4 bg-gray-100 mx-10">
            <p className="italic text-blue-darkest leading-normal text-lg">
              イベントお疲れ様でした<br />
            </p>
            <p className="text-center pt-8 text-grey-darker text-sm">
              イベント後も皆さんの情報を管理します🤖<br />
              気になる方のプロフィールを確認してみましょう！
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <img src={robot} width="100px" />
          </div>

          <div className="text-lg flex justify-between mx-6 sm:block">
            <div>
              <span>参加人数：</span>
              <span>{users.length}</span>
            </div>
            <div className="text-[0.8rem]">Date : {roomInfo && roomInfo.create_at ? roomInfo.create_at.toString().slice(0, 10) : null}</div>
          </div>
          <ul className="mx-6 my-8 sm:flex sm:justify-around">
            {users.map((user) => {
              return (
                <li className="sm:w-[45%] sm:mb-10">
                  <UserInfoCard user={user} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
