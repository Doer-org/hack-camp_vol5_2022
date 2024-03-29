import { FC, useState,useEffect } from "react"
import { BaseStepWindow } from "@/components/parts/BaseStepWindow"
import iconRoom from "@/assets/img/icon_room.png"
import { BaseInput } from "@/components/parts/BaseInput"
import { RoomSliderBar } from "@/components/parts/RoomSliderBar"
import { BaseRectButton } from "@/components/parts/BaseRectButton"
import IconCopy from "@/assets/img/icon_copy.png"
import { useMeetHackApi } from "@/hooks/useMeetHackApi"
import { IPostCreateNewRoomOutput } from "@/types/api/room"
import { FormValidation } from "@/components/parts/FormValidation"
import { useValidation } from "@/hooks/useValidation"
import QRCode from 'qrcode.react'


export const EventNew: FC = () => {
  const [roomName, setRoomName] = useState<string>("")
  const [participant, setParticipant] = useState<number>(2)
  const [roomInfo, setRoomInfo] = useState<IPostCreateNewRoomOutput>()
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [load, setLoad] = useState<boolean>(false)

  // validation 条件
  const validateSchema = {
    roomName: roomName !== ""
  }

  const mtApi = useMeetHackApi()
  const validation = useValidation(validateSchema)

  const createRoom = async (): Promise<void> => {
    setLoad(true ? validateSchema.roomName : false)
    validation.setIsValidateShow(true)
    // validation check が OK のとき
    if (validation.formStatusOK()) {
      mtApi
        .createRoom({ name: roomName, max_count: participant })
        .then((ret) => setRoomInfo(ret))
        .catch((error) => console.log(error))
    }
  }

  const copyToClipboard = async (): Promise<void> => {
    if (roomInfo != null) {
      await navigator.clipboard.writeText(
        `${window.location.origin}/event/step0?room=${roomInfo.id}`
      )
      setIsCopied(true)
    }
  }

  return (
    <section className="min-h-screen from-doer-purple to-thin-purple lg:flex lg:items-center lg:justify-center lg:bg-gradient-to-br">
      <BaseStepWindow>
        <img
          className="mx-auto mb-16 w-48 lg:mb-5 lg:w-24"
          src={iconRoom}
          alt="room作成のアイコン"
        />
        <h2 className="mb-20 text-center text-6xl lg:mb-3 lg:text-2xl">
          ルーム作成
        </h2>
        <p className="mb-20 text-center text-3xl text-gray-400 lg:mb-5 lg:text-base">
          ルームを作成して、イベントに参加するメンバーにURLを共有しましょう。
        </p>
        <div className="mb-20 space-y-10 lg:mb-12">
          <div className="text-4xl lg:text-base">
            <BaseInput value={roomName} setState={setRoomName} name="ルーム名" placeholder="エンジニア同好会" />
            <FormValidation
              message={"ルーム名は必須項目です"}
              isValid={validateSchema.roomName}
              isShow={validation.isValidateShow}
            />
          </div>
          <RoomSliderBar value={participant} setState={setParticipant} />
          <span className="text-2xl text-gray-400 lg:text-xs">
            ※ 参加人数ちょうどでなくてもイベントを進行できます。
          </span>
        </div>
        <div onClick={createRoom}>
          <BaseRectButton text="ルームURL発行" />
        </div>
        {typeof roomInfo === 'undefined' ? (
          <><Load load={load && validateSchema.roomName} /></>
        ) : (
          <div className="relative mt-20 lg:mt-10">
            <div>
              <QRCode
                className="mx-auto mb-3 rounded border border-doer-purple p-2"
                size={300}
                value={`${window.location.origin}/event/step0?room=${roomInfo.id}`}
              />
            </div>
            <span className="mb-3 block text-3xl text-slate-700 lg:text-base">
              ルームURL
            </span>
            <input
              disabled
              type="text"
              value={`${window.location.origin}/event/step0?room=${roomInfo.id}`}
              className="w-full rounded border px-3 py-2 text-4xl tracking-wider text-gray-400 lg:text-base"
            />
            <button
              onClick={copyToClipboard}
              className="absolute right-1 rounded bg-doer-purple py-1 px-5 text-white duration-500 hover:opacity-90 lg:mt-1"
            >
              <img className="h-12 lg:h-6" src={IconCopy} alt="clipboard" />
            </button>
            {isCopied ? (
              <>
                <span className="mt-5 block text-3xl text-doer-purple lg:mt-1 lg:text-base">
                  URLをコピーしました！
                </span>
                <span className="mt-5 block text-3xl text-doer-purple lg:mt-1 lg:text-base">
                  <a className="border-b-2 border-doer-purple" href={`${window.location.origin}/event/step0?room=${roomInfo.id}`} target="_blank">
                    こちらからルームにアクセスする
                  </a>
                </span>
              </>
            ) : (
              <></>
            )}
          </div>
        )}
      </BaseStepWindow>
    </section>
  )
}

const Load:React.FC<{load:boolean}> = ({load})=>{
  useEffect(()=>{},[load])
  return (
    load ? (
    <div className="relative mt-32 lg:mt-10">
      <div className="flex justify-center">
        <div className="animate-spin h-24 w-24 border-4 border-doer-purple rounded-full border-t-transparent"></div>
      </div>
    </div>
    ):(
      <></>
    )
  )
}
