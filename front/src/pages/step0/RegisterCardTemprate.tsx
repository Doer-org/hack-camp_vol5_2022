import {FC, ReactNode } from "react"

type IProps = {
  children: ReactNode
}

export const RegisterCardTemprate: FC<IProps> = ( {children}) => {
  return (
    <>
        <div className="block max-w-sm rounded-lg bg-white text-center shadow-lg mx-auto">
        {children}
    </div>
    </>
    
  )
}