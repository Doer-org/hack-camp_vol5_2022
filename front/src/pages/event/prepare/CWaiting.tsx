import { FC } from "react"
import { CCircularProgress } from "@/pages/event/prepare/CCircularProgress"
import { Loader } from "@/components/parts/Loader"

interface IProps {
  isWaiting: boolean
}

export const CWaiting: FC<IProps> = ({ isWaiting }) => {
  return (
    <div>
      {
        isWaiting
          ?
          <div>
            <CCircularProgress />
            <p className={"my-20 text-center text-4xl lg:my-8 lg:text-lg"}>
              マッチング中...
            </p>
            <div className={"flex h-12 justify-center"}>
              <Loader isActive={true} />
            </div>
          </div>
          :
          <></>
      }
    </div>
  )
}