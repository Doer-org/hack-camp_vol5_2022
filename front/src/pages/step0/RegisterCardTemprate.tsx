import {FC, ReactNode } from "react"

type IProps = {
  children: ReactNode
}

export const RegisterCardTemprate: FC<IProps> = ( {children}) => {
  return (
    <>
      <section className="card flex flex-col 
                              justify-center
                              p-4">
          <div className=" max-w-sm rounded-lg bg-white text-center shadow-lg mx-auto">
          {children}
      </div>
    </section>
    </>
    
  )
}