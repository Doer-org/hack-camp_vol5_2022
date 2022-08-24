import * as RoomApi from "../api/room"; 
import * as MemberApi from "../api/member"; 
import { TPostCreateNewRoomInput, TGetRoomInfoInput } from "../types/api/room";
import { TPostAddNewMemberInput,  TGetRoomMembersInput} from "../types/api/member";
 

export const useMeetHackApi = () => { 
    const createRoom =  (input : TPostCreateNewRoomInput) => {
        return  RoomApi.postCreateNewRoom(input)
    } 
    const addNewMember =  (input : TPostAddNewMemberInput) => {
        return  MemberApi.postAddNewMember(input) 
    }
    const getRoomInfo =  (input : TGetRoomInfoInput) => {
        return  RoomApi.getRoomInfo(input) 
    }
    const getRoomMembers =  (input : TGetRoomMembersInput) => {
        return  MemberApi.getRoomMembers(input) 
    }
    
    const getRoomFinish =  (input : string | undefined) => {
        return  RoomApi.getRoomFinish(input) 
    }
    return {createRoom, addNewMember, getRoomInfo, getRoomMembers, getRoomFinish}
}