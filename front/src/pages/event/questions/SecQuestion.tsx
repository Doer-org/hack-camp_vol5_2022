import { FC } from "react"

interface IProps {
  question: string
}

export const SecQuestion: FC<IProps> = ({ question }) => {
  return (
    <p className={"space-x-4 text-center text-5xl font-bold tracking-wider text-doer-purple lg:space-x-2 lg:text-2xl"}>
      <span className={"text-6xl lg:text-3xl"}>
        Q
      </span>
      <span>
        {question}
      </span>
    </p>
  )
}