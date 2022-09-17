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
            <div className="h-4 w-4 animate-ping rounded-full bg-doer-purple lg:h-2 lg:w-2" />
            <div className="mx-10 h-4 w-4 animate-ping rounded-full bg-doer-purple lg:mx-4 lg:h-2 lg:w-2" />
            <div className="h-4 w-4 animate-ping rounded-full bg-doer-purple lg:h-2 lg:w-2" />
          </div>
          :
          <></>
      }
    </div>
  )
}