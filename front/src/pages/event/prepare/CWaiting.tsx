import { FC } from "react"
import { CCircularProgress } from "@/pages/event/prepare/CCircularProgress"
import { Loader } from "@/components/parts/Loader"

interface IProps {
  maxCount: number
  current: number
}

export const CWaiting: FC<IProps> = ({ maxCount, current }) => {
  return (
    <div>
      {
        current < maxCount
          ?
          <div>
            <CCircularProgress maxCount={maxCount} current={current} />
            <p className={"my-12 text-center text-4xl lg:my-8 lg:text-lg"}>
              マッチング中...
            </p>
            <div className={"mb-12 flex h-12 justify-center lg:mb-0"}>
              <Loader isActive={true} />
            </div>
          </div>
          :
          <div className={"mb-20 lg:mb-8"}>
            <CCircularProgress maxCount={maxCount} current={current} />
          </div>
      }
    </div>
  )
}