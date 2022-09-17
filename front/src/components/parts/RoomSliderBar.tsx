import {Dispatch, FC, SetStateAction} from "react"

interface IProps {
  setState: Dispatch<SetStateAction<number>>
  value: number
}

export const RoomSliderBar: FC<IProps> = ({setState, value}) => {
  return(
    <div>
      <label className="mb-4 block text-slate-600 lg:mb-4">
        <span className="mr-6 text-3xl lg:mr-3 lg:text-base">
          参加人数
        </span>
        <span className="mr-2 text-5xl font-bold text-doer-purple lg:mr-0.5 lg:text-2xl">
          {value}
        </span>
        <span className="text-3xl lg:text-base">
          人
        </span>
      </label>
      <input
        value={value}
        onChange={(e) => setState(parseInt(e.target.value))}
        min={2}
        max={15}
        type="range"
        list="n_human"
        className="mb-6 h-8 w-full cursor-pointer appearance-none rounded-3xl bg-gray-300 lg:h-3 lg:bg-gray-200"
      />
    </div>
  )
}