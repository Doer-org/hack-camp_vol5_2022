import { FC, ReactNode } from 'react'

interface IProps {
  name: string;
  children: ReactNode
}

export const RegisterCardHead: FC<IProps> = ({ name, children }) => {
  return (
    <div className="rounded-t-lg bg-purple py-5 text-3xl font-bold tracking-wider text-white">
        <p>{name}</p>
        {children}
    </div>
  )
}