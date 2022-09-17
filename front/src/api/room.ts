import {
  IPostCreateNewRoomInput,
  IPostCreateNewRoomOutput,
  IGetRoomInfoInput,
  IGetRoomInfoOutput,
} from '@/types/api/room'
import { IApiError } from '@/types/api/ApiError'
import * as TE from 'fp-ts/TaskEither'
import { AxiosClient } from "@/api/client"
import { TaskEither } from "fp-ts/TaskEither"

export const postCreateNewRoom = (input: IPostCreateNewRoomInput): TaskEither<IApiError, IPostCreateNewRoomOutput> => {
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
        const resp: IApiError = { error: e.response.data.error }
        return resp
      } catch (ee) {
        return { error: 'unexpected error' }
      }
    }
  )
}

export const getRoomInfo = (input: IGetRoomInfoInput): TaskEither<IApiError, IGetRoomInfoOutput> => {
  return TE.tryCatch(
    async () => {
      const { data } = await AxiosClient().get(`/room/${input.roomID}`)
      return data.data
    },
    (e: any) => {
      try {
        const resp: IApiError = { error: e.response.data.error }
        return resp
      } catch (ee) {
        return { error: 'unexpected error' }
      }
    }
  )
}

export const getRoomFinish = (roomID: string): TaskEither<IApiError, void> => {
  return TE.tryCatch(
    async () => {
      if (typeof roomID !== 'undefined') {
        await AxiosClient().get(`/room/finish/${roomID}`)
      }
    },
    (e: any) => {
      try {
        const resp: IApiError = { error: e.response.data.error }
        return resp
      } catch (ee) {
        return { error: 'unexpected error' }
      }
    }
  )
}
