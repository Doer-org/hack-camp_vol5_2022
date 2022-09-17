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
import { useValidation } from "@/hooks/useValidation"
import { FormValidation } from "@/components/parts/FormValidation"

export const EventStep1: FC = () => {
  const [name, setName] = useState<string>("")
  const [lang, setLang] = useState<string>("")
  const [github, setGithub] = useState<string>("")
  const [twitter, setTwitter] = useState<string>("")
  const [comment, setComment] = useState<string>("")

  const validationSchema = {
    name: name !== ""
  }

  const validation = useValidation(validationSchema)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formStep1 = useSelector((state) => state.form.step1)
  const userInfo = useSelector((state) => state.user)

  const search = new URLSearchParams(useLocation().search)
  const roomID: string | null = search.get("room")

  const setFormValue = (): void => {
    dispatch(setStep1({ name, lang, github, twitter, comment }))
    if (roomID !== null) {
      validation.setIsValidateShow(true)
      if (validation.formStatusOK()) {
        navigate(`/event/step2?room=${roomID}`)
      }
    } else {
      navigate("/event/new")
    }
  }


  useEffect(() => {
    if (roomID === null) {
      navigate("/event/new")
      return
    }

    // ログインしている場合は，DBの情報をセット
    if (userInfo.uid !== "") {
      setName(userInfo.name)
      setLang(userInfo.lang)
      setGithub(userInfo.github)
      setTwitter(userInfo.twitter)
      setComment(userInfo.comment) 
    }
    else {
      setName(formStep1.name)
      setLang(formStep1.lang)
      setGithub(formStep1.github)
      setTwitter(formStep1.twitter)
      setComment(formStep1.comment) 
    }
    // ユーザ情報をとってきて自動入力
    // setName(formStep1.name)
    // setLang(formStep1.lang)
    // setGithub(formStep1.github)
    // setTwitter(formStep1.twitter)
    // setComment(formStep1.comment)
  }, [])

  return (
    <EventBackground>
      <BaseStepWindow>
        <img className="mx-auto mb-16 h-48 lg:mb-5 lg:h-24" src={IconUser} alt="ユーザ登録のアイコン"/>
        <h2 className="mb-20 text-center text-4xl lg:mb-10 lg:text-lg">
          自己紹介の登録
        </h2>
        <div className={"mb-24 space-y-8 text-4xl lg:mb-12 lg:space-y-6 lg:text-base"}>
          <div>
            <BaseInput name={"ユーザー名 (必須)"} placeholder={"山田 太郎"} setState={setName} value={name}/>
            <FormValidation message={"ユーザー名は必須項目です"} isValid={validationSchema.name} isShow={validation.isValidateShow} />
          </div>
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