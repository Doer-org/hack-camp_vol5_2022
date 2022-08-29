import * as RoomApi from '../api/room'
import * as MemberApi from '../api/member'
import {
  TPostCreateNewRoomInput,
  TGetRoomInfoInput,
  TPostCreateNewRoomOutput,
  TGetRoomInfoOutput
} from '../types/api/room'
import {
  TPostAddNewMemberInput,
  TGetRoomMembersInput,
  TPostAddNewMemberOutput,
  TGetRoomMembersOutput
} from '../types/api/member'
import * as E from 'fp-ts/Either'

interface IApis {
	createRoom: (input: TPostCreateNewRoomInput) => Promise<TPostCreateNewRoomOutput>;
	addNewMember: (input: TPostAddNewMemberInput) => Promise<TPostAddNewMemberOutput>;
	getRoomInfo: (input: TGetRoomInfoInput) => Promise<TGetRoomInfoOutput>;
	getRoomMembers: (input: TGetRoomMembersInput) => Promise<TGetRoomMembersOutput[]>;
	getRoomFinish: (input: string | undefined) => Promise<void>;
}

export const useMeetHackApi = (): IApis => {
  const createRoom = async (input: TPostCreateNewRoomInput): Promise<TPostCreateNewRoomOutput> => {
    return await RoomApi.postCreateNewRoom(input)().then((ret) => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (createRoom)')
      } else {
        return ret.right
      }
    })
  }
  const addNewMember = async (input: TPostAddNewMemberInput): Promise<TPostAddNewMemberOutput> => {
    return await MemberApi.postAddNewMember(input)().then((ret) => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (addNewMember)')
      } else {
        return ret.right
      }
    })
  }
  const getRoomInfo = async (input: TGetRoomInfoInput): Promise<TGetRoomInfoOutput> => {
    return await RoomApi.getRoomInfo(input)().then((ret) => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (getRoomInfo)')
      } else {
        return ret.right
      }
    })
  }
  const getRoomMembers = async (input: TGetRoomMembersInput): Promise<TGetRoomMembersOutput[]> => {
    return await MemberApi.getRoomMembers(input)().then((ret) => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (getRoomMembers)')
      } else {
        return ret.right
      }
    })
  }

  const getRoomFinish = async (input: string | undefined): Promise<void> => {
    return await RoomApi.getRoomFinish(input)().then((ret) => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (getRoomMembers)')
      } else {
        return ret.right
      }
    })
  }
  return { createRoom, addNewMember, getRoomInfo, getRoomMembers, getRoomFinish }
}
