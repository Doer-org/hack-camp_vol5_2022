import { FC, useEffect, useState } from "react"
import { BaseStepWindow } from "@/components/parts/BaseStepWindow"
import { EventBackground } from "@/components/parts/EventBackground"
import { SecRespondent } from "@/pages/event/questions/SecRespondent"
import { SecQuestion } from "@/pages/event/questions/SecQuestion"
import { BaseRectButton } from "@/components/parts/BaseRectButton"
import { IMember } from "@/types/data/member"
import { useLocation, useNavigate } from "react-router-dom"
import { useMeetHackApi } from "@/hooks/useMeetHackApi"

interface IQuestion {
  id: number
  order: number
  name: string
  question: string
}

export const EventQuestions: FC = () => {
  const navigate = useNavigate()
  const mhApi = useMeetHackApi()
  const search = new URLSearchParams(useLocation().search)

  const [roomID, setRoomID] = useState<string|null>(search.get("room"))
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>()
  const [currentMember, setCurrentMember] = useState<IMember>()
  const [members, setMembers] = useState<IMember[]>([])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  // 質問リストの作成
  const createQuestions = (members: IMember[]): void => {
    const questions: IQuestion[] = members.map((member) => {
      return {
        id: member.id,
        order: (member.id + new Date().getDay()) % members.length,
        name: member.name,
        question: member.question
      }
    })
    setQuestions(questions)
  }

  // 質問の選定
  const selectQuestion = (): void => {
    if (members.length === 0) {
      return
    }
    // TODO 自分の質問じゃないものを排除したい
    // 質問の候補たち
    // const questionCandidates = questions.filter(question => question.id !== members[0].id)
    const questionCandidates = questions
    questionCandidates.sort((a, b) => a.order - b.order)
    // 選ばれた質問
    const currentQuestion = questionCandidates[0]
    setCurrentQuestion(currentQuestion)
    // 残りの質問
    const remainQuestions = questions.filter(question => question.id !== currentQuestion.id)
    setQuestions(remainQuestions)
    setCurrentMember(members[0])
    // メンバーを消す
    const remainMembers = members.filter(member => member.id !== members[0].id)
    setMembers(remainMembers)
  }

  // 最後の人が回答したとき
  const finishEvent = (): void => {
    if (roomID !== null) {
      navigate(`/event?room=${roomID}`)
    }
  }

  // 初期ロード
  useEffect(() => {
    if (roomID === null) {
      navigate("/event/new")
      return
    }
    mhApi.getRoomMembers({ roomID })
      .then(ok => {
        createQuestions(ok)
        setMembers(ok)
        // 非同期終了を検知する用のState
        setIsLoaded(true)
      })
      .catch(error => console.error(error))
  }, [])

  // State の更新を待つ
  useEffect(() => {
    selectQuestion()
  }, [isLoaded])

  return (
    <div>
      {
        isLoaded
          ?
          <EventBackground>
            <BaseStepWindow>
              <div className={"px-24 lg:px-0"}>
                <h2 className="mb-16 text-center text-4xl lg:mb-4 lg:text-lg">
                  交流タイム
                </h2>
                <p className={"mb-20 block text-center text-3xl leading-10 tracking-wide text-gray-400 lg:mb-10 lg:text-base"}>
                  参加しているメンバーが作成した質問をランダムで表示します．
                  選ばれた人は回答しましょう！
                </p>
                <div className={"space-y-12 lg:space-y-6"}>
                  <SecQuestion question={currentQuestion?.question ?? ""} />
                  {
                    typeof currentMember !== "undefined"
                      ?
                      <SecRespondent member={currentMember} />
                      :
                      <></>
                  }
                </div>
                <div className={"mx-auto mt-20 w-96 lg:mt-10"}>
                  {
                    questions.length > 0
                      ?
                      <BaseRectButton onClick={selectQuestion} text={"次の質問へ"} />
                      :
                      <BaseRectButton onClick={finishEvent} text={"交流終了！"} />
                  }
                </div>
              </div>
            </BaseStepWindow>
          </EventBackground>
          :
          <></>
      }
    </div>
  )
}