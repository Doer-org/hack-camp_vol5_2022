import {FC, useState} from "react"
import {BaseStepWindow} from "@/components/parts/BaseStepWindow"
import {EventBackground} from "@/components/parts/EventBackground"
import {BaseInput} from "@/components/parts/BaseInput"
import {BaseRectButton} from "@/components/parts/BaseRectButton"
import IconUser from "@/assets/img/icon_user.png"

export const EventStep1: FC = () => {
  const [name, setName] = useState<string>("")

  return (
    <EventBackground>
      <BaseStepWindow>
        <img className="mx-auto mb-16 h-48 lg:mb-5 lg:h-24" src={IconUser} alt="ユーザ登録のアイコン"/>
        <h2 className="mb-20 text-center text-4xl lg:mb-10 lg:text-lg">
          自己紹介の登録
        </h2>
        <div className={"mb-12 space-y-8 text-4xl lg:space-y-6 lg:text-base"}>
          <BaseInput name={"ユーザー名 (必須)"} placeholder={"山田 太郎 "} setState={setName}/>
          <BaseInput name={"好きな言語・フレームワーク"} placeholder={"golang"} setState={setName}/>
          <div className={"space-y-1"}>
            <BaseInput name={"GitHub"} placeholder={"your account"} setState={setName}/>
            <span className={"block text-2xl text-gray-400 lg:text-sm"}>@ の入力は不要です</span>
          </div>
          <div className={"space-y-1"}>
            <BaseInput name={"Twitter"} placeholder={"your account"} setState={setName}/>
            <span className={"block text-2xl text-gray-400 lg:text-sm"}>@ の入力は不要です</span>
          </div>
          <BaseInput name={"ひとこと"} placeholder={"寿司が好きです 🍣"} setState={setName}/>
        </div>
        <BaseRectButton text={"次へ"}/>
      </BaseStepWindow>
    </EventBackground>
  )
}