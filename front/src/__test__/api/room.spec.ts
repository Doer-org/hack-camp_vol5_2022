import { describe, expect, it } from 'vitest' 
import { flow, pipe } from 'fp-ts/lib/function'
import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import * as RoomApi from '@/api/room'

describe('/room/new', () => {
  it('正常系：新たにRoomを作成', async () => {
    const input = {
      name: 'roomName',
      max_count: 2
    }
    const resp = await RoomApi.postCreateNewRoom(input)()
    expect(E.isRight(resp)).toBe(true) 
  })
})

describe('/room/new', () => {
  it('異常系：Room名に空文字を指定', async () => {
    const input = {
      name: '',
      max_count: 2
    }
    const resp = await RoomApi.postCreateNewRoom(input)()
    expect(E.isLeft(resp)).toBe(true)  
  })
})

// describe('/room/new', () => {
//   it('異常系：部屋の最大人数max_count >= 2', async () => {
//     const input = {
//       name : "roomName",
//       max_count : 1
//     }
//     const resp = await RoomApi.postCreateNewRoom(input)()
//     expect(E.isLeft(resp)).toBe(true)  
//   })
// }) 

describe('/room/{input.roomID}', () => {
  it('正常系：Room情報を取得', async () => {
    const getRoomInfoTesting = 
        flow(
          RoomApi.postCreateNewRoom,
          TE.map(
            (ok) => RoomApi.getRoomInfo({roomID:ok.id})
          ),
          TE.flatten
        )
    const input = {
      name: 'test',
      max_count: 2
    }  
    const resp = await pipe(input,getRoomInfoTesting)()  
    expect(E.isRight(resp)).toBe(true)  
  })
})


describe('/room/finish/{roomID}', () => {
  it('正常系', async () => {
    const input = 
        {
          name: 'test',
          max_count: 2
        }
    const getRoomFinishTesting = 
          flow(
            RoomApi.postCreateNewRoom,
            TE.map(
              (ok) => RoomApi.getRoomFinish(ok.id)
            ),
            TE.flatten
          ) 
    const resp = await pipe(
      input,
      getRoomFinishTesting
    )()  
    expect(E.isRight(resp)).toBe(true)  
  })
})
  

