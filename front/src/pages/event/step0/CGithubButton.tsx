import { FC } from "react"
import IconGithub from "@/assets/img/github_logo_button.png" 
import { useFirebase } from "@/hooks/useFireBase"
export const CGithubButton: FC = () => {
  const { githubLogin } = useFirebase()
  return (
    <button
      className="flex w-full items-center justify-center rounded bg-gray-700 py-6 text-4xl font-bold tracking-wider text-white duration-300 hover:opacity-80 lg:py-2.5 lg:text-base"
      onClick={async () => { 
        const res = githubLogin() 
        res
          .then((ok) => console.log("uid : " + ok))
          .catch((e) => console.log(e))
      }}
    >
      <img className="mr-7 h-12 lg:mr-3 lg:h-6" src={IconGithub} alt="GitHubのアイコン"/>
      GitHub でログイン
    </button>
  )
}