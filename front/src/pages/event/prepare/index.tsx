import { FC, useEffect, useState } from "react"
import { BaseStepWindow } from "@/components/parts/BaseStepWindow"
import { EventBackground } from "@/components/parts/EventBackground"
import { CMemberCard } from "@/pages/event/prepare/CMemberCard"
import { CWaiting } from "@/pages/event/prepare/CWaiting"
import { useWebSocket } from "@/hooks/useWebSocket"
import { useLocation, useNavigate } from "react-router-dom"
import { useMeetHackApi } from "@/hooks/useMeetHackApi"
import { IMember } from "@/types/data/member"
import { CEventStartMsg } from "@/pages/event/prepare/CEventStartMsg"

export const EventPrepare: FC = () => {
  const ws = useWebSocket()
  const navigate = useNavigate()
  const mhApi = useMeetHackApi()

  const search = new URLSearchParams(useLocation().search)

  const [memberList, setMemberList] = useState<IMember[]>([])
  const [roomName, setRoomName] = useState<string>("")
  const [maxCount, setMaxCount] = useState<number>(2)
  const [roomID, setRoomID] = useState<string|null>(search.get("room"))

  // 参加済みの Room メンバーを取得
  const updateMemberList = (roomID: string): void => {
    mhApi.getRoomMembers({ roomID })
      .then((ok) => { setMemberList(ok) })
      .catch((error) => console.error(error))
  }

  // Room 情報の取得
  const getRoomInfo = (roomID: string): void => {
    mhApi.getRoomInfo({ roomID })
      .then((ok) => {
        setRoomName(ok.name)
        setMaxCount(ok.max_count)
      })
      .catch((error) => console.error(error))
  }

  const EventStart = (roomID: string): void => {
    mhApi.getRoomFinish(roomID)
      .then((ok) => navigate(`/event/questions?room=${roomID}`))
      .catch((error) => console.error(error))
  }

  // =========================== init
  useEffect(() => {
    if(roomID === null) {
      navigate("/event/new")
      return
    }
    // webSocket 接続
    const wsClient = ws.conn(roomID)
    ws.sendEvent(wsClient, 'joinNewMember')
    ws.receiveEvent(
      wsClient,
      event => {
        if (event.data === "joinNewMember") {
          // すでに参加済みの Room メンバーを取得
          updateMemberList(roomID)
        }
      }
    )
    // Room の情報を取得
    getRoomInfo(roomID)
    // ページを離れるとき，websocket を閉じる
    return () => {
      ws.disconnect(wsClient)
    }
  }, [])

  return (
    <EventBackground>
      <BaseStepWindow>
        <div className={"mb-20 text-center lg:mb-8"}>
          <span className={"mr-4 text-5xl tracking-wider lg:mr-2 lg:text-2xl"}>
            {roomName}
          </span>
          <span className={"text-3xl lg:text-base"}>
            の待機室
          </span>
        </div>
        <CWaiting maxCount={maxCount} current={memberList.length} />
        {
          roomID !== null
            ?
            <CEventStartMsg onEventStart={() => EventStart(roomID)} maxCount={maxCount} current={memberList.length} />
            :
            <></>
        }
        <div className={"space-y-4"}>
          {
            memberList?.map((member, idx) => {
              return (
                <CMemberCard key={idx} member={member} />
              )
            })
          }
        </div>
      </BaseStepWindow>
    </EventBackground>
  )
}