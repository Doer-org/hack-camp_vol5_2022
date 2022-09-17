import { FC } from "react"
import IconTwitter from "@/assets/img/icon_twitter_white.png" 

export const CTwitterButton: FC = () => {
  return (
    <button
      className="flex w-full items-center justify-center rounded bg-sky-500 py-6 text-4xl font-bold tracking-wider text-white duration-300 hover:opacity-80 lg:py-2.5 lg:text-base"   
    >
      <img className="mr-7 h-10 lg:mr-3 lg:h-5" src={IconTwitter} alt="Twitterのアイコン"/>
      Twitter でログイン
    </button>
  )
}