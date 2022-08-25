import {FC, ReactNode} from "react"

interface IProps {
  title: string
  children: ReactNode
}

export const WindowBox: FC<IProps> = ({title, children}) => {
  return (
    <div className="rounded bg-doer-purple p-0.5 text-lg">
      <div className="p-3 text-center font-bold tracking-wider text-white">{title}</div>
      <div className="bg-thin-purple p-3 leading-7">{children}</div>
    </div>
  )
}