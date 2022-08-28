import {Dispatch, FC, SetStateAction} from "react"

interface IProps {
  name: string
  placeholder: string
  setState: Dispatch<SetStateAction<string>>
}

export const BaseInput: FC<IProps> = ({name, placeholder, setState}) => {
  return(
    <div>
      <label className="mb-4 inline-block text-3xl text-slate-600 lg:mb-2 lg:text-base">
        {name}
      </label>
      <input
        onChange={(e) => setState(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="w-full rounded border bg-white px-5 py-8 tracking-wider focus:outline-purple lg:px-3 lg:py-2"
      />
    </div>
  )
}