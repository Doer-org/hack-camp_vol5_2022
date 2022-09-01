import { FC } from "react"

interface IProps {
  isActive: boolean
}

export const Loader: FC<IProps> = ({ isActive = true }) => {
  return (
    <div>
      {
        isActive
          ?
          <div className={"flex items-center justify-center"}>
            <div className="h-2 w-2 animate-ping rounded-full bg-doer-purple" />
            <div className="mx-4 h-2 w-2 animate-ping rounded-full bg-doer-purple" />
            <div className="h-2 w-2 animate-ping rounded-full bg-doer-purple" />
          </div>
          :
          <></>
      }
    </div>
  )
}