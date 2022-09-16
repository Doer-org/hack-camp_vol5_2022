import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const StepImage: FC<IProps> = ({ children }) => {
  return (
    <div className="sm:mr-5">
      <div className="my-3 flex w-60 items-center justify-center">
        {children}
      </div>
    </div>
  )
}
