import { FC, useEffect, useState } from "react"
import { EventBackground } from "@/components/parts/EventBackground"
import { BaseStepWindow } from "@/components/parts/BaseStepWindow"
import { BaseInput } from "@/components/parts/BaseInput"
import IconUser from "@/assets/img/icon_user.png"
import { BaseRectButton } from "@/components/parts/BaseRectButton"
import { useDispatch } from "react-redux"
import { setStep2 } from "@/store/slice/formSlice"
import { useSelector } from "@/store/store"
import { useMeetHackApi } from "@/hooks/useMeetHackApi"
import { useLocation, useNavigate } from "react-router-dom"
import { IPostAddNewMemberInput } from "@/types/api/member"
import { useValidation } from "@/hooks/useValidation"
import { FormValidation } from "@/components/parts/FormValidation"

export const EventStep2: FC = () => {
  const [question, setQuestion] = useState<string>("")

  const validationSchema = {
    question: question !== ""
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { addNewMember } = useMeetHackApi()
  const search = new URLSearchParams(useLocation().search)
  const validation = useValidation(validationSchema)

  const roomID: string | null = search.get("room")
  const form = useSelector(state => state.form)
  const formStep2 = useSelector(state => state.form.step2)

  const next = (): void => {
    dispatch(setStep2({ question }))

    if (roomID === null) {
      navigate("/event/new")
      return
    }

    validation.setIsValidateShow(true)
    const input: IPostAddNewMemberInput = {
      name: form.step1.name,
      roomID,
      lang: form.step1.lang,
      github: form.step1.github,
      twitter: form.step1.twitter,
      comment: form.step1.comment,
      question: form.step2.question
    }

    if (validation.formStatusOK()) {
      addNewMember(input)
        .then((ok) => navigate(`/event/prepare?room=${roomID}`))
        .catch((error) => console.log(error))
    }
  }

  useEffect(() => {
    setQuestion(formStep2.question)
  }, [])

  return (
    <EventBackground>
      <BaseStepWindow>
        <img className="mx-auto mb-16 h-48 lg:mb-5 lg:h-24" src={IconUser} alt="ユーザ登録のアイコン"/>
        <h2 className="mb-20 text-center text-4xl lg:mb-10 lg:text-lg">
          質問の登録
        </h2>
        <div className={"mb-24 text-4xl lg:mb-12 lg:text-base"}>
          <BaseInput name={"他の人に聞いてみたい質問"} placeholder={"地元のおすすめの観光地を教えてください！"} setState={setQuestion} value={question} />
          <FormValidation message={"他の人に聞いてみたい質問は必須項目です"} isValid={validationSchema.question} isShow={validation.isValidateShow}/>
        </div>
        <div onClick={next}>
          <BaseRectButton text={"準備完了！"} />
        </div>
      </BaseStepWindow>
    </EventBackground>
  )
}