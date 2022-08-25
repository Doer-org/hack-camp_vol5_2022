import {FC, ReactNode} from "react"

interface IProps {
  title: string
  children: ReactNode
}

export const WindowBox: FC<IProps> = ({title, children}) => {
  return (
    <div className="rounded-3xl bg-doer-purple p-0.5 text-4xl lg:text-lg">
      <div className="p-3 text-center font-bold tracking-wider text-white">{title}</div>
      <div className="rounded-b-3xl bg-thin-purple p-3 leading-relaxed">{children}</div>
    </div>
  )
}