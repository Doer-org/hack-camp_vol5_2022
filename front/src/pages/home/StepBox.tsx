import { FC, ReactNode } from 'react'

interface IProps {
  title: string
  children: ReactNode
}

export const StepBox: FC<IProps> = ({ title, children }) => {
  return (
    <div>
      <p className="font-semibold text-3xl lg:text-xl mb-4">{title}</p>
      <div className="text-2xl lg:text-sm text-gray-700">{children}</div>
    </div>
  )
}
