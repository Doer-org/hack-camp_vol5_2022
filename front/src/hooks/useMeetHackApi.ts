import * as RoomApi from "../api/room"; 
import * as MemberApi from "../api/member"; 
import { TPostCreateNewRoomInput, TGetRoomInfoInput } from "../types/api/room";
import { TPostAddNewMemberInput,  TGetRoomMembersInput} from "../types/api/member";
 

export const useMeetHackApi = () => { 
    const createRoom = async (input : TPostCreateNewRoomInput) => {
        return await RoomApi.postCreateNewRoom(input)
    } 
    const addNewMember = async (input : TPostAddNewMemberInput) => {
        return await MemberApi.postAddNewMember(input) 
    }
    const getRoomInfo = async (input : TGetRoomInfoInput) => {
        return await RoomApi.getRoomInfo(input) 
    }
    const getRoomMembers = async (input : TGetRoomMembersInput) => {
        return await MemberApi.getRoomMembers(input) 
    }
    return {createRoom, addNewMember, getRoomInfo, getRoomMembers}
}