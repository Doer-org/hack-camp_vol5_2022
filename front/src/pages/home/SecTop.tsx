import {FC} from "react"
import logo from "@/assets/img/logo.png"
import NextButton from "@/components/parts/Nextbutton"
import {AppContainer} from "@/components/layout/AppContainer"
import divider_pc from "@/assets/img/divider_pc.svg"
import divider_sm from "@/assets/img/divider_sm.svg"

export const SecTop: FC = () => {
  return (
    <section className="mt-48 lg:mt-24">
      <AppContainer>
        <p className="text-center text-7xl font-bold leading-relaxed text-doer-purple lg:text-4xl">
          さぁ、新しい仲間と
          <br className="lg:hidden"/>
          Hackしよう。
        </p>
        <img src={logo} alt="MeetHackのロゴ" className="mx-auto my-12 lg:h-64" />
        <h2 className="mx-2 mt-16 text-center text-4xl leading-relaxed tracking-wide text-gray-800 lg:mt-8 lg:text-xl">
          MeetHack は新しい仲間との交流をサポートするサービスです。
          <br/>
          <span className="font-bold text-doer-purple">
            より速く、スマート
          </span>
          に Hack 仲間を増やしませんか？
        </h2>
        <div className="mt-24 text-center lg:mt-16">
          <NextButton path="/event/new" name="ルームを作成する" />
        </div>
      </AppContainer>
      <img className="hidden lg:block" src={divider_pc} alt=""/>
      <img className="lg:hidden" src={divider_sm} alt=""/>
    </section>
  )
}