import { FC, useEffect, useState } from "react"
import { BaseStepWindow } from "@/components/parts/BaseStepWindow"
import { EventBackground } from "@/components/parts/EventBackground"
import { BaseInput } from "@/components/parts/BaseInput"
import { BaseRectButton } from "@/components/parts/BaseRectButton"
import IconUser from "@/assets/img/icon_user.png"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setStep1 } from "@/store/slice/formSlice"
import { useSelector } from "@/store/store"

export const EventStep1: FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const search = new URLSearchParams(useLocation().search)
  const roomID: string | null = search.get("room")

  const [name, setName] = useState<string>("")
  const [lang, setLang] = useState<string>("")
  const [github, setGithub] = useState<string>("")
  const [twitter, setTwitter] = useState<string>("")
  const [comment, setComment] = useState<string>("")

  const setFormValue = (): void => {
    dispatch(setStep1({ name, lang, github, twitter, comment }))
    if (roomID !== null) {
      navigate(`/event/step2?room=${roomID}`)
    }
  }

  const formStep1 = useSelector((state) => state.form.step1)

  useEffect(() => {
    setName(formStep1.name)
    setLang(formStep1.lang)
    setGithub(formStep1.github)
    setTwitter(formStep1.twitter)
    setComment(formStep1.comment)
  }, [])

  return (
    <EventBackground>
      <BaseStepWindow>
        <img className="mx-auto mb-16 h-48 lg:mb-5 lg:h-24" src={IconUser} alt="ユーザ登録のアイコン"/>
        <h2 className="mb-20 text-center text-4xl lg:mb-10 lg:text-lg">
          自己紹介の登録
        </h2>
        <div className={"mb-24 space-y-8 text-4xl lg:mb-12 lg:space-y-6 lg:text-base"}>
          <BaseInput name={"ユーザー名 (必須)"} placeholder={"山田 太郎"} setState={setName} value={name}/>
          <BaseInput name={"好きな言語・フレームワーク"} placeholder={"golang"} setState={setLang} value={lang}/>
          <div className={"space-y-1"}>
            <BaseInput name={"GitHub"} placeholder={"your account"} setState={setGithub} value={github}/>
            <span className={"block text-2xl text-gray-400 lg:text-sm"}>@ の入力は不要です</span>
          </div>
          <div className={"space-y-1"}>
            <BaseInput name={"Twitter"} placeholder={"your account"} setState={setTwitter} value={twitter}/>
            <span className={"block text-2xl text-gray-400 lg:text-sm"}>@ の入力は不要です</span>
          </div>
          <BaseInput name={"ひとこと"} placeholder={"寿司が好きです 🍣"} setState={setComment} value={comment}/>
        </div>
        <div onClick={() => setFormValue()}>
          <BaseRectButton text={"次へ"}/>
        </div>
      </BaseStepWindow>
    </EventBackground>
  )
}