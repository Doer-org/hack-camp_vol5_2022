import {FC, ReactNode} from "react"

interface IProps {
  children: ReactNode
}

export const BaseStepWindow: FC<IProps> = ({children}) => {
  return(
    <div className="rounded bg-white p-10 text-gray-600">
      {children}
    </div>
  )
}