import * as TE from 'fp-ts/TaskEither'
import {
  TPostAddNewMemberInput,
  TPostAddNewMemberOutput,
  TGetRoomMembersInput,
  TGetRoomMembersOutput,
} from '@/types/api/member'
import { TApiError } from '@/types/api/apiError'
import {TaskEither} from "fp-ts/TaskEither"
import {AxiosClient} from "@/api/client"

export const postAddNewMember = (input: TPostAddNewMemberInput): TaskEither<TApiError, TPostAddNewMemberOutput> => {
  return TE.tryCatch(
    async () => {
      const { data } = await AxiosClient().post(`/member/new?room=${input.roomID}`, input)
      return data.data
    },
    (e: any) => {
      try {
        const resp: TApiError = { error: e.response.data.error }
        return resp
      } catch (ee) {
        return { error: 'unexpected error' } // E.left({ error : "unexpected error" } )
      }
    }
  )
}

export const getRoomMembers = (input: TGetRoomMembersInput): TaskEither<TApiError, TGetRoomMembersOutput[]> => {
  return TE.tryCatch(
    async () => {
      const { data } = await AxiosClient().get(`/member/all?room=${input.roomID}`)
      return data.data
    },
    (e: any) => {
      try {
        const resp: TApiError = { error: e.response.data.error }
        return resp
      } catch (ee) {
        const resp: TApiError = { error: 'unexpected error' }
        return resp
      }
    }
  )
}
