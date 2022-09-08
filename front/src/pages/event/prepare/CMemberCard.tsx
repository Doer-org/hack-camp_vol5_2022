import { FC } from "react"
import IconGithub from "@/assets/img/github-logo.png"
import IconTwitter from "@/assets/img/twitter-logo.png"
import IconStatus from "@/assets/img/icon_status.png"
import { IMember } from "@/types/data/member"

interface IProps {
  member: IMember
}

export const CMemberCard: FC<IProps> = ({ member }) => {
  return (
    <div className={"relative rounded border border-thin-purple py-3 px-8 shadow-md shadow-thin-purple"}>
      <div className={"flex items-center space-x-10"}>
        {
          member.github !== ""
            ?
            <img className={"h-20 w-20 rounded-full border-4 border-gray-200"} src={`https://github.com/${member.github}.png`} alt="プロフィール画像" />
            :
            <img className={"h-20 w-20 rounded-full border-4 border-gray-200"} src={"https://avatars.githubusercontent.com/u/90210216?s=200&v=4"} alt="プロフィール画像" />
        }
        <div className={"w-full"}>
          <div className={"lg:mb-3"}>
            <span className={"block text-gray-600"}>
              {member.name}
            </span>
            <span className={"block text-gray-400"}>
              {member.lang}
            </span>
            <span className={"block text-sm text-gray-400"}>
              {member.comment}
            </span>
          </div>
          <div className={"flex items-center space-x-6"}>
            {
              member.github !== ""
                ?
                <a href={`https://github.com/${member.github}`} target={"_blank"} rel="noreferrer">
                  <img className={"w-5 cursor-pointer opacity-80"} src={IconGithub} alt="GitHub のアイコン" />
                </a>
                :
                <></>
            }
            {
              member.twitter !== ""
                ?
                <a href={`https://twitter.com/${member.twitter}`} target={"_blank"} rel="noreferrer">
                  <img className={"w-5 cursor-pointer opacity-80"} src={IconTwitter} alt="Twitter のアイコン" />
                </a>
                :
                <></>
            }
          </div>
        </div>
        <div className={"w-10"}>
          <img className={"opacity-80"} src={IconStatus} alt="Statusアイコン"/>
        </div>
      </div>
    </div>
  )
}
