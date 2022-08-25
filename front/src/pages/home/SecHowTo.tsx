import {FC} from "react"
import {AppContainer} from "@/components/layout/AppContainer"
import {WindowBox} from "@/components/parts/WindowBox"
import {Link} from "react-router-dom"
import ImgArrowDown from "@/assets/img/arrow_down.svg"

export const SecHowTo: FC = () => {
  return (
    <section className="py-36 lg:py-24">
      <AppContainer>
        <h3 className="text-center text-6xl font-bold tracking-wide text-doer-purple lg:text-3xl">
          How To Use
        </h3>
        <div className="mx-12 mt-20 space-y-6">
          <WindowBox title="Step1 ルームを作る">
            <Link className="text-doer-purple underline" to={"/CreateRoom"}>こちら</Link>
            でルーム名と参加人数を入力してルームを作ってください．
          </WindowBox>
          <img src={ImgArrowDown} className="mx-auto w-16 lg:w-8" alt=""/>
          <WindowBox title="Step1 ルームを作る">
            <Link className="text-doer-purple underline" to={"/CreateRoom"}>こちら</Link>
            でルーム名と参加人数を入力してルームを作ってください．
          </WindowBox>
          <img src={ImgArrowDown} className="mx-auto w-16 lg:w-8" alt=""/>
          <WindowBox title="Step1 ルームを作る">
            <Link className="text-doer-purple underline" to={"/CreateRoom"}>こちら</Link>
            でルーム名と参加人数を入力してルームを作ってください．
          </WindowBox>
        </div>
      </AppContainer>
    </section>
  )
}