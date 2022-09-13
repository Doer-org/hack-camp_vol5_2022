import { IApiError } from "@/types/api/ApiError"
import { AxiosClient } from "@/api/client"
import { IPostLoginWithGithubInput, IPostLoginWithGithubOutput } from "@/types/api/user"
import { TaskEither, tryCatch } from "fp-ts/TaskEither"

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