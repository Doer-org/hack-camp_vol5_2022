import { IApiError } from "@/types/api/ApiError"
import { AxiosClient } from "@/api/client"
import { IPostLoginWithGithubInput, IPostLoginWithGithubOutput, IPutUserUpdateInput, IPutUserUpdateOutput } from "@/types/api/user"
import { TaskEither, tryCatch } from "fp-ts/TaskEither"
import * as TE from 'fp-ts/TaskEither'

// Github ログイン
export const PostLoginWithGithub = (input: IPostLoginWithGithubInput): TaskEither<IApiError, IPostLoginWithGithubOutput> => {
  return tryCatch(
    async () => {
      const { data } = await AxiosClient().post(`/user/login/github`, input)
      return data
    },
    (e: any) => {
      const resp: IApiError = { error: e.response.data.error }
      return resp
    }
  )
}

// ユーザの情報を取ってくる
export const GetUserInfo = (userID : string) : TaskEither<IApiError, IPostLoginWithGithubOutput> => {
  return TE.tryCatch(
    async () => { 
      const { data } = await AxiosClient().get(`/user/${userID}`)
      return data
    },
    (e: any) => {
      const resp: IApiError = { error: e.response.data.error }
      return resp
    }
  )
}

// ユーザ情報の更新
export const PutUpdateUserInfo = (input: IPutUserUpdateInput): TaskEither<IApiError, IPutUserUpdateOutput> => {
  return TE.tryCatch(
    async () => {
      const { data } = await AxiosClient().put(`/user/${input.uid}`, input)
      return data
    },
    (e: any) => {
      const resp: IApiError = { error: e.response.data.error }
      return resp
    }
  )
}

