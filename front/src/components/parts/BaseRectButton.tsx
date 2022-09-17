import { FC } from "react"

interface IProps {
  text: string
  isWhite?: boolean
  onClick?: () => void
}

export const BaseRectButton: FC<IProps> = ({ text, isWhite= false, onClick }) => {
  return(
    <>
      {
        isWhite
          ?
          <button
            onClick={onClick}
            className="w-full rounded border border-doer-purple bg-white py-6 text-4xl tracking-wider text-doer-purple duration-300 hover:bg-thin-purple lg:py-2.5 lg:text-base"
          >
            {text}
          </button>
          :
          <button
            onClick={onClick}
            className="w-full rounded bg-doer-purple py-6 text-4xl tracking-wider text-white duration-300 hover:opacity-80 lg:py-2.5 lg:text-base"
          >
            {text}
          </button>
      }
    </>
  )
}