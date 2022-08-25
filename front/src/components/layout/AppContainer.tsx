import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const AppContainer: FC<IProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-20">
      {children}
    </div>
  )
}
