import { FC, ReactNode } from 'react'

interface IProps {
  title: string
  children: ReactNode
}

export const WindowBox: FC<IProps> = ({ title, children }) => {
  return (
    <div className="text-4xl lg:text-lg">
      <div className="rounded-t-xl border-2 border-doer-purple bg-doer-purple p-3 text-center font-bold tracking-wider text-white">
        {title}
      </div>
      <div className="rounded-b-xl border-2 border-doer-purple bg-thin-purple p-3 leading-relaxed">
        {children}
      </div>
    </div>
  )
}
