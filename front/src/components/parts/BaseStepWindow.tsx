import { FC, ReactNode } from "react"

interface IProps {
  children: ReactNode
}

export const BaseStepWindow: FC<IProps> = ({ children }) => {
  return(
    <div className="min-h-screen rounded bg-thin-purple p-10 py-28 text-gray-600 shadow shadow-doer-purple lg:h-auto lg:min-h-max lg:w-2/3 lg:max-w-4xl lg:bg-white lg:p-10">
      {children}
    </div>
  )
}