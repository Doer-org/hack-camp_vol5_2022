import {FC} from "react"

interface IProps {
  text: string
}

export const BaseRectButton: FC<IProps> = ({text}) => {
  return(
    <button className="w-full rounded bg-doer-purple py-2.5 tracking-wider text-white duration-300 hover:opacity-80">
      {text}
    </button>
  )
}