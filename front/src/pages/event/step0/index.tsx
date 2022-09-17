import { FC, useEffect, useState } from 'react'
import { EventBackground } from "@/components/parts/EventBackground"
import { BaseStepWindow } from "@/components/parts/BaseStepWindow"
import { BaseRectButton } from "@/components/parts/BaseRectButton"
import { CGithubButton } from "@/pages/event/step0/CGithubButton"
import IconUser from "@/assets/img/icon_user.png"
import { useLocation, useNavigate } from "react-router-dom"
import { useFirebase } from "@/hooks/useFirebase"
import { useDispatch } from "react-redux"
import { useMeetHackApi } from "@/hooks/useMeetHackApi"
import { setUser } from "@/store/slice/userSlice"
import { useSelector } from "@/store/store"

export const EventStep0: FC = () => {
  const search = new URLSearchParams(useLocation().search)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const mhApi = useMeetHackApi()
  const { githubLogin, setUserToState } = useFirebase()

  const [roomID, setRoomID] = useState<string|null>(search.get("room"))
  const user = useSelector(state => state.user)

  // Room が終わっているとき，Room 情報に遷移
  const detectFinishRoom = (roomID: string): void => {
    mhApi.getRoomInfo({ roomID })
      .then((ok) => {
        if (ok.status === "finished") {
          navigate(`/event?room=${roomID}`)
        }
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    // roomID が無いとき
    if (roomID === null) {
      navigate(`/event/new`)
      return
    }
    // 終了したroomか判別
    detectFinishRoom(roomID)
    // ユーザがログイン済みのとき
    if (user.uid !== "") {
      navigate(`/event/step1?room=${roomID}`)
      return
    }
    // ユーザのログイン状態が変わったらsetする
    setUserToState(
      async (user) => {
        if (user !== null) {
          const userProfile = await mhApi.loginWithGithub(user.uid, user?.displayName ?? "")
          dispatch(setUser(userProfile))
          navigate(`/event/step1?room=${roomID}`)
        } else {
          console.log("logout")
        }
      }
    )
  }, [])

  return(
    <EventBackground>
      <BaseStepWindow>
        <img className="mx-auto mb-16 h-48 lg:mb-5 lg:h-24" src={IconUser} alt="ユーザ登録のアイコン"/>
        <h2 className="mb-20 text-center text-6xl lg:mb-10 lg:text-lg">
          自己紹介の追加
        </h2>
        <div className="mb-24 flex rounded bg-green-100 p-4 text-3xl leading-relaxed text-gray-500 lg:mb-12 lg:text-base">
          <span className="mr-6 block lg:mr-1">
            💡
          </span>
          <p>
            イベント終了後に入力した情報が Roomメンバーに共有されます！
            <br/>
            できる限り埋めましょう
            <br/>
            ログインして始めると出会いを記録することができます
          </p>
        </div>
        {
          roomID !== null
            ?
            <div className="space-y-8 lg:space-y-4">
              <CGithubButton onLogin={
                async () => await githubLogin()
              }/>
              {/* TODO Twitter ログイン */}
              {/* <CTwitterButton /> */}
              <div onClick={() => navigate(`/event/step1?room=${roomID}`)}>
                <BaseRectButton isWhite={true} text={"ログインせずに始める"} />
              </div>
            </div>
            :
            <></>
        }
      </BaseStepWindow>
    </EventBackground>
  )
}