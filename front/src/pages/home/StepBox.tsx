import { FC, ReactNode } from 'react'

interface IProps {
  title: string
  children: ReactNode
}

export const StepBox: FC<IProps> = ({ title, children }) => {
  return (
    <div>
      <p className="text-xl font-semibold sm:text-base">{title}</p>
      <p className="text-sm text-gray-700">{children}</p>
    </div>
  )
}
