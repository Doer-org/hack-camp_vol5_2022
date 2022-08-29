import {FC, ReactNode } from "react"

type IProps = {
  children: ReactNode
}

export const RegisterBackground: FC<IProps> = ( {children}) => {
  return (
    <>
        <div className="flex h-screen justify-center
                    bg-thin-purple">
        {children}
    </div>
    </>
    
  )
}