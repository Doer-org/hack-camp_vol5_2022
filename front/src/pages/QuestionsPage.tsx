import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SecTitle from '../components/parts/SecTitle'
import QuestionCard from '../components/parts/QuestionCard'
import BaseButton from '../components/parts/BaseButton'
import NextButton from '../components/parts/Nextbutton'
import robot from '../assets/img/robot.png'
import { useMeetHackApi } from '../hooks/useMeetHackApi'
import { TApiError } from '@/types/api/apiError'
import { TGetRoomMembersOutput } from '../types/api/member'
import { pipe } from 'fp-ts/function'
import * as TE from 'fp-ts/TaskEither'

interface Question {
  id: number
  question: string
}
export const QuestionsPage: FC = () => {
  const { createRoom, addNewMember, getRoomInfo, getRoomMembers } = useMeetHackApi()
  // query paramの取得
  const search = useLocation().search
  const query = new URLSearchParams(search)
  const roomID = query.get('room') ?? undefined

  const [users, setUsers] = useState<string[]>([])
  const [questions, setQuestions] = useState<Question[]>([])
  useEffect(() => {
    if (typeof (roomID) === 'undefined') {
      console.log('クエリパラメータからroomIDを取得できませんでした。')
    } else {
      pipe(
        getRoomMembers({ roomID }),
        TE.match(
          (error: TApiError) => {
            console.log('Error: getRoomMembers ' + error)
          },
          (ok: TGetRoomMembersOutput[]) => {
            const userNames = ok.map((user) => user.name)
            console.log(userNames)
            setUsers(userNames)
            const d = new Date()
            const month = d.getMonth() + 1
            const count = ok.length
            const questions: Question[] = ok.map((item) => {
              return {
                id: (item.id + month - 1) % count,
                question: item.question
              }
            })
            questions.sort((a, b) => b.id - a.id)
            setQuestions(questions)
          }
        )
      )()
    }
  }, [])

  const [current, setCurrent] = useState(0)
  const nextQuestion = () => {
    setCurrent(current + 1)
    console.log(current)
  }
  const backQuestion = () => {
    setCurrent(current - 1)
    console.log(current)
  }
  return (
    <div className="h-screen bg-thin-purple">
      <div className="mx-auto w-10/12">
        <div className="text-center">
          <div className="mb-7 pt-10">
            <p className="text-3xl">回答者は</p>
            <h2 className="text-3xl">{users[current] + 'さん'}</h2>
          </div>
          <SecTitle title="質問内容" />
          <QuestionCard content={questions[current] ? questions[current].question : null} />

          <div className="bg-grey-light mx-auto mx-10 mt-8 mb-2 rounded-lg bg-gray-100 py-8 px-4 shadow-lg">
            <p className="text-blue-darkest text-lg italic leading-normal">
              質問タイムです❔<br />
            </p>
            <p className="text-grey-darker pt-8 text-center text-sm">
              みんなの質問を私がランダムで選んでいます<br />
              {users[current] + 'さん'}、お答えください！✨
            </p>
          </div>

          <div className="mb-8 flex justify-center">
            <img src={robot} width="100px" />
          </div>

          {users.length === current + 1 ? (
            <>
              <div className="mb-0 mt-3">
                <NextButton path={`/event/?room=${roomID}`} name="参加者一覧" />
              </div>

              <div className="mb-0 mt-3">
                <BaseButton onClick={(e) => backQuestion()} name="前の人" />
              </div>
            </>
          ) : (
            <>
              <div className="mb-0 mt-3">
                <BaseButton onClick={(e) => nextQuestion()} name="次の人" />
              </div>
              {/* {!current - 1 < 0 ? ( */}
              {current - 1 < 0
                ? (
                <>
                  <div className="mb-0 mt-3">
                    <BaseButton onClick={(e) => backQuestion()} name="前の人" />
                  </div>
                </>
                  )
                : null}
            </>
          )}
        </div>
      </div>
    </div>

  )
}
