import { FC } from "react"
import { CCircular } from "@/pages/event/prepare/CCircular"

interface IProps {
  maxCount: number
  current: number
}

export const CCircularProgress: FC<IProps> = ({ maxCount, current }) => {
  const percent = 100 * current / maxCount <= 100 ? 100 * current / maxCount : 100

  return(
    <div className={"relative"}>
      <CCircular percent={percent} />
      {
        percent < 100
          ?
          <span className={"absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 text-5xl text-doer-purple lg:text-xl"}>
            {current} / {maxCount}
          </span>
          :
          <span className={"absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 text-3xl text-green-600 lg:text-base"}>
            <span className={"mr-0.5 text-6xl lg:text-3xl"}>
              {current}
            </span>
            人
          </span>
      }
    </div>
  )
}