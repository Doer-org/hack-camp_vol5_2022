import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const AppContainer: FC<IProps> = ({ children }) => {
  return (
    <div className="mx-6 lg:mx-20">
      {children}
    </div>
  )
}
