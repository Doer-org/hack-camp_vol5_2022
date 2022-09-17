import { FC } from "react"
import IconGithub from "@/assets/img/github-logo.png"
import IconTwitter from "@/assets/img/twitter-logo.png"
import { IMember } from "@/types/domain/member"

interface IProps {
  member: IMember
}
export const SecRespondent: FC<IProps> = ({ member }) => {

  return (
    <div className={"mx-auto w-4/5 space-y-6 rounded border border-doer-purple bg-white py-12 text-3xl tracking-wider shadow shadow-doer-purple lg:w-96 lg:space-y-3 lg:py-6 lg:px-10 lg:text-base"}>
      {
        member.github !== ""
          ?
          <img
            className={"mx-auto h-36 w-36 rounded-full border-4 border-gray-200 lg:h-20 lg:w-20"}
            src={`https://github.com/${member.github}.png`}
            alt="プロフィール画像"
          />
          :
          <img
            className={"mx-auto h-36 w-36 rounded-full border-4 border-gray-200 lg:h-20 lg:w-20"}
            src={"https://avatars.githubusercontent.com/u/90210216?s=200&v=4"}
            alt="プロフィール画像"
          />
      }
      <p className={"text-center text-doer-purple"}>
        <span className={"mx-2 text-5xl lg:text-2xl"}>
          {member.name}
        </span>
        <span>さん</span>
      </p>
      <div className={"mb-20 text-center tracking-wider text-doer-purple lg:mb-10"}>
        <div className={"mb-8 space-y-5 lg:mb-3 lg:space-y-1"}>
          <span className={"block"}>
            {member.lang}
          </span>
          <span className={"block text-3xl lg:text-sm"}>
            {member.comment}
          </span>
        </div>
        <div className={"flex items-center justify-center space-x-10 lg:space-x-6"}>
          {
            member.github !== ""
              ?
              <a href={`https://github.com/${member.github}`} target={"_blank"} rel="noreferrer">
                <img className={"w-12 cursor-pointer opacity-80 lg:w-5"} src={IconGithub} alt="GitHub のアイコン" />
              </a>
              :
              <></>
          }
          {
            member.twitter !== ""
              ?
              <a href={`https://twitter.com/${member.twitter}`} target={"_blank"} rel="noreferrer">
                <img className={"w-12 cursor-pointer opacity-80 lg:w-5"} src={IconTwitter} alt="Twitter のアイコン" />
              </a>
              :
              <></>
          }
        </div>
      </div>
    </div>
  )
}