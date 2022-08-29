import {FC} from "react"
import IconGithub from "@/assets/img/github_logo_button.png"

export const CGithubButton: FC = () => {
  return (
    <button
      className="flex w-full items-center justify-center rounded bg-gray-700 py-6 text-4xl font-bold tracking-wider text-white duration-300 hover:opacity-80 lg:py-2.5 lg:text-base"
    >
      <img className="mr-7 h-12 lg:mr-3 lg:h-6" src={IconGithub} alt="GitHubのアイコン"/>
      GitHub でログイン
    </button>
  )
}