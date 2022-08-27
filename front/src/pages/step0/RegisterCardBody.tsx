import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const RegisterCardBody: FC<IProps> = ({ children }) => {
  return (
    <div className="px-12 py-4 ">
      {children}
    </div>
  )
}
