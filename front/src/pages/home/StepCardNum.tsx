import { FC, ReactNode } from 'react'

interface IProps {
  stepnum: string
  children: ReactNode
}

export const StepCardNum: FC<IProps> = ({ stepnum }) => {
  return (
    <div>
      <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium">
        {stepnum}
      </div>
    </div>
  )
}
