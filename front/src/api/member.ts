import * as TE from 'fp-ts/TaskEither'
import {
  TPostAddNewMemberInput,
  TPostAddNewMemberOutput,
  TGetRoomMembersInput,
  TGetRoomMembersOutput,
} from '@/types/api/member'
import { TApiError } from '@/types/api/apiError'
import axios from 'axios'

function defaultArg(value: string | undefined, defaultValue: string): string {
  if (typeof value === 'string') {
    return value
  } else {
    return defaultValue
  }
}

export const postAddNewMember = (input: TPostAddNewMemberInput) => {
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
      const { data } = await axios.post(
        `/api/member/new?room=${input.roomID}`,
        params
      )
      const d: TPostAddNewMemberOutput = data.data
      return d
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

export const getRoomMembers = (input: TGetRoomMembersInput) => {
  return TE.tryCatch(
    async () => {
      const { data } = await axios.get(`/api/member/new?room=${input.roomID}`)
      const d: TGetRoomMembersOutput[] = data.data
      return d
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
