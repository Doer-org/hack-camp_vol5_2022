import { FC } from 'react'
import { IMember } from '@/types/data/member'
import github from '@/assets/img/github-logo.png'
import twitter from '@/assets/img/twitter-logo.png'

interface IProps {
  member: IMember
}

export const MemberCard: FC<IProps> = ({ member }) => {
  return (
    <div className="rounded border-t-8 border-thick-purple bg-white p-6 text-3xl font-semibold lg:text-lg">
      {/* <div className="flex items-center"> */}
      {/* メンバーのアイコン */}
      <div className="flex justify-center pt-2">
        <a href={`https://github.com/${member.github}`}>
          <img
            className="h-24 w-24 rounded-full"
            src={`https://github.com/${member.name}.png`}
            alt={`twitter @${member.github}`}
          />
        </a>
      </div>

      {/* 名前 */}
      <div className="flex justify-center">{member.name}</div>
      {/* </div> */}

      {/* 役割 */}
      <span className="mb-4 flex justify-center text-2xl opacity-60 lg:text-sm">
        {member.role}
      </span>

      <div className="flex items-center justify-center space-x-4">
        {/* GitHub */}
        <a href={`https://github.com/${member.github}`}>
          <img
            className="w-10 lg:w-6"
            src={github}
            alt={`github @${member.github}`}
          />
        </a>

        {/* Twitter */}
        <a href={`https://twitter.com/${member.twitter}`}>
          <img
            className="w-10 lg:w-6"
            src={twitter}
            alt={`twitter @${member.twitter}`}
          />
        </a>
      </div>
    </div>
  )
}
