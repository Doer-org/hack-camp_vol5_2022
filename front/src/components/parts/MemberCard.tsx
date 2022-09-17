import { FC } from 'react'
import github from '@/assets/img/github-logo.png'
import twitter from '@/assets/img/twitter-logo.png'
import { IMember } from "@/types/data/member"

interface IProps {
  member: IMember
}

export const MemberCard: FC<IProps> = ({ member }) => {
  return (
    <div className="rounded border-thick-purple  bg-white  p-6 text-3xl  lg:text-lg w-64 h-80 lg:w-48 lg:h-64">
      {/* <div className="flex items-center"> */}
      {/* メンバーのアイコン */}
      <div className="flex justify-center pt-2">
        <a href={`https://github.com/${member.github}`}>
          <img
            className="mb-3 h-36 w-36 rounded-full shadow-lg lg:h-24 lg:w-24"
            src={`https://github.com/${member.name}.png`}
            alt={`twitter @${member.github}`}
          />
        </a>
      </div>

      {/* 名前 */}
      <div className="mb-1 flex justify-center text-3xl lg:text-xl font-base lg:font-medium text-gray-900">
        {member.name}
      </div>
      {/* </div> */}

      {/* 役割 */}
      <span className="flex justify-center text-xl lg:text-sm text-gray-500">
        {member.role}
      </span>

      <div className="flex items-center justify-center space-x-4">
        {/* GitHub */}
        <a href={`https://github.com/${member.github}`}>
          <img
            className="inline-flex w-7 items-center py-2 "
            src={github}
            alt={`github @${member.github}`}
          />
        </a>

        {/* Twitter */}
        <a href={`https://twitter.com/${member.twitter}`}>
          <img
            className="inline-flex w-7 items-center py-2 "
            src={twitter}
            alt={`twitter @${member.twitter}`}
          />
        </a>
      </div>
    </div>
  )
}
