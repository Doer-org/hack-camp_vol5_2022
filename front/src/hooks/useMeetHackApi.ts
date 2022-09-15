import * as RoomApi from '../api/room'
import * as MemberApi from '../api/member'
import * as UserApi from "@/api/user"
import {
  IPostCreateNewRoomInput,
  IGetRoomInfoInput,
  IPostCreateNewRoomOutput,
  IGetRoomInfoOutput
} from '../types/api/room'
import {
  IPostAddNewMemberInput,
  IGetRoomMembersInput,
  IPostAddNewMemberOutput,
  IGetRoomMembersOutput
} from '../types/api/member'
import * as E from 'fp-ts/Either'
import { IPostLoginWithGithubOutput } from "@/types/api/user"

interface IApis {
	createRoom: (input: IPostCreateNewRoomInput) => Promise<IPostCreateNewRoomOutput>;
	addNewMember: (input: IPostAddNewMemberInput) => Promise<IPostAddNewMemberOutput>;
	getRoomInfo: (input: IGetRoomInfoInput) => Promise<IGetRoomInfoOutput>;
	getRoomMembers: (input: IGetRoomMembersInput) => Promise<IGetRoomMembersOutput[]>;
	getRoomFinish: (input: string) => Promise<void>;
  loginWithGithub: (uid: string, name: string) => Promise<IPostLoginWithGithubOutput>
}

export const useMeetHackApi = (): IApis => {
  const createRoom = async (input: IPostCreateNewRoomInput): Promise<IPostCreateNewRoomOutput> => {
    return await RoomApi.postCreateNewRoom(input)().then((ret) => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (createRoom)')
      } else {
        return ret.right
      }
    })
  }
  const addNewMember = async (input: IPostAddNewMemberInput): Promise<IPostAddNewMemberOutput> => {
    return await MemberApi.postAddNewMember(input)().then((ret) => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (addNewMember)')
      } else {
        return ret.right
      }
    })
  }
  const getRoomInfo = async (input: IGetRoomInfoInput): Promise<IGetRoomInfoOutput> => {
    return await RoomApi.getRoomInfo(input)().then((ret) => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (getRoomInfo)')
      } else {
        return ret.right
      }
    })
  }
  const getRoomMembers = async (input: IGetRoomMembersInput): Promise<IGetRoomMembersOutput[]> => {
    return await MemberApi.getRoomMembers(input)().then((ret) => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (getRoomMembers)')
      } else {
        return ret.right
      }
    })
  }

  const getRoomFinish = async (input: string): Promise<void> => {
    return await RoomApi.getRoomFinish(input)().then((ret) => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (getRoomMembers)')
      } else {
        return ret.right
      }
    })
  }

  const loginWithGithub = async (uid: string, name: string): Promise<IPostLoginWithGithubOutput> => {
    return await UserApi.PostLoginWithGithub({ uid, name })().then(ret => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (loginWithGithub)')
      } else {
        return ret.right
      }
    })
  }
  
  
  const getUserInfo = async (uid: string): Promise<IPostLoginWithGithubOutput> => {
    return await UserApi.GetUserInfo(uid)().then(ret => {
      if (E.isLeft(ret)) {
        throw Error('useMeetHackApi (getUserInfo)')
      } else {
        return ret.right
      }
    })
  }
  

  return { createRoom, addNewMember, getRoomInfo, getRoomMembers, getRoomFinish, loginWithGithub }
}
