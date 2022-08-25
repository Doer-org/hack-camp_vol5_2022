import {FC} from "react"
import logo from "@/assets/img/logo.png"
import NextButton from "@/components/parts/Nextbutton"
import {AppContainer} from "@/components/layout/AppContainer"
import divider from "@/assets/img/divider_pc.svg"

export const SecTop: FC = () => {
  return (
    <section className="mt-24">
      <AppContainer>
          <p className="text-center text-4xl font-bold text-doer-purple">
            さぁ、新しい仲間とHackしよう。
          </p>
          <img src={logo} alt="MeetHackのロゴ" className="mx-auto my-12 h-64" />
          <h2 className="mx-2 mt-8 text-center text-xl leading-8 tracking-wide text-gray-800">
            MeetHack は新しい仲間との交流をサポートするサービスです。
            <br/>
            <span className="font-bold text-doer-purple">
              より速く、スマート
            </span>
            に Hack 仲間を増やしませんか？
          </h2>
          <div className="mt-12 text-center">
            <NextButton path="CreateRoom" name="ルームを作成する" />
          </div>
      </AppContainer>
      <img src={divider} alt=""/>
    </section>
  )
}