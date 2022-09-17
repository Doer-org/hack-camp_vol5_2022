import { FC, useEffect, useState } from "react"
import BotNormal from "@/assets/img/bot_normal.png"
import BotWink from "@/assets/img/bot_wink.png"
import BotPC from "@/assets/img/bot_pc.png"
import BotSmile from "@/assets/img/bot_smile.png"
import BotStrange from "@/assets/img/bot_strange.png"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { useAnimation } from "@/hooks/useAnimation"

interface IProps {
  text: string
}

export const SecQuestion: FC<IProps> = ({ text }) => {
  gsap.registerPlugin(TextPlugin)
  const BOT_FACES = [BotNormal, BotWink, BotPC, BotSmile, BotStrange]

  const { setAnimation } = useAnimation()

  const [botFaceIdx, setBotFaceIdx] = useState<number>(0)

  // Bot の顔を選ぶ
  const selectBotFace = (): void => {
    const max = BOT_FACES.length
    const min = 0
    const faceIdx = Math.floor(Math.random() * (max - min))
    setBotFaceIdx(faceIdx)
  }

  useEffect(() => {
    selectBotFace()
    setAnimation("chatBubble", text)
  }, [text])

  return (
    <div className={"flex justify-center space-x-12 lg:space-x-10"}>
      <img className={"mt-auto w-24 lg:w-16"} src={BOT_FACES[botFaceIdx]} alt="botさんの顔"/>
      {/* 吹き出し */}
      <div className={"flex flex-1 items-center rounded-2xl rounded-bl-none bg-doer-purple px-10 py-4 text-3xl leading-relaxed lg:mb-3 lg:py-2 lg:text-lg"}>
        <span id={"chatBubble"} className={"tracking-wider text-white"} />
      </div>
    </div>
  )
}