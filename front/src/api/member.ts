import * as TE from 'fp-ts/TaskEither'
import {
  IPostAddNewMemberInput,
  IPostAddNewMemberOutput,
  IGetRoomMembersInput,
  IGetRoomMembersOutput,
} from '@/types/api/member'
import { IApiError } from '@/types/api/apiError'
import {TaskEither} from "fp-ts/TaskEither"
import {AxiosClient} from "@/api/client"
import {defaultArg} from "@/api/utile"

export const postAddNewMember = (input: IPostAddNewMemberInput): TaskEither<IApiError, IPostAddNewMemberOutput> => {
  const params = new URLSearchParams({
    name: input.name,
    roomID: input.roomID,
    question: input.question,
    comment: defaultArg(input.comment, ''),
    lang: defaultArg(input.lang, ''),
    github: defaultArg(input.github, ''),
    twitter: defaultArg(input.twitter, ''),
  })
  return TE.tryCatch(
    async () => {
      const { data } = await AxiosClient().post(`/member/new?room=${input.roomID}`, params)
      return data.data
    },
    (e: any) => {
      try {
        const resp: IApiError = { error: e.response.data.error }
        return resp
      } catch (ee) {
        return { error: 'unexpected error' } // E.left({ error : "unexpected error" } )
      }
    }
  )
}

export const getRoomMembers = (input: IGetRoomMembersInput): TaskEither<IApiError, IGetRoomMembersOutput[]> => {
  return TE.tryCatch(
    async () => {
      const { data } = await AxiosClient().get(`/member/all?room=${input.roomID}`)
      return data.data
    },
    (e: any) => {
      try {
        const resp: IApiError = { error: e.response.data.error }
        return resp
      } catch (ee) {
        const resp: IApiError = { error: 'unexpected error' }
        return resp
      }
    }
  )
}
