import {Dispatch, FC, SetStateAction} from "react"

interface IProps {
  name: string
  placeholder: string
  setState: Dispatch<SetStateAction<string>>
}

export const BaseInput: FC<IProps> = ({name, placeholder, setState}) => {
  return(
    <div>
      <label className="mb-2 inline-block text-slate-600">
        {name}
      </label>
      <input
        onChange={(e) => setState(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="w-full rounded border px-3 py-2 tracking-wider focus:outline-purple"
      />
    </div>
  )
}