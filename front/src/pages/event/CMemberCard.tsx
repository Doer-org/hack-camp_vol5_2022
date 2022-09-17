import { FC } from "react"
import IconGithub from "@/assets/img/github-logo.png"
import IconTwitter from "@/assets/img/twitter-logo.png"
import { IMember } from "@/types/domain/member"

interface IProps {
  member: IMember
}

export const CMemberCard: FC<IProps> = ({ member }) => {
  return (
    <div className={"relative flex h-64 border border-thin-purple bg-white py-10 px-12 shadow-md shadow-gray-300 lg:h-40 lg:py-3 lg:px-5"}>
      <div>
        <span className={"block text-4xl lg:text-2xl"}>
          {member.name}
        </span>
      </div>
      <div className={"ml-auto"}>
        <img
          className={"h-32 w-32 rounded-full border-4 border-gray-200 lg:h-16 lg:w-16 lg:border-2"}
          src={`https://github.com/${member.github}.png`}
          alt="プロフィール画像"
        />
      </div>
      <div className={"absolute bottom-0 pb-6 lg:pb-3"}>
        <span className={"mb-1 block text-2xl lg:mb-0 lg:text-base"}>
          {member.lang}
        </span>
        <span className={"mb-2 block text-xl lg:mb-1 lg:text-sm"}>
          {member.comment}
        </span>
        <div className={"flex items-center space-x-10 lg:space-x-6"}>
          {
            member.github !== ""
              ?
              <a href={`https://github.com/${member.github}`} target={"_blank"} rel="noreferrer">
                <img className={"w-10 cursor-pointer opacity-80 lg:w-5"} src={IconGithub} alt="GitHub のアイコン" />
              </a>
              :
              <></>
          }
          {
            member.twitter !== ""
              ?
              <a href={`https://twitter.com/${member.twitter}`} target={"_blank"} rel="noreferrer">
                <img className={"w-10 cursor-pointer opacity-80 lg:w-5"} src={IconTwitter} alt="Twitter のアイコン" />
              </a>
              :
              <></>
          }
        </div>
      </div>
    </div>
  )
}