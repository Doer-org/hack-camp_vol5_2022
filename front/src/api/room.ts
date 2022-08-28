import {
  TPostCreateNewRoomInput,
  TPostCreateNewRoomOutput,
  TGetRoomInfoInput,
  TGetRoomInfoOutput,
} from '@/types/api/room'
import { TApiError } from '@/types/api/ApiError'
import * as TE from 'fp-ts/TaskEither'
import {AxiosClient} from "@/api/client"
import {TaskEither} from "fp-ts/TaskEither"

export const postCreateNewRoom = (input: TPostCreateNewRoomInput): TaskEither<TApiError, TPostCreateNewRoomOutput> => {
  const params = new URLSearchParams({
    name: input.name,
    max_count: input.max_count.toString(),
  })
  return TE.tryCatch(
    async () => {
      const { data } = await AxiosClient().post('/room/new', params)
      return data.data
    },
    (e: any) => {
      try {
        const resp: TApiError = { error: e.response.data.error }
        return resp
      } catch (ee) {
        return { error: 'unexpected error' }
      }
    }
  )
}

export const getRoomInfo = (input: TGetRoomInfoInput): TaskEither<TApiError, TGetRoomInfoOutput> => {
  return TE.tryCatch(
    async () => {
      const { data } = await AxiosClient().get(`/room/${input.roomID}`)
      return data.data
    },
    (e: any) => {
      try {
        const resp: TApiError = { error: e.response.data.error }
        return resp
      } catch (ee) {
        return { error: 'unexpected error' }
      }
    }
  )
}

export const getRoomFinish = (roomID: string): TaskEither<TApiError, void> => {
  return TE.tryCatch(
    async () => {
      if (typeof roomID !== 'undefined') {
        await AxiosClient().get(`/finish/${roomID}`)
      }
    },
    (e: any) => {
      try {
        const resp: TApiError = { error: e.response.data.error }
        return resp
      } catch (ee) {
        return { error: 'unexpected error' }
      }
    }
  )
}
