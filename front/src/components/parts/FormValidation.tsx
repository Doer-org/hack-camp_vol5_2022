import { FC } from "react"

interface IProps {
  message: string
  isValid: boolean
  isShow?: boolean
}

export const FormValidation: FC<IProps> = ({ message, isValid , isShow = true }) => {
  return (
    <div className={"mt-2 h-2"}>
      {
        !isValid && isShow
          ?
          <span className={"text-3xl text-doer-purple lg:text-sm"}>
            {message}
          </span>
          :
          <></>
      }
    </div>
  )
}