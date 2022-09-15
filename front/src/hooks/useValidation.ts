import { Dispatch, useState, SetStateAction } from "react"

interface IUseValidation {
  isValidateShow: boolean
  setIsValidateShow: Dispatch<SetStateAction<boolean>>
  formStatusOK: () => boolean
}

export const useValidation = (schema: Record<string, boolean>): IUseValidation => {
  // Validation ステータス管理
  const [isValidateShow, setIsValidateShow] = useState<boolean>(false)

  // スキーマのすべての条件をチェック
  const formStatusOK = (): boolean => {
    return Object.values(schema).every(value => value)
  }

  return { isValidateShow, setIsValidateShow, formStatusOK }
}