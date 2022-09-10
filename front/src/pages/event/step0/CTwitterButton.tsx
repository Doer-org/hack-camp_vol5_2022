import { FC } from "react"
import IconTwitter from "@/assets/img/icon_twitter_white.png"

import * as ag from '@/firebase/authTwitter'
import * as TE from 'fp-ts/TaskEither'
import { pipe } from "fp-ts/lib/function"

export const CTwitterButton: FC = () => {
  return (
    <button
      className="flex w-full items-center justify-center rounded bg-sky-500 py-6 text-4xl font-bold tracking-wider text-white duration-300 hover:opacity-80 lg:py-2.5 lg:text-base"
      // onClick={async () => { 
      //   const a = pipe(
      //     ag.login(),
      //     TE.match(
      //       (e) => console.log("CTwitterButton"),
      //       (ok) => console.log(ok)
      //     )
      //   )
      //   await a()
      // }}
    
    >
      <img className="mr-7 h-10 lg:mr-3 lg:h-5" src={IconTwitter} alt="Twitterのアイコン"/>
      Twitter でログイン
    </button>
  )
}