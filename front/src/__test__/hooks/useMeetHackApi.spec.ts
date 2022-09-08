import { describe, expect, it } from 'vitest' 
import { useMeetHackApi } from '@/hooks/useMeetHackApi' 
import { IPostCreateNewRoomInput } from '@/types/api/room'

describe('createRoom', () => {
  it('正常系：レスポンスのルーム名のチェック', async () => {
    const { createRoom } = useMeetHackApi()
    const roomName = "test"
    const input : IPostCreateNewRoomInput= {
      name:roomName,
      max_count: 2 
    }
    const resp = await createRoom(input)
    expect(resp.name).toBe(roomName) 
  })
})
  