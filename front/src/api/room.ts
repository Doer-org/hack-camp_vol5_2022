import {
  TPostCreateNewRoomInput,
  TPostCreateNewRoomOutput,
  TGetRoomInfoInput,
  TGetRoomInfoOutput,
} from '@/types/api/room'
import { TApiError } from '@/types/api/ApiError'
import * as TE from 'fp-ts/TaskEither'
import axios from 'axios' 

export const postCreateNewRoom = (input: TPostCreateNewRoomInput) : TE.TaskEither<TApiError, TPostCreateNewRoomOutput> => {
  const params = new URLSearchParams({
    name: input.name,
    max_count: input.max_count.toString(),
  })
  return TE.tryCatch(
    async () => {
      const { data } = await axios.post('/api/room/new', params)
      const d: TPostCreateNewRoomOutput = data.data
      return d
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

export const getRoomInfo = (input: TGetRoomInfoInput) : TE.TaskEither<TApiError, TGetRoomInfoOutput>=> {
  return TE.tryCatch(
    async () => {
      const { data } = await axios.get(`/api/room/${input.roomID}`)
      const d: TGetRoomInfoOutput = data.data
      return d
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

export const getRoomFinish = (roomID: string | undefined) : TE.TaskEither<TApiError, void>=> {
  return TE.tryCatch(
    async () => {
      if (typeof roomID !== 'undefined') {
        await axios.get(`/api/finish/${roomID}`)
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
