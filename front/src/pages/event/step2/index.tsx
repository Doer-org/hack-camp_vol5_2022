import {FC, useState} from "react"
import {EventBackground} from "@/components/parts/EventBackground"
import {BaseStepWindow} from "@/components/parts/BaseStepWindow"
import {BaseInput} from "@/components/parts/BaseInput"
import IconUser from "@/assets/img/icon_user.png"
import {BaseRectButton} from "@/components/parts/BaseRectButton"

export const EventStep2: FC = () => {
  const [question, setQuestion] = useState<string>("")

  return (
    <EventBackground>
      <BaseStepWindow>
        <img className="mx-auto mb-16 h-48 lg:mb-5 lg:h-24" src={IconUser} alt="ユーザ登録のアイコン"/>
        <h2 className="mb-20 text-center text-4xl lg:mb-10 lg:text-lg">
          質問の登録
        </h2>
        <div className={"mb-24 space-y-8 text-4xl lg:mb-12 lg:space-y-6 lg:text-base"}>
          <BaseInput name={"他の人に聞いてみたい質問"} placeholder={"地元のおすすめの観光地を教えてください！"} setState={setQuestion} />
        </div>
        <BaseRectButton text={"準備完了！"} />
      </BaseStepWindow>
    </EventBackground>
  )
}