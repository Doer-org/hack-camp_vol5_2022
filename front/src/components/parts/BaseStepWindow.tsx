import { FC, ReactNode } from "react"

interface IProps {
  children: ReactNode
}

export const BaseStepWindow: FC<IProps> = ({ children }) => {
  return(
    <div className="h-full rounded bg-thin-purple p-10 py-28 text-gray-600 shadow shadow-doer-purple lg:h-auto lg:w-1/3 lg:bg-white lg:p-10">
      {children}
    </div>
  )
}