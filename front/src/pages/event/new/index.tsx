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
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const createRoom = async (): Promise<void> => {
    const res = await mtApi.createRoom({name: roomName, max_count: participant})()
    if (res._tag === "Right") {
      setRoomInfo(res.right)
    }
  }

  const copyToClipboard = async (): Promise<void> => {
    if (roomInfo != null) {
      await navigator.clipboard.writeText(`${window.location.origin}/event?room=${roomInfo.id}`)
      setIsCopied(true)
    }
  }

  return (
    <section className="min-h-screen from-doer-purple to-thin-purple lg:flex lg:items-center lg:justify-center lg:bg-gradient-to-br">
      <BaseStepWindow>
        <img className="mx-auto mb-16 w-48 lg:mb-5 lg:w-24" src={iconRoom} alt="room作成のアイコン"/>
        <h2 className="mb-20 text-center text-4xl lg:mb-3 lg:text-xl">
          ルーム作成
        </h2>
        <p className="mb-20 text-3xl text-gray-400 lg:mb-5 lg:text-base">
          ルームを作成して、イベントに参加するメンバーにURLを共有しましょう。
        </p>
        <div className="mb-20 space-y-10 lg:mb-12">
          <div className="text-4xl lg:text-base">
            <BaseInput setState={setRoomName} name="ルーム名" placeholder="エンジニア同好会" />
          </div>
          <RoomSliderBar value={participant} setState={setParticipant} />
          <span className="text-2xl text-gray-400 lg:text-xs">
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
            <div className="relative mt-20 lg:mt-10">
              <span className="mb-3 block text-3xl text-slate-700 lg:text-base">
                ルームURL
              </span>
              <input
                disabled
                type="text"
                value={`${window.location.origin}/event?room=${roomInfo.id}`}
                className="w-full rounded border px-3 py-2 text-4xl tracking-wider text-gray-400 lg:text-base"
              />
              <button
                onClick={copyToClipboard}
                className="absolute right-1 rounded bg-doer-purple py-1 px-5 text-white duration-500 hover:opacity-90 lg:mt-1"
              >
                <img className="h-12 lg:h-6" src={IconCopy} alt="clipboard"/>
              </button>
              {
                isCopied
                  ?
                  <span className="mt-5 block text-3xl text-doer-purple lg:mt-1 lg:text-base">URLをコピーしました！</span>
                  :
                  <></>
              }
            </div>
        }
      </BaseStepWindow>
    </section>
  )
}