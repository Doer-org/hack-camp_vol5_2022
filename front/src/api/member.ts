import * as E from 'fp-ts/Either'
import { TPostAddNewMemberInput, TPostAddNewMemberOutput, TGetRoomMembersInput, TGetRoomMembersOutput }  from '../types/api/member' 
import { TApiError }  from '../types/api/ApiError' 
import { axiosClient } from './client'
 

export const postAddNewMember = async (input : TPostAddNewMemberInput) : Promise<E.Either<TApiError,TPostAddNewMemberOutput>> => { 
    try{ 
        const {data} : {data : TPostAddNewMemberOutput} = await axiosClient().post('/member/new?room=' + input.roomID, input);  
        return E.right(data);  
    } 
    catch (e : any) {  
        try { 
            const resp : TApiError = { error : e.response.data.error } 
            return E.left(resp)  
        } catch (ee) {
            return E.left({ error : "unexpected error" } ) 
        }
    }  
}

export const getRoomMembers = async (input : TGetRoomMembersInput) : Promise<E.Either<TApiError, TGetRoomMembersOutput[]>> => { 
    try{ 
        const {data} : {data : TGetRoomMembersOutput[]} = await axiosClient().get('/member/all?room=' + input.roomID); 
        return E.right(data);  
    } 
    catch (e : any) {  
        try { 
            const resp : TApiError = { error : e.response.data.error } 
            return E.left(resp)  
        } catch (ee) {
            return E.left({ error : "unexpected error" } ) 
        }
    } 
}
