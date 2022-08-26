import * as RoomApi from '../api/room';
import * as MemberApi from '../api/member';
import { TPostCreateNewRoomInput, TGetRoomInfoInput } from '../types/api/room';
import { TPostAddNewMemberInput, TGetRoomMembersInput } from '../types/api/member';
import * as E from 'fp-ts/Either'

export const useMeetHackApi = () => {
	const createRoom = (input: TPostCreateNewRoomInput) => {
		return (
            RoomApi.postCreateNewRoom(input)().then((ret) => { 
                if (E.isLeft(ret)){
                    throw "useMeetHackApi (createRoom)"
                } else {
                    return ret.right
                } 
            })  
        )
	};
	const addNewMember = (input: TPostAddNewMemberInput) => {
		return( 
            MemberApi.postAddNewMember(input)().then((ret) => { 
                if (E.isLeft(ret)){
                    throw "useMeetHackApi (addNewMember)"
                } else {
                    return ret.right
                } 
            }) 
        )
	};
	const getRoomInfo = (input: TGetRoomInfoInput) => {
		return (
            RoomApi.getRoomInfo(input)().then((ret) => { 
                if (E.isLeft(ret)){
                    throw "useMeetHackApi (getRoomInfo)"
                } else {
                    return ret.right
                } 
            })  
        )
	};
	const getRoomMembers = (input: TGetRoomMembersInput) => {
		return (
            MemberApi.getRoomMembers(input)().then((ret) => { 
                if (E.isLeft(ret)){
                    throw "useMeetHackApi (getRoomMembers)"
                } else {
                    return ret.right
                } 
            })  
        )
	};

	const getRoomFinish = (input: string | undefined) => {
		return RoomApi.getRoomFinish(input)();
	};

	return { createRoom, addNewMember, getRoomInfo, getRoomMembers, getRoomFinish };
};
