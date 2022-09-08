import { FC } from "react"
import { BaseRectButton } from "@/components/parts/BaseRectButton"

interface IProps {
  maxCount: number
  current: number
  onEventStart: () => void
}

export const CEventStartMsg: FC<IProps> = ({ maxCount, current , onEventStart }) => {
  return (
    <div className={"mb-20 lg:mb-8"}>
      {
        current < maxCount
          ?
          <div className={"mx-auto w-72"}>
            <BaseRectButton
              isWhite={true}
              onClick={onEventStart}
              text={"他のメンバーを待たずに開始"}
            />
          </div>
          :
          <div>
            <div className={"my-20 space-y-2 text-center lg:my-8"}>
              <span className={"block text-4xl lg:text-lg"}>
                メンバーは揃いましたか？
              </span>
              <span className={"block text-3xl text-gray-400 lg:mb-5 lg:text-base"}>
                さっそくイベントを始めましょう！
                <br/>
                メンバーをさらに追加することもできます。
              </span>
            </div>
            <div className={"mx-auto w-72"}>
              <BaseRectButton
                onClick={onEventStart}
                text={"イベントをはじめる"}
              />
            </div>
          </div>
      }
    </div>
  )
}