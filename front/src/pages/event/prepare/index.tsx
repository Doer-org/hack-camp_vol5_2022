import { FC, useEffect, useState } from "react"
import { BaseStepWindow } from "@/components/parts/BaseStepWindow"
import { EventBackground } from "@/components/parts/EventBackground"
import { CMemberCard } from "@/pages/event/prepare/CMemberCard"
import { CWaiting } from "@/pages/event/prepare/CWaiting"
import { useWebSocket } from "@/hooks/useWebSocket"
import { useLocation, useNavigate } from "react-router-dom"
import { useMeetHackApi } from "@/hooks/useMeetHackApi"
import { IMember } from "@/types/data/member"

export const EventPrepare: FC = () => {
  const ws = useWebSocket()
  const navigate = useNavigate()
  const mhApi = useMeetHackApi()

  const [memberList, setMemberList] = useState<IMember[]>([])

  // 接続
  const onConnect = (socket: WebSocket): void => {
    console.log('ws connect')
    ws.sendEvent(socket, 'connect')
  }
  // 接続解除
  const onDisConnect = (): void => {
    console.log('ws disconnect')
  }
  // メッセージを受信

  // =========================== init
  // roomID の取得
  const search = new URLSearchParams(useLocation().search)
  const roomID: string | null = search.get("room")

  // webSocket 周りの処理
  if (roomID !== null) {
    // webSocket 接続
    const wsClient = ws.conn(roomID)
  }

  useEffect(() => {
    ws.addEvent('connect', onConnect)
    ws.addEvent('disconnect', onDisConnect)
    // socket.on('message', receiveMessage)
    if(roomID === null) {
      navigate("/event/new")
      return
    }

    mhApi.getRoomMembers({ roomID })
      .then((ok) => { setMemberList(ok) })
      .catch((error) => console.log(error))
  }, [])

  return (
    <EventBackground>
      <BaseStepWindow>
        <CWaiting isWaiting={true}/>
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