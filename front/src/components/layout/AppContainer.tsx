import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const AppContainer: FC<IProps> = ({ children }) => {
  return (
    <div className="px-4 lg:px-20">
      {children}
    </div>
  )
}
