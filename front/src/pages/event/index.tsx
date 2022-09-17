import { FC, useEffect, useState } from "react"
import { BaseStepWindow } from "@/components/parts/BaseStepWindow"
import { EventBackground } from "@/components/parts/EventBackground"
import { SecJoinMemberCard } from "@/pages/event/SecJoinMemberCard"
import { BaseRectButton } from "@/components/parts/BaseRectButton"
import { useLocation, useNavigate } from "react-router-dom"
import { useMeetHackApi } from "@/hooks/useMeetHackApi"
import { IMember } from "@/types/domain/member"
import { IGetRoomInfoOutput } from "@/types/api/room"

export const EventPage: FC = () => {
  const search = new URLSearchParams(useLocation().search)
  const navigate = useNavigate()
  const mhApi = useMeetHackApi()

  const [roomID, setRoomID] = useState<string|null>(search.get("room"))
  const [roomMembers, setRoomMembers] = useState<IMember[]>([])
  const [roomInfo, setRoomInfo] = useState<IGetRoomInfoOutput>()

  // room 情報を取得
  const getRoomInfo = (roomID: string): void => {
    mhApi.getRoomInfo({ roomID })
      .then((ok) => {
        if (ok.status === "finished") {
          setRoomInfo(ok)
        } else {
          navigate(`/event/step0?room=${roomID}`)
        }
      })
      .catch((error) => console.error(error))
  }

  // メンバー一覧を取得
  const getRoomMembers = (roomID: string): void => {
    mhApi.getRoomMembers({ roomID })
      .then((ok) => {
        setRoomMembers(ok)
      })
      .catch((error) => console.error(error))
  }

  // 新しいイベントを始める
  const newEvent = (): void => {
    navigate(`/event/new`)
  }

  useEffect(() => {
    // roomID が無いとき
    if (roomID === null) {
      navigate(`/event/new`)
      return
    }
    getRoomInfo(roomID)
    getRoomMembers(roomID)
  }, [])

  return (
    <EventBackground>
      <BaseStepWindow>
        {
          roomInfo !== undefined
            ?
            <div className={"space-y-12 lg:space-y-6"}>
              <div className={"text-center text-doer-purple"}>
                <p className={"mb-10 text-center text-6xl font-bold lg:mb-3 lg:text-3xl"}>Let's Meet Hack ! 🛠️</p>
                <p className={"mb-16 text-center text-3xl leading-relaxed lg:mb-5 lg:text-base"}>
                  本日参加したメンバーです。
                  <br/>
                  連絡先の交換はくれぐれもお忘れなく！
                </p>
              </div>
              <SecJoinMemberCard members={roomMembers} roomDate={roomInfo?.create_at} roomName={roomInfo.name} />
              <div className={"mx-auto max-w-2xl lg:max-w-md"}>
                <BaseRectButton text={"新しいイベントを作成する"} isWhite={true} onClick={newEvent} />
              </div>
            </div>
            :
            <></>
        }
      </BaseStepWindow>
    </EventBackground>
  )
}