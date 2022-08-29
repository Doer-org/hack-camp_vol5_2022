import { describe, expect, it } from 'vitest' 
import { flow, pipe } from 'fp-ts/lib/function'
import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import * as MemberApi from '@/api/member'
import * as RoomApi from '@/api/room'
import { TPostAddNewMemberInput } from '@/types/api/member'

describe('getRoomMembers: /member/new?room={input.roomID}', () => {
  it('正常系：メンバーの情報を取得', async () => {
    const input = {
      name: 'test',
      max_count: 2
    } 
    const test = flow (
      RoomApi.postCreateNewRoom,
      TE.map((ok) => MemberApi.getRoomMembers({roomID : ok.id})),
      TE.flatten
    )
    const resp = await pipe (
      input,
      test
    )()
    expect(E.isRight(resp)).toBe(true) 
  })
})

const memberData = (n : string, id : string, q : string) : TPostAddNewMemberInput => { 
  return { 
    name: n,
    roomID: id,
    question: q,
    comment:  "",
    lang: "",
    github:  "",
    twitter:  "",
  }
} 

describe('postAddNewMember: /member/all?room={input.roomID}', () => {
  it('正常系：メンバーを追加', async () => { 
    const input = {
      name: 'test',
      max_count: 2
    } 
    const test = flow (
      RoomApi.postCreateNewRoom,
      TE.map((ok) => MemberApi.postAddNewMember(memberData("name", ok.id, "ques"))),
      TE.flatten
    )
    const resp = await pipe (
      input,
      test
    )()
    expect(E.isRight(resp)).toBe(true) 
  })
})
   


describe('postAddNewMember: /member/all?room={input.roomID}', () => {
  it('異常系：メンバー名が空', async () => { 
    const input = {
      name: 'test',
      max_count: 2
    } 
    const test = flow (
      RoomApi.postCreateNewRoom,
      TE.map((ok) => MemberApi.postAddNewMember(memberData("", ok.id, "ques"))),
      TE.flatten
    )
    const resp = await pipe (
      input,
      test
    )()
    expect(E.isLeft(resp)).toBe(true) 
  })
})
     

describe('postAddNewMember: /member/all?room={input.roomID}', () => {
  it('異常系：質問が空', async () => { 
    const input = {
      name: 'test',
      max_count: 2
    } 
    const test = flow (
      RoomApi.postCreateNewRoom,
      TE.map((ok) => MemberApi.postAddNewMember(memberData("name", ok.id, ""))),
      TE.flatten
    )
    const resp = await pipe (
      input,
      test
    )()
    expect(E.isLeft(resp)).toBe(true) 
  })
})
       