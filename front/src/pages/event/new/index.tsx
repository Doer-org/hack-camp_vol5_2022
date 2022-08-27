import {FC, useState} from "react"
import {BaseStepWindow} from "@/components/parts/BaseStepWindow"
import iconRoom from "@/assets/img/icon_room.png"
import {BaseInput} from "@/components/parts/BaseInput"
import {RoomSliderBar} from "@/components/parts/RoomSliderBar"
import {BaseRectButton} from "@/components/parts/BaseRectButton"
import IconCopy from "@/assets/img/icon_copy.png"
import {useMeetHackApi} from "@/hooks/useMeetHackApi"
import {TPostCreateNewRoomOutput} from "@/types/api/room"

export const EventNew: FC = () => {
  const mtApi = useMeetHackApi()

  const [roomName, setRoomName] = useState<string>("")
  const [participant, setParticipant] = useState<number>(2)
  const [roomInfo, setRoomInfo] = useState<TPostCreateNewRoomOutput>()

  const createRoom = async (): Promise<void> => {
    const res = await mtApi.createRoom({name: roomName, max_count: participant})()
    if(res._tag === "Right") {
      setRoomInfo(res.right)
    }
  }

  return(
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-doer-purple to-thin-purple">
      <BaseStepWindow>
        <img className="mx-auto mb-5 w-24" src={iconRoom} alt="room作成のアイコン"/>
        <h2 className="mb-3 text-center text-xl">
          ルーム作成
        </h2>
        <p className="mb-5 text-gray-400">
          ルームを作成して、イベントに参加するメンバーにURLを共有しましょう。
        </p>
        <div className="mb-12 space-y-10">
          <BaseInput setState={setRoomName} name="ルーム名" placeholder="エンジニア同好会" />
          <RoomSliderBar value={participant} setState={setParticipant} />
          <span className="text-xs text-gray-400">
            ※ 人数はあとからでも変更できます。
          </span>
        </div>
        <div onClick={createRoom}>
          <BaseRectButton text="ルームURL発行" />
        </div>
        {
          typeof roomInfo === "undefined"
            ?
            <></>
            :
            <div className="relative mt-10">
              <span className="mb-3 block text-slate-700">
                ルームURL
              </span>
              <input
                disabled
                type="text"
                value={`${window.location.origin}/event?id=${roomInfo.id}`}
                className="w-full rounded border px-3 py-2 tracking-wider text-gray-400"
              />
              <button className="absolute right-1 mt-1 rounded bg-doer-purple py-1 px-5 text-white duration-500 hover:opacity-90">
                <img className="w-6" src={IconCopy} alt=""/>
              </button>
            </div>
        }
      </BaseStepWindow>
    </section>
  )
}