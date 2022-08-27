import {Dispatch, FC, SetStateAction} from "react"

interface IProps {
  setState: Dispatch<SetStateAction<number>>
  value: number
}

export const RoomSliderBar: FC<IProps> = ({setState, value}) => {
  return(
    <div>
      <label className="mb-4 block text-slate-600">
        <span className="mr-3">
          参加人数
        </span>
        <span className="mr-0.5 text-2xl font-bold text-doer-purple">
          {value}
        </span>
        <span>
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
        className="mb-6 h-1.5 w-full cursor-pointer appearance-none rounded-3xl bg-gray-200"
      />
    </div>
  )
}