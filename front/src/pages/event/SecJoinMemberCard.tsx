import { FC } from "react"
import { CMemberCard } from "@/pages/event/CMemberCard"
import { IMember } from "@/types/data/member"
import dayjs from "dayjs"
import 'dayjs/locale/ja'

interface IProps {
  members: IMember[]
  roomName: string
  roomDate: Date
}

const convertDateTime = (date: Date): string => {
  dayjs.locale("ja")
  return dayjs(date).format("YYYY.MM.DD")
}

export const SecJoinMemberCard: FC<IProps> = ({ members , roomName, roomDate }) => {
  return (
    <div className={"space-y-16 rounded border border-doer-purple bg-white p-20 shadow shadow-thin-purple lg:space-y-10 lg:bg-thin-purple lg:p-10"}>
      <div className={"space-y-8 font-bold text-doer-purple lg:space-y-4"}>
        <span className={"block text-center text-4xl lg:text-2xl"}>
          {roomName}
        </span>
        <span className={"block text-center text-2xl tracking-wider lg:text-base"}>
          {convertDateTime(roomDate)}
        </span>
      </div>
      <div className={"grid gap-6 lg:grid-cols-2 lg:gap-4"}>
        {
          members.map((member, idx) => {
            return(
              <CMemberCard member={member} key={idx}/>
            )
          })
        }
      </div>
    </div>
  )
}