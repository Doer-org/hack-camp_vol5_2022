import { IApiError } from "@/types/api/ApiError"
import { AxiosClient } from "@/api/client"
import { IPostLoginWithGithubInput, IPostLoginWithGithubOutput } from "@/types/api/user"
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

// TODO @aoki GET /user/:uid ユーザの情報を取ってくる
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
// output
// type User struct {
//   Uid     string `json:"uid" gorm:"unique"`
//   Name    string `json:"name"`
//   Comment string `json:"comment"`
//   Lang    string `json:"lang"`
//   Github  string `json:"github"`
//   Twitter string `json:"twitter"`
// }
