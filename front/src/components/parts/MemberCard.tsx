import {FC} from "react"
import {IMember} from "@/types/data/member"
import github from "@/assets/img/github-logo.png"
import twitter from "@/assets/img/twitter-logo.png"

interface IProps {
  member: IMember
}

export const MemberCard: FC<IProps> = ({member}) => {
  return (
    <div className="rounded border-l-8 border-thick-purple bg-white p-4 text-4xl lg:border-l-4 lg:text-lg">
      <span className="block">{member.name}</span>
      <span className="mb-4 block text-3xl opacity-60 lg:text-sm">{member.role}</span>
      <div className="flex items-center space-x-4">
        <a href={`https://github.com/${member.github}`}>
          <img className="w-10 lg:w-6" src={github} alt={`github @${member.github}`}/>
        </a>
        <a href={`https://twitter.com/${member.twitter}`}>
          <img className="w-10 lg:w-6" src={twitter} alt={`twitter @${member.twitter}`}/>
        </a>
      </div>
    </div>
  )
}