import { FC, ReactNode } from 'react'

interface IProps {
  content: ReactNode
}

export const AppContainer: FC<IProps> = ({ content }) => {
  return (
    <div className="px-6">
      {content}
    </div>
  )
}
